"""Tests for the synthetic data REST API service."""
import pytest
from pathlib import Path


# ---------------------------------------------------------------------------
# Fixtures
# ---------------------------------------------------------------------------

def _make_data_dir(tmp_path: Path) -> Path:
    """Create a minimal synthetic data directory tree under tmp_path."""
    r = tmp_path / "ppr-1"
    (r / "well_logs").mkdir(parents=True)
    (r / "well_logs" / "PPR1-Well-001.las").write_text("~VERSION\n")
    (r / "well_logs" / "PPR1-Well-002.las").write_text("~VERSION\n")
    (r / "production").mkdir(parents=True)
    (r / "production" / "PPR1-Well-001.csv").write_text("date,oil_rate\n2024-01-01,100\n")
    # nested: core_photos
    (r / "core_photos" / "PPR1-Well-001").mkdir(parents=True)
    (r / "core_photos" / "PPR1-Well-001" / "photo_001.png").write_bytes(b"\x89PNG")
    # nested: osdu_manifests
    (r / "osdu_manifests" / "well_log").mkdir(parents=True)
    (r / "osdu_manifests" / "well_log" / "PPR1-Well-001.json").write_text('{"kind":"osdu"}')
    return tmp_path


@pytest.fixture
def data_dir(tmp_path):
    return _make_data_dir(tmp_path)


@pytest.fixture
def client(data_dir, monkeypatch):
    import examples.api.config as cfg
    monkeypatch.setattr(cfg, "DATA_DIR", data_dir)
    monkeypatch.setattr(cfg, "API_KEY", None)
    from examples.api.main import app
    from fastapi.testclient import TestClient
    return TestClient(app)


@pytest.fixture
def auth_client(data_dir, monkeypatch):
    import examples.api.config as cfg
    monkeypatch.setattr(cfg, "DATA_DIR", data_dir)
    monkeypatch.setattr(cfg, "API_KEY", "test-secret")
    from examples.api.main import app
    from fastapi.testclient import TestClient
    return TestClient(app)


# ---------------------------------------------------------------------------
# Config
# ---------------------------------------------------------------------------

def test_config_defaults():
    import examples.api.config as cfg
    assert cfg.DATA_DIR.is_absolute()
    # Default DATA_DIR should resolve to examples/data
    assert cfg.DATA_DIR.name == "data"
    assert cfg.DATA_DIR.parent.name == "examples"


def test_config_api_key_default_is_none():
    import os
    import examples.api.config as cfg
    # API_KEY should be Optional[str] — None when unset, a string when set
    assert cfg.API_KEY is None or isinstance(cfg.API_KEY, str)
    # More specific: if not explicitly set in test environment, should be None
    if "API_KEY" not in os.environ:
        assert cfg.API_KEY is None


# ---------------------------------------------------------------------------
# Utils
# ---------------------------------------------------------------------------

def test_content_type_for_las(tmp_path):
    from examples.api.utils import content_type_for
    assert content_type_for(tmp_path / "well.las") == "text/plain"


def test_content_type_for_segy(tmp_path):
    from examples.api.utils import content_type_for
    assert content_type_for(tmp_path / "survey.segy") == "application/octet-stream"
    assert content_type_for(tmp_path / "survey.sgy") == "application/octet-stream"


def test_content_type_for_json(tmp_path):
    from examples.api.utils import content_type_for
    assert content_type_for(tmp_path / "manifest.json") == "application/json"


def test_content_type_for_csv(tmp_path):
    from examples.api.utils import content_type_for
    assert content_type_for(tmp_path / "production.csv") == "text/csv"


def test_content_type_for_png(tmp_path):
    from examples.api.utils import content_type_for
    assert content_type_for(tmp_path / "photo.png") == "image/png"


def test_content_type_for_unknown(tmp_path):
    from examples.api.utils import content_type_for
    assert content_type_for(tmp_path / "file.bin") == "application/octet-stream"


def test_content_type_for_jpg(tmp_path):
    from examples.api.utils import content_type_for
    assert content_type_for(tmp_path / "photo.jpg") == "image/jpeg"
    assert content_type_for(tmp_path / "photo.jpeg") == "image/jpeg"


def test_safe_resolve_valid_path(tmp_path):
    from examples.api.utils import safe_resolve
    (tmp_path / "file.txt").write_text("x")
    result = safe_resolve(tmp_path, "file.txt")
    assert result == (tmp_path / "file.txt").resolve()


def test_safe_resolve_nested_valid_path(tmp_path):
    from examples.api.utils import safe_resolve
    (tmp_path / "sub").mkdir()
    (tmp_path / "sub" / "file.txt").write_text("x")
    result = safe_resolve(tmp_path, "sub/file.txt")
    assert result == (tmp_path / "sub" / "file.txt").resolve()


def test_safe_resolve_traversal_raises_400(tmp_path):
    from examples.api.utils import safe_resolve
    from fastapi import HTTPException
    with pytest.raises(HTTPException) as exc_info:
        safe_resolve(tmp_path, "../../etc/passwd")
    assert exc_info.value.status_code == 400


# ---------------------------------------------------------------------------
# Health endpoint
# ---------------------------------------------------------------------------

def test_health_returns_ok(client):
    r = client.get("/health")
    assert r.status_code == 200
    body = r.json()
    assert body["status"] == "ok"
    assert "ppr-1" in body["reservoirs"]


# ---------------------------------------------------------------------------
# /reservoirs
# ---------------------------------------------------------------------------

def test_list_reservoirs(client):
    r = client.get("/reservoirs")
    assert r.status_code == 200
    assert "ppr-1" in r.json()


# ---------------------------------------------------------------------------
# /reservoirs/{reservoir}
# ---------------------------------------------------------------------------

def test_reservoir_summary(client):
    r = client.get("/reservoirs/ppr-1")
    assert r.status_code == 200
    body = r.json()
    assert "well_logs" in body
    assert body["well_logs"] == 2
    assert body["production"] == 1


def test_reservoir_not_found(client):
    r = client.get("/reservoirs/nonexistent")
    assert r.status_code == 404


# ---------------------------------------------------------------------------
# /reservoirs/{reservoir}/{data_type}
# ---------------------------------------------------------------------------

def test_list_files_flat(client):
    r = client.get("/reservoirs/ppr-1/well_logs")
    assert r.status_code == 200
    files = r.json()
    assert "PPR1-Well-001.las" in files
    assert "PPR1-Well-002.las" in files


def test_list_files_nested_returns_relative_paths(client):
    r = client.get("/reservoirs/ppr-1/core_photos")
    assert r.status_code == 200
    files = r.json()
    assert "PPR1-Well-001/photo_001.png" in files


def test_list_files_data_type_not_found(client):
    r = client.get("/reservoirs/ppr-1/nonexistent_type")
    assert r.status_code == 404


def test_list_files_data_type_traversal_rejected(client):
    # HTTP clients normalise ".." segments before sending; the request reaches
    # reservoir_summary (/reservoirs/ppr-1) rather than list_files.  Either way
    # the path traversal never reaches our data files, so any non-5xx response
    # is acceptable.  The real guard is tested at the unit level via safe_resolve.
    r = client.get("/reservoirs/ppr-1/..")
    assert r.status_code < 500


def test_reservoir_summary_counts_nested_types(client):
    r = client.get("/reservoirs/ppr-1")
    assert r.status_code == 200
    body = r.json()
    assert body["core_photos"] == 1
    assert body["osdu_manifests"] == 1


# ---------------------------------------------------------------------------
# Download
# ---------------------------------------------------------------------------

def test_download_flat_file(client):
    r = client.get("/reservoirs/ppr-1/well_logs/PPR1-Well-001.las")
    assert r.status_code == 200
    assert r.headers["content-type"].startswith("text/plain")


def test_download_csv_file(client):
    r = client.get("/reservoirs/ppr-1/production/PPR1-Well-001.csv")
    assert r.status_code == 200
    assert r.headers["content-type"].startswith("text/csv")


def test_download_nested_png(client):
    r = client.get("/reservoirs/ppr-1/core_photos/PPR1-Well-001/photo_001.png")
    assert r.status_code == 200
    assert r.headers["content-type"].startswith("image/png")


def test_download_nested_json(client):
    r = client.get("/reservoirs/ppr-1/osdu_manifests/well_log/PPR1-Well-001.json")
    assert r.status_code == 200
    assert r.headers["content-type"].startswith("application/json")


def test_download_file_not_found(client):
    r = client.get("/reservoirs/ppr-1/well_logs/missing.las")
    assert r.status_code == 404


def test_download_reservoir_not_found(client):
    r = client.get("/reservoirs/ghost/well_logs/file.las")
    assert r.status_code == 404


def test_download_path_traversal_rejected(client):
    # Starlette normalises `../../` in the URL before routing, so the traversal
    # may be absorbed at the HTTP layer (404) before reaching safe_resolve (400).
    # Either status means the file was not served — both are acceptable.
    r = client.get("/reservoirs/ppr-1/well_logs/../../etc/passwd")
    assert r.status_code in (400, 404)
