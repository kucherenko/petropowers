"""Tests for SCADAMapper OSDU manifest generator."""
import tempfile
import os
import pandas as pd
from synthetic_data.osdu import SCADAMapper


def _make_csv(tmpdir: str, well_name: str = "Test-Well-001") -> str:
    """Write a minimal production CSV and return its path."""
    path = os.path.join(tmpdir, f"{well_name}_production.csv")
    df = pd.DataFrame({
        "date": ["2022-01-01", "2022-01-02"],
        "oil_rate_bbl_d": [500.0, 490.0],
        "gas_rate_mscf_d": [1000.0, 980.0],
        "water_rate_bbl_d": [50.0, 55.0],
        "wellhead_pressure_psi": [2000.0, 1990.0],
        "temperature_f": [200.0, 201.0],
    })
    df.to_csv(path, index=False)
    return path


def test_scada_mapper_returns_manifest():
    """to_manifest should return a dict with OSDU structure."""
    mapper = SCADAMapper()
    with tempfile.TemporaryDirectory() as tmpdir:
        csv_path = _make_csv(tmpdir)
        manifest = mapper.to_manifest(
            csv_path,
            legal_tags={"legaltags": ["test-tag"]},
        )
        assert isinstance(manifest, dict)
        assert "data" in manifest
        assert "WorkProduct" in manifest["data"]


def test_scada_mapper_kind():
    """Manifest WorkProduct kind should reference Facility."""
    mapper = SCADAMapper()
    with tempfile.TemporaryDirectory() as tmpdir:
        csv_path = _make_csv(tmpdir)
        manifest = mapper.to_manifest(
            csv_path,
            legal_tags={"legaltags": ["test-tag"]},
        )
        kind = manifest["data"]["WorkProduct"]["kind"]
        assert "Facility" in kind or "ProductionData" in kind


def test_scada_mapper_legal_tags():
    """Manifest should include provided legal tags."""
    mapper = SCADAMapper()
    with tempfile.TemporaryDirectory() as tmpdir:
        csv_path = _make_csv(tmpdir)
        manifest = mapper.to_manifest(
            csv_path,
            legal_tags={"legaltags": ["my-legal-tag"]},
        )
        legal = manifest["data"]["WorkProduct"]["legal"]
        assert "my-legal-tag" in legal["legaltags"]


def test_scada_mapper_well_name_in_id():
    """Manifest ID should contain the well name."""
    mapper = SCADAMapper()
    with tempfile.TemporaryDirectory() as tmpdir:
        csv_path = _make_csv(tmpdir, well_name="PPR1-Well-007")
        manifest = mapper.to_manifest(
            csv_path,
            legal_tags={"legaltags": ["tag"]},
        )
        entity_id = manifest["data"]["WorkProduct"]["id"]
        assert "PPR1-Well-007" in entity_id
