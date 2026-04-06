"""Tests for LAS file generator."""
import pytest
import tempfile
import os
import lasio
from synthetic_data.well_log import LASGenerator


def test_las_generator_creates_file():
    """Generator should create a valid LAS file."""
    generator = LASGenerator(seed=42)
    
    las_path = generator.create_record(
        well_name="Test-Well-001",
        curves=["GR", "RHOB", "NPHI"],
        depth_range=(1000.0, 2000.0),
        sample_interval=0.15,
        lithology="sandstone"
    )
    
    assert os.path.exists(las_path)
    
    # Verify it opens with lasio
    log = lasio.read(las_path)
    assert log is not None


def test_las_generator_has_correct_metadata():
    """Generated LAS should have correct well metadata."""
    generator = LASGenerator(seed=42)
    
    with tempfile.TemporaryDirectory() as tmpdir:
        las_path = generator.create_record(
            well_name="Test-Well-001",
            field_name="TestField",
            company="TestCompany",
            curves=["GR", "RHOB"],
            depth_range=(1000.0, 1100.0),
            sample_interval=0.5,
            lithology="sandstone",
            output_dir=tmpdir
        )
        
        log = lasio.read(las_path)
        
        assert log.well["WELL"].value == "Test-Well-001"
        assert log.well["FLD"].value == "TestField"
        assert log.well["COMP"].value == "TestCompany"


def test_las_generator_has_curves():
    """Generated LAS should contain requested curves."""
    generator = LASGenerator(seed=42)
    
    with tempfile.TemporaryDirectory() as tmpdir:
        las_path = generator.create_record(
            well_name="Test-Well-001",
            curves=["GR", "RHOB", "NPHI", "RT"],
            depth_range=(1000.0, 1020.0),
            sample_interval=0.5,
            lithology="sandstone",
            output_dir=tmpdir
        )
        
        log = lasio.read(las_path)
        
        assert "GR" in log.keys()
        assert "RHOB" in log.keys()
        assert "NPHI" in log.keys()
        assert "RT" in log.keys()
        assert "DEPT" in log.keys()


def test_las_generator_depth_range():
    """Generated LAS should have correct depth range."""
    generator = LASGenerator(seed=42)
    
    with tempfile.TemporaryDirectory() as tmpdir:
        las_path = generator.create_record(
            well_name="Test-Well-001",
            curves=["GR"],
            depth_range=(500.0, 1500.0),
            sample_interval=0.25,
            lithology="sandstone",
            output_dir=tmpdir
        )
        
        log = lasio.read(las_path)
        df = log.df()
        
        assert df.index.min() == pytest.approx(500.0, abs=0.1)
        assert df.index.max() == pytest.approx(1500.0, abs=0.1)


def test_las_generator_dataset():
    """Generator should create multiple files for dataset."""
    generator = LASGenerator(seed=42)
    
    with tempfile.TemporaryDirectory() as tmpdir:
        dataset = generator.create_dataset(
            n_records=3,
            well_names=["Well-001", "Well-002", "Well-003"],
            curves=["GR", "RHOB"],
            depth_range=(1000.0, 1100.0),
            sample_interval=0.5,
            lithology="sandstone",
            output_dir=tmpdir
        )
        
        assert len(dataset) == 3
        for file_path in dataset:
            assert os.path.exists(file_path)
            log = lasio.read(file_path)
            assert "GR" in log.keys()