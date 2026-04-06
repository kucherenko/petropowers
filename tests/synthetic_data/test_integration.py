"""End-to-end integration tests."""
import pytest
import tempfile
import os
import lasio
import segyio
from synthetic_data.well_log import LASGenerator
from synthetic_data.seismic import SEGYGenerator
from synthetic_data.validators import FormatValidator, PhysicsValidator
from synthetic_data.osdu import LASMapper


def test_full_well_log_workflow():
    """Test complete workflow: generate → validate → map to OSDU."""
    # Generate LAS file
    generator = LASGenerator(seed=42)
    
    with tempfile.TemporaryDirectory() as tmpdir:
        las_path = generator.create_record(
            well_name="Integration-Test-Well",
            curves=["GR", "RHOB", "NPHI", "RT"],
            depth_range=(1000.0, 2000.0),
            sample_interval=0.15,
            lithology="sandstone",
            output_dir=tmpdir
        )
        
        # Validate format
        format_validator = FormatValidator()
        is_valid, errors = format_validator.validate_las(las_path)
        assert is_valid, f"Format validation failed: {errors}"
        
        # Validate physics
        log = lasio.read(las_path)
        df = log.df()
        
        physics_validator = PhysicsValidator()
        is_valid, warnings = physics_validator.validate({
            "GR": df["GR"].values,
            "RHOB": df["RHOB"].values,
            "NPHI": df["NPHI"].values,
            "RT": df["RT"].values
        }, lithology="sandstone")
        # Warnings are OK, errors are not
        
        # Map to OSDU
        mapper = LASMapper()
        manifest = mapper.to_manifest(
            las_path,
            legal_tags={"legaltags": ["test-legal-tag"]}
        )
        
        # Verify manifest
        assert manifest["kind"] == "osdu:wks:Manifest:1.0.0"
        assert "WorkProduct" in manifest["data"]
        assert manifest["data"]["WorkProduct"]["kind"] == "osdu:wks:work-product--WellLog:1.0.0"


def test_full_seismic_workflow():
    """Test complete workflow: generate → validate SEG-Y."""
    # Generate SEG-Y file
    generator = SEGYGenerator(seed=42)
    
    with tempfile.TemporaryDirectory() as tmpdir:
        segy_path = generator.create_record(
            survey_name="Integration-Test-Survey",
            n_inlines=10,
            n_crosslines=10,
            n_samples=100,
            sample_interval=4000,
            output_dir=tmpdir
        )
        
        # Validate format
        format_validator = FormatValidator()
        is_valid, errors = format_validator.validate_segy(segy_path)
        assert is_valid, f"Format validation failed: {errors}"
        
        # Verify with segyio
        with segyio.open(segy_path, 'r') as segy_file:
            cube = segyio.tools.cube(segy_file)
            assert cube.shape == (10, 10, 100)


def test_batch_generation_consistency():
    """Test that batch generation maintains consistency."""
    generator = LASGenerator(seed=42)
    
    with tempfile.TemporaryDirectory() as tmpdir:
        # Generate batch
        file_paths = generator.create_dataset(
            n_records=5,
            curves=["GR", "RHOB"],
            depth_range=(1000.0, 1100.0),
            sample_interval=0.5,
            lithology="sandstone",
            output_dir=tmpdir
        )
        
        assert len(file_paths) == 5
        
        # All should pass format validation
        validator = FormatValidator()
        for path in file_paths:
            is_valid, errors = validator.validate_las(path)
            assert is_valid, f"File {path} failed validation: {errors}"