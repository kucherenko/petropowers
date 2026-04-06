"""Tests for base Generator class."""
import pytest
from synthetic_data.base import Generator


class ConcreteGenerator(Generator):
    """Concrete implementation for testing."""
    
    def create_record(self, **kwargs):
        """Test implementation."""
        return {"test": "data"}
    
    def create_dataset(self, n_records, **kwargs):
        """Test implementation."""
        return [self.create_record(**kwargs) for _ in range(n_records)]


def test_generator_is_abstract():
    """Generator class should be abstract."""
    with pytest.raises(TypeError):
        Generator()


def test_concrete_generator_create_record():
    """Concrete generator should implement create_record."""
    generator = ConcreteGenerator()
    result = generator.create_record(test_param="value")
    assert result == {"test": "data"}


def test_concrete_generator_create_dataset():
    """Concrete generator should implement create_dataset."""
    generator = ConcreteGenerator()
    results = generator.create_dataset(n_records=5, test_param="value")
    assert len(results) == 5
    assert all(r == {"test": "data"} for r in results)