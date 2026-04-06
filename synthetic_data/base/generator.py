"""Abstract base class for all synthetic data generators."""
from abc import ABC, abstractmethod
from typing import Any, Dict, List, Union


class Generator(ABC):
    """Abstract base class for synthetic data generators.
    
    All domain-specific generators (well logs, seismic, SCADA)
    inherit from this class and implement its abstract methods.
    
    Note: Generators may return either:
    - Dict[str, Any]: In-memory data (for small datasets, testing)
    - str: File path (for file-based generators like LAS, SEG-Y)
    """
    
    @abstractmethod
    def create_record(self, **kwargs) -> Union[Dict[str, Any], str]:
        """Generate a single synthetic data record.
        
        Args:
            **kwargs: Domain-specific parameters for generation
            
        Returns:
            Either a dictionary containing generated data (for in-memory)
            or a string file path (for file-based generators like LAS, SEG-Y)
        """
        pass
    
    @abstractmethod
    def create_dataset(self, n_records: int, **kwargs) -> Union[List[Dict[str, Any]], List[str]]:
        """Generate multiple synthetic data records.
        
        Args:
            n_records: Number of records to generate
            **kwargs: Domain-specific parameters for generation
            
        Returns:
            Either a list of dictionaries (for in-memory) or a list of file paths
        """
        pass