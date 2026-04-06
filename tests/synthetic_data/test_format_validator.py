"""Tests for format validation."""
import pytest
import tempfile
import os
import numpy as np
from synthetic_data.validators import FormatValidator


def test_format_validator_valid_las():
    """Valid LAS file should pass format validation."""
    validator = FormatValidator()
    
    # Create a simple valid LAS file
    with tempfile.TemporaryDirectory() as tmpdir:
        las_path = os.path.join(tmpdir, "test.las")
        with open(las_path, 'w') as f:
            f.write("""~VERSION INFORMATION
VERS. 2.0:
WRAP. NO:
~WELL INFORMATION
STRT.M 1000.0:
STOP.M 2000.0:
STEP.M 0.15:
NULL. -999.25:
WELL. Test-Well:
~CURVE INFORMATION
DEPT.M : Depth
GR.API : Gamma Ray
~PARAMETER INFORMATION
~OTHER INFORMATION
~A 1000.0 50.0
1000.15 51.2
""")
        
        is_valid, errors = validator.validate_las(las_path)
        assert is_valid
        assert errors == []


def test_format_validator_valid_segy():
    """Valid SEG-Y file should pass format validation."""
    import segyio
    
    validator = FormatValidator()
    
    # Create a simple valid SEG-Y file
    with tempfile.TemporaryDirectory() as tmpdir:
        segy_path = os.path.join(tmpdir, "test.sgy")
        
        # Create minimal SEG-Y
        spec = segyio.spec()
        spec.format = 1
        spec.sorting = 2
        spec.iline = 5
        spec.xline = 21
        spec.samples = np.arange(10) * 0.004
        spec.ilines = [1]
        spec.xlines = [1]
        
        with segyio.create(segy_path, spec) as f:
            f.trace = [np.zeros(10)]
        
        is_valid, errors = validator.validate_segy(segy_path)
        assert is_valid


def test_format_validator_invalid_file():
    """Invalid file should fail validation."""
    validator = FormatValidator()
    
    # Non-existent file
    is_valid, errors = validator.validate_las("/nonexistent/file.las")
    assert not is_valid
    assert len(errors) > 0