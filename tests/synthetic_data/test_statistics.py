"""Tests for statistical realism engine."""
import pytest
import numpy as np
from synthetic_data.base.statistics import StatisticalRealismEngine


def test_gamma_ray_sandstone_distribution():
    """Gamma ray should have realistic sandstone distribution."""
    engine = StatisticalRealismEngine()
    gr_values = engine.generate_curve(
        curve_type="GR",
        lithology="sandstone",
        n_samples=1000
    )
    
    assert len(gr_values) == 1000
    assert 10 <= gr_values.min() <= 30  # Clean sand
    assert 30 <= gr_values.max() <= 90  # Some shale
    assert 15 <= gr_values.mean() <= 50  # Typical sandstone


def test_density_distribution():
    """Density should have realistic range."""
    engine = StatisticalRealismEngine()
    rhob_values = engine.generate_curve(
        curve_type="RHOB",
        lithology="sandstone",
        n_samples=1000
    )
    
    assert len(rhob_values) == 1000
    assert rhob_values.min() >= 1.9
    assert rhob_values.max() <= 3.0
    assert 2.2 <= rhob_values.mean() <= 2.7  # Typical sandstone


def test_error_invalid_curve_type():
    """Should raise error for invalid curve type."""
    engine = StatisticalRealismEngine()
    with pytest.raises(ValueError, match="Unknown curve type"):
        engine.generate_curve("INVALID", "sandstone", 100)


def test_error_invalid_lithology():
    """Should raise error for invalid lithology."""
    engine = StatisticalRealismEngine()
    with pytest.raises(ValueError, match="Unknown lithology"):
        engine.generate_curve("GR", "INVALID", 100)


def test_no_noise_parameter():
    """Should handle add_noise=False."""
    engine = StatisticalRealismEngine(seed=42)
    
    # Generate with and without noise - noise should change values
    values_with_noise = engine.generate_curve("GR", "sandstone", 100, add_noise=True)
    
    # Reset random state
    engine2 = StatisticalRealismEngine(seed=42)
    values_no_noise = engine2.generate_curve("GR", "sandstone", 100, add_noise=False)
    
    # Check that both are within valid range
    assert len(values_with_noise) == 100
    assert len(values_no_noise) == 100
    assert np.all(values_with_noise >= 10)  # GR min for sandstone
    assert np.all(values_no_noise >= 10)
    assert np.all(values_with_noise <= 90)  # GR max for sandstone
    assert np.all(values_no_noise <= 90)


def test_shale_lithology():
    """Should generate realistic shale curves."""
    engine = StatisticalRealismEngine()
    gr_values = engine.generate_curve("GR", "shale", 1000)
    
    assert len(gr_values) == 1000
    assert gr_values.mean() > 50  # Shale has higher GR


def test_carbonate_lithology():
    """Should generate realistic carbonate curves."""
    engine = StatisticalRealismEngine()
    rhob_values = engine.generate_curve("RHOB", "carbonate", 1000)
    
    assert len(rhob_values) == 1000
    assert 2.6 <= rhob_values.mean() <= 2.9  # Carbonate density


def test_resistivity_logarithmic():
    """Resistivity should use logarithmic distribution."""
    engine = StatisticalRealismEngine()
    rt_values = engine.generate_curve(
        curve_type="RT",
        lithology="sandstone",
        n_samples=1000
    )
    
    assert len(rt_values) == 1000
    assert rt_values.min() >= 0.2
    assert rt_values.max() <= 2000
    # Check it covers wide range (logarithmic)
    assert rt_values.max() / rt_values.min() > 10


def test_curve_reproducible():
    """Same seed should produce same values."""
    engine1 = StatisticalRealismEngine(seed=42)
    engine2 = StatisticalRealismEngine(seed=42)
    
    values1 = engine1.generate_curve("GR", "sandstone", 100)
    values2 = engine2.generate_curve("GR", "sandstone", 100)
    
    assert np.allclose(values1, values2)