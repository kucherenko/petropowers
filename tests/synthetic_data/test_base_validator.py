"""Tests for base Validator class."""
import pytest
from synthetic_data.base import Validator


class ConcreteValidator(Validator):
    """Concrete implementation for testing."""
    
    def validate(self, data):
        """Test implementation."""
        if not data:
            return False, ["Data is empty"]
        return True, []


def test_validator_is_abstract():
    """Validator class should be abstract."""
    with pytest.raises(TypeError):
        Validator()


def test_concrete_validator_validate_success():
    """Concrete validator should return True for valid data."""
    validator = ConcreteValidator()
    is_valid, errors = validator.validate({"test": "data"})
    assert is_valid is True
    assert errors == []


def test_concrete_validator_validate_failure():
    """Concrete validator should return False for invalid data."""
    validator = ConcreteValidator()
    is_valid, errors = validator.validate({})
    assert is_valid is False
    assert errors == ["Data is empty"]