"""Format validation using domain libraries."""
import os
from typing import List, Tuple

from synthetic_data.base import Validator


class FormatValidator(Validator):
    """Validate synthetic data files using domain libraries.
    
    Uses lasio, segyio, and dlisio to verify files are valid
    and can be read by real software.
    """
    
    def validate(self, data: str) -> Tuple[bool, List[str]]:
        """Validate file format (auto-detect by extension).
        
        Args:
            data: File path to validate
            
        Returns:
            Tuple of (is_valid, errors)
        """
        if not os.path.exists(data):
            return False, [f"File does not exist: {data}"]
        
        ext = os.path.splitext(data)[1].lower()
        
        if ext in ['.las']:
            return self.validate_las(data)
        elif ext in ['.sgy', '.segy']:
            return self.validate_segy(data)
        elif ext in ['.dlis']:
            return self.validate_dlis(data)
        else:
            return False, [f"Unknown file extension: {ext}"]
    
    def validate_las(self, file_path: str) -> Tuple[bool, List[str]]:
        """Validate LAS file using lasio.
        
        Args:
            file_path: Path to LAS file
            
        Returns:
            Tuple of (is_valid, errors)
        """
        try:
            import lasio
            log = lasio.read(file_path)
            
            # Verify basic structure
            errors = []
            
            if not log.curves:
                errors.append("LAS file has no curves")
            
            if log.well.get('WELL') is None:
                errors.append("LAS file missing WELL metadata")
            
            return len(errors) == 0, errors
            
        except Exception as e:
            return False, [f"LAS validation error: {str(e)}"]
    
    def validate_segy(self, file_path: str) -> Tuple[bool, List[str]]:
        """Validate SEG-Y file using segyio.
        
        Args:
            file_path: Path to SEG-Y file
            
        Returns:
            Tuple of (is_valid, errors)
        """
        try:
            import segyio
            
            with segyio.open(file_path, 'r', strict=False) as segy_file:
                errors = []
                
                # Verify we can read traces
                traces = segy_file.trace
                if len(traces) == 0:
                    errors.append("SEG-Y file has no traces")
                
                # Verify dimensions
                if len(segy_file.ilines) == 0:
                    errors.append("SEG-Y file has no inlines")
                
                if len(segy_file.xlines) == 0:
                    errors.append("SEG-Y file has no crosslines")
                
                return len(errors) == 0, errors
                
        except Exception as e:
            return False, [f"SEG-Y validation error: {str(e)}"]
    
    def validate_dlis(self, file_path: str) -> Tuple[bool, List[str]]:
        """Validate DLIS file using dlisio.
        
        Args:
            file_path: Path to DLIS file
            
        Returns:
            Tuple of (is_valid, errors)
        """
        try:
            import dlisio
            
            with dlisio.load(file_path) as files:
                errors = []
                
                if len(files) == 0:
                    errors.append("DLIS file contains no logical files")
                
                # Check for frames (data)
                for f in files:
                    if len(f.frames) == 0:
                        errors.append(f"DLIS logical file {f.name} has no frames")
                
                return len(errors) == 0, errors
                
        except Exception as e:
            return False, [f"DLIS validation error: {str(e)}"]