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
