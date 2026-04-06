"""Tests for GET /reservoirs/{reservoir}/geometry."""
import json
import os
import tempfile
from pathlib import Path

import pytest
from fastapi.testclient import TestClient


@pytest.fixture()
def data_dir(tmp_path: Path) -> Path:
    """Create a minimal data directory with geometry files for ppr-1."""
    geo_dir = tmp_path / "ppr-1" / "geometry"
    geo_dir.mkdir(parents=True)

    wells = [{"name": f"PPR1-Well-{i:03d}", "x_m": float(i * 100), "y_m": float(i * 80)}
             for i in range(1, 4)]
    boundary = [{"x_m": 0.0, "y_m": 0.0}, {"x_m": 500.0, "y_m": 0.0},
                {"x_m": 500.0, "y_m": 400.0}, {"x_m": 0.0, "y_m": 400.0}]

    (geo_dir / "wells.json").write_text(json.dumps(wells))
    (geo_dir / "boundary.json").write_text(json.dumps(boundary))
    return tmp_path


@pytest.fixture()
def client(data_dir: Path, monkeypatch: pytest.MonkeyPatch) -> TestClient:
    """Return a TestClient with DATA_DIR pointing to the temp fixture."""
    monkeypatch.setenv("DATA_DIR", str(data_dir))
    # Re-import app after env is set so config picks up the new DATA_DIR
    import importlib
    import api.config as cfg
    importlib.reload(cfg)
    import api.main as app_module
    importlib.reload(app_module)
    return TestClient(app_module.app)


def test_geometry_200(client: TestClient) -> None:
    r = client.get("/reservoirs/ppr-1/geometry")
    assert r.status_code == 200
    body = r.json()
    assert "wells" in body
    assert "boundary" in body
    assert len(body["wells"]) == 3
    assert body["wells"][0] == {"name": "PPR1-Well-001", "x_m": 100.0, "y_m": 80.0}
    assert len(body["boundary"]) == 4


def test_geometry_404_unknown_reservoir(client: TestClient) -> None:
    r = client.get("/reservoirs/does-not-exist/geometry")
    assert r.status_code == 404


def test_geometry_404_missing_wells_file(client: TestClient, data_dir: Path) -> None:
    (data_dir / "ppr-1" / "geometry" / "wells.json").unlink()
    r = client.get("/reservoirs/ppr-1/geometry")
    assert r.status_code == 404


def test_geometry_404_missing_boundary_file(client: TestClient, data_dir: Path) -> None:
    (data_dir / "ppr-1" / "geometry" / "boundary.json").unlink()
    r = client.get("/reservoirs/ppr-1/geometry")
    assert r.status_code == 404


def test_geometry_400_path_traversal(client: TestClient) -> None:
    r = client.get("/reservoirs/../etc/geometry")
    # FastAPI will either 400 or 404 — either is acceptable; must not be 200
    assert r.status_code in (400, 404)
