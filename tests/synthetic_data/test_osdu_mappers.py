"""Tests for OSDU mappers."""
import pytest
import tempfile
import os
import lasio
from synthetic_data.osdu import OSDUMapper
from synthetic_data.osdu import LASMapper


class ConcreteMapper(OSDUMapper):
    """Test implementation."""
    
    def to_manifest(self, data, legal_tags):
        return {"manifest": "test"}


def test_osdu_mapper_is_abstract():
    """OSDUMapper should be abstract."""
    with pytest.raises(TypeError):
        OSDUMapper()


def test_concrete_mapper_to_manifest():
    """Concrete mapper should implement to_manifest."""
    mapper = ConcreteMapper()
    manifest = mapper.to_manifest({"test": "data"}, {"legaltags": ["test"]})
    
    assert manifest == {"manifest": "test"}


def test_las_mapper_to_manifest():
    """LAS mapper should create valid OSDU manifest."""
    mapper = LASMapper()
    
    with tempfile.TemporaryDirectory() as tmpdir:
        las_path = os.path.join(tmpdir, "test.las")
        
        las = lasio.LASFile()
        las.well.append(lasio.HeaderItem("WELL", value="Test-Well-001"))
        las.well.append(lasio.HeaderItem("FLD", value="Test-Field"))
        las.well.append(lasio.HeaderItem("COMP", value="Test-Company"))
        las.append_curve("DEPT", [1000.0, 1000.5, 1001.0], unit="m")
        las.append_curve("GR", [50.0, 60.0, 55.0], unit="API")
        las.write(las_path)
        
        manifest = mapper.to_manifest(
            las_path,
            legal_tags={"legaltags": ["test-legal-tag"]}
        )
        
        assert "data" in manifest
        assert "WorkProduct" in manifest["data"]
        assert manifest["data"]["WorkProduct"]["kind"] == "osdu:wks:work-product--WellLog:1.0.0"


def test_las_mapper_curve_mapping():
    """LAS mapper should map curves correctly."""
    mapper = LASMapper()
    
    with tempfile.TemporaryDirectory() as tmpdir:
        las_path = os.path.join(tmpdir, "test.las")
        
        las = lasio.LASFile()
        las.well.append(lasio.HeaderItem("WELL", value="Test-Well"))
        las.append_curve("DEPT", [1000.0, 1001.0], unit="m")
        las.append_curve("GR", [50.0, 60.0], unit="API")
        las.append_curve("RHOB", [2.5, 2.6], unit="g/cc")
        las.write(las_path)
        
        manifest = mapper.to_manifest(
            las_path,
            legal_tags={"legaltags": ["test-tag"]}
        )
        
        work_product = manifest["data"]["WorkProduct"]
        curves = work_product["data"]["LogCurveData"]["Curves"]
        
        assert len(curves) == 2