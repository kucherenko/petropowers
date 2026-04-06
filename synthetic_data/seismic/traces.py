"""Generate seismic traces with realistic amplitudes."""
import numpy as np
from typing import Tuple


class TraceGenerator:
    """Generate seismic traces with proper amplitude distributions."""
    
    def __init__(self, seed: int = None):
        """Initialize trace generator.
        
        Args:
            seed: Random seed for reproducibility
        """
        self.rng = np.random.default_rng(seed)
    
    def generate_volume(
        self,
        n_inlines: int,
        n_crosslines: int,
        n_samples: int,
        amplitude_scale: float = 10000.0
    ) -> np.ndarray:
        """Generate a 3D seismic volume.
        
        Args:
            n_inlines: Number of inline traces
            n_crosslines: Number of crossline traces
            n_samples: Number of time samples per trace
            amplitude_scale: Scale factor for amplitudes
            
        Returns:
            3D numpy array with shape (n_inlines, n_crosslines, n_samples)
        """
        volume = self.rng.normal(0, amplitude_scale, (n_inlines, n_crosslines, n_samples))
        
        volume = np.clip(volume, -32767, 32767).astype(np.float32)
        
        return volume