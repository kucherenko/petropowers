"""Abstract base class for all synthetic data validators."""
from abc import ABC, abstractmethod
from typing import Any, Dict, List, Tuple


class Validator(ABC):
    """Abstract base class for synthetic data validators.
    
    All domain-specific validators (format, schema, physics)
    inherit from this class and implement validation logic.
    """
    
    @abstractmethod
    def validate(self, data: Any) -> Tuple[bool, List[str]]:
        """Validate synthetic data.
        
        Args:
            data: Data to validate (file path, dict, etc.)
            
        Returns:
            Tuple of (is_valid: bool, errors: List of error messages)
        """
        pass