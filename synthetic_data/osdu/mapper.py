"""Abstract base for OSDU mappers."""
from abc import ABC, abstractmethod
from typing import Any, Dict


class OSDUMapper(ABC):
    """Abstract base class for OSDU manifest generation.
    
    Converts synthetic data to OSDU-compliant manifests
    for cloud platform integration.
    """
    
    @abstractmethod
    def to_manifest(self, data: Any, legal_tags: Dict) -> Dict:
        """Convert data to OSDU manifest.
        
        Args:
            data: Synthetic data (file path, dict, etc.)
            legal_tags: OSDU legal tags dictionary
            
        Returns:
            OSDU manifest dictionary
        """
        pass
    
    def _build_legal(self, legal_tags: Dict) -> Dict:
        """Build OSDU legal section.
        
        Args:
            legal_tags: Legal tags configuration
            
        Returns:
            Legal section dictionary
        """
        return {
            "legaltags": legal_tags.get("legaltags", []),
            "otherRelevantDataCountries": legal_tags.get(
                "otherRelevantDataCountries", ["US"]
            )
        }
    
    def _build_id(self, entity_type: str, name: str) -> str:
        """Build OSDU entity ID.
        
        Args:
            entity_type: OSDU entity type (e.g., 'master-data--Well')
            name: Entity name
            
        Returns:
            Entity ID string
        """
        import re
        clean_name = re.sub(r'[^a-zA-Z0-9]', '-', name)
        return f"{entity_type}:{clean_name}"