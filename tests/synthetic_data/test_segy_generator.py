"""Tests for SEG-Y file generator."""
import pytest
import tempfile
import os
import segyio
from synthetic_data.seismic import SEGYGenerator


def test_segy_generator_creates_file():
    """Generator should create a valid SEG-Y file."""
    generator = SEGYGenerator(seed=42)
    
    segy_path = generator.create_record(
        survey_name="Test-Survey-001",
        n_inlines=10,
        n_crosslines=10,
        n_samples=100,
        sample_interval=4000,
        output_dir=None
    )
    
    assert os.path.exists(segy_path)
    
    with segyio.open(segy_path, 'r') as segy_file:
        assert segy_file is not None


def test_segy_generator_has_correct_geometry():
    """Generated SEG-Y should have correct geometry."""
    generator = SEGYGenerator(seed=42)
    
    with tempfile.TemporaryDirectory() as tmpdir:
        segy_path = generator.create_record(
            survey_name="Test-Survey",
            n_inlines=5,
            n_crosslines=8,
            n_samples=50,
            sample_interval=4000,
            output_dir=tmpdir
        )
        
        with segyio.open(segy_path, 'r') as segy_file:
            cube = segyio.tools.cube(segy_file)
            
            assert cube.shape == (5, 8, 50)


def test_segy_generator_trace_headers():
    """Generated SEG-Y should have proper trace headers."""
    generator = SEGYGenerator(seed=42)
    
    with tempfile.TemporaryDirectory() as tmpdir:
        segy_path = generator.create_record(
            survey_name="Test-Survey",
            n_inlines=3,
            n_crosslines=3,
            n_samples=20,
            sample_interval=4000,
            output_dir=tmpdir
        )
        
        with segyio.open(segy_path, 'r') as segy_file:
            assert len(segy_file.ilines) == 3
            assert len(segy_file.xlines) == 3
            
            for i, header in enumerate(segy_file.header):
                assert segyio.su.iline in header
                assert segyio.su.xline in header


def test_segy_generator_amplitude_range():
    """Generated amplitudes should be in realistic range."""
    generator = SEGYGenerator(seed=42)
    
    with tempfile.TemporaryDirectory() as tmpdir:
        segy_path = generator.create_record(
            survey_name="Test-Survey",
            n_inlines=10,
            n_crosslines=10,
            n_samples=100,
            sample_interval=4000,
            output_dir=tmpdir
        )
        
        with segyio.open(segy_path, 'r') as segy_file:
            cube = segyio.tools.cube(segy_file)
            
            assert cube.min() >= -32767
            assert cube.max() <= 32767