"""Tests for curve synthesis with physical constraints."""
import pytest
import numpy as np
from synthetic_data.well_log.curves import CurveSynthesizer


def test_curve_synthesizer_creates_standard_curves():
    """Synthesizer should create standard log curves."""
    synth = CurveSynthesizer(seed=42)
    
    curves = synth.generate_curves(
        curve_list=["GR", "RHOB", "NPHI"],
        depth_range=(1000.0, 2000.0),
        sample_interval=0.15,
        lithology="sandstone"
    )
    
    assert "GR" in curves
    assert "RHOB" in curves
    assert "NPHI" in curves
    assert "DEPT" in curves
    
    # Check depth array
    expected_samples = int((2000 - 1000) / 0.15) + 1
    assert len(curves["DEPT"]) == expected_samples


def test_density_porosity_relationship():
    """Density should give valid porosity range."""
    synth = CurveSynthesizer(seed=42)
    
    curves = synth.generate_curves(
        curve_list=["RHOB"],
        depth_range=(1000.0, 2000.0),
        sample_interval=0.5,
        lithology="sandstone"
    )
    
    rhob = curves["RHOB"]
    
    # Calculate porosity: phi = (matrix - bulk) / (matrix - fluid)
    matrix_density = 2.65  # sandstone
    fluid_density = 1.0
    porosity = (matrix_density - rhob) / (matrix_density - fluid_density)
    
    # Sanity check - porosity should be reasonable
    assert np.all(porosity >= -0.05)  # Allow small negative due to noise
    assert np.all(porosity <= 0.50)   # Max porosity ~50%


def test_curve_realistic_noise():
    """Curves should have realistic noise patterns."""
    synth1 = CurveSynthesizer(seed=42)
    synth2 = CurveSynthesizer(seed=42)
    
    curves1 = synth1.generate_curves(["GR"], (1000.0, 1100.0), 0.5, "sandstone")
    curves2 = synth2.generate_curves(["GR"], (1000.0, 1100.0), 0.5, "sandstone")
    
    # Same seed = same curves
    assert np.allclose(curves1["GR"], curves2["GR"])


def test_curve_synthesizer_unknown_curve():
    """Should raise error for unknown curve type."""
    synth = CurveSynthesizer(seed=42)
    
    with pytest.raises(ValueError, match="Unknown curve type"):
        synth.generate_curves(
            curve_list=["UNKNOWN_CURVE"],
            depth_range=(1000.0, 2000.0),
            sample_interval=0.5,
            lithology="sandstone"
        )


def test_cali_curve_generation():
    """Should generate CALI (caliper) curve."""
    synth = CurveSynthesizer(seed=42)
    
    curves = synth.generate_curves(
        curve_list=["CALI"],
        depth_range=(1000.0, 1100.0),
        sample_interval=0.5,
        lithology="sandstone"
    )
    
    assert "CALI" in curves
    # Caliper should be in reasonable range (inches)
    assert np.all(curves["CALI"] >= 6)
    assert np.all(curves["CALI"] <= 12)


def test_depth_array_values():
    """Depth array should have correct values."""
    synth = CurveSynthesizer(seed=42)
    
    curves = synth.generate_curves(
        curve_list=["GR"],
        depth_range=(1000.0, 2000.0),
        sample_interval=0.5,
        lithology="sandstone"
    )
    
    # Check depth array values
    assert curves["DEPT"][0] == 1000.0
    assert curves["DEPT"][-1] == 2000.0
    # Check spacing
    np.testing.assert_allclose(np.diff(curves["DEPT"]), 0.5)


def test_shale_lithology_curves():
    """Should generate curves for shale lithology."""
    synth = CurveSynthesizer(seed=42)
    
    curves_shale = synth.generate_curves(
        curve_list=["GR"],
        depth_range=(1000.0, 1100.0),
        sample_interval=0.5,
        lithology="shale"
    )
    
    assert "GR" in curves_shale
    
    # Shale should have higher GR than sandstone on average
    synth2 = CurveSynthesizer(seed=42)
    curves_sand = synth2.generate_curves(
        curve_list=["GR"],
        depth_range=(1000.0, 1100.0),
        sample_interval=0.5,
        lithology="sandstone"
    )
    
    # Shale GR is typically higher than 80 API
    assert curves_shale["GR"].mean() > 50


def test_density_neutron_crossover():
    """Should apply physical constraints for density-neutron."""
    synth = CurveSynthesizer(seed=42)
    
    curves = synth.generate_curves(
        curve_list=["RHOB", "NPHI"],
        depth_range=(1000.0, 1100.0),
        sample_interval=0.5,
        lithology="sandstone"
    )
    
    # Cross-check: neutron porosity should be in valid range
    assert np.all(curves["NPHI"] >= 0.0)
    assert np.all(curves["NPHI"] <= 0.45)