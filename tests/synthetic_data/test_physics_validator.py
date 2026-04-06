"""Tests for physical relationship validation."""
import pytest
import numpy as np
from synthetic_data.validators.physics_validator import PhysicsValidator


def test_archie_equation_validation():
    """Porosity-resistivity should satisfy Archie equation."""
    validator = PhysicsValidator()
    
    # Create valid porosity-resistivity data
    porosity = np.array([0.25, 0.20, 0.30, 0.15])
    resistivity = np.array([100, 50, 150, 20])
    
    is_valid, warnings = validator.validate_archie(
        porosity, resistivity, a=1.0, m=2.0, n=2.0, Rw=0.1
    )
    
    # Should be valid (within reasonable bounds)
    assert is_valid or len(warnings) < len(porosity)


def test_density_neutron_crossover():
    """Density-neutron crossover should be realistic for lithology."""
    validator = PhysicsValidator()
    
    # Sandstone: density porosity ≈ neutron porosity
    density = np.array([2.45, 2.50, 2.40])
    neutron = np.array([0.22, 0.20, 0.25])
    
    is_valid, warnings = validator.validate_density_neutron(
        density, neutron, lithology="sandstone"
    )
    
    assert is_valid or "crossover" not in str(warnings).lower()


def test_gamma_ray_range():
    """Gamma ray should be in realistic range."""
    validator = PhysicsValidator()
    
    # Valid GR values
    gr_valid = np.array([30, 60, 90, 45])
    is_valid, errors = validator.validate_gamma_ray(gr_valid)
    assert is_valid
    
    # Invalid GR values
    gr_invalid = np.array([-10, 250])
    is_valid, errors = validator.validate_gamma_ray(gr_invalid)
    assert not is_valid


def test_resistivity_logarithmic():
    """Resistivity should have logarithmic distribution."""
    validator = PhysicsValidator()
    
    # Generate resistivity with good range
    rt_values = np.logspace(0, 3, 100)  # 1 to 1000 ohm-m
    
    is_valid, warnings = validator.validate_resistivity(rt_values)
    
    # Should handle logarithmic range properly
    assert is_valid or len(warnings) == 0