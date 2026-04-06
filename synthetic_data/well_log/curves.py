"""Synthesize petrophysical curves with physical constraints."""
import numpy as np
from typing import Dict, List, Tuple
from synthetic_data.base.statistics import StatisticalRealismEngine


class CurveSynthesizer:
    """Generate realistic well log curves maintaining physical relationships.
    
    Ensures:
    - Density-neutron crossover valid
    - Porosity from density reasonable
    - Resistivity log-normal distributed
    - All curves within realistic ranges
    """
    
    SUPPORTED_CURVES = ["GR", "RHOB", "NPHI", "RT", "DT", "CALI"]
    
    def __init__(self, seed: int = None):
        """Initialize synthesizer.
        
        Args:
            seed: Random seed for reproducibility
        """
        self.stats = StatisticalRealismEngine(seed)
        self.rng = np.random.default_rng(seed)
    
    def generate_curves(
        self,
        curve_list: List[str],
        depth_range: Tuple[float, float],
        sample_interval: float,
        lithology: str = "sandstone"
    ) -> Dict[str, np.ndarray]:
        """Generate multiple well log curves.
        
        Args:
            curve_list: List of curve mnemonics to generate
            depth_range: (start_depth, end_depth) in meters
            sample_interval: Depth interval between samples in meters
            lithology: Lithology type for realistic values
            
        Returns:
            Dictionary mapping curve mnemonic to values, including 'DEPT'
        """
        # Validate curves
        for curve in curve_list:
            if curve not in self.SUPPORTED_CURVES:
                raise ValueError(f"Unknown curve type: {curve}")
        
        # Calculate number of samples
        start_depth, end_depth = depth_range
        n_samples = int((end_depth - start_depth) / sample_interval) + 1
        
        # Generate depth array
        depths = np.linspace(start_depth, end_depth, n_samples)
        
        # Generate each curve
        curves = {"DEPT": depths}
        
        for curve in curve_list:
            curves[curve] = self._generate_curve(curve, n_samples, lithology)
        
        # Ensure physical relationships are maintained
        curves = self._apply_physical_constraints(curves, lithology)
        
        return curves
    
    def _generate_curve(
        self,
        curve_type: str,
        n_samples: int,
        lithology: str
    ) -> np.ndarray:
        """Generate a single curve using statistical engine."""
        return self.stats.generate_curve(curve_type, lithology, n_samples)
    
    def _apply_physical_constraints(
        self,
        curves: Dict[str, np.ndarray],
        lithology: str
    ) -> Dict[str, np.ndarray]:
        """Apply physical relationship constraints between curves.
        
        Ensures:
        - Density-neutron crossover valid for lithology
        - Porosity reasonable
        """
        # Density-neutron crossover
        if "RHOB" in curves and "NPHI" in curves:
            # Adjust NPHI to ensure crossover makes sense
            rhob = curves["RHOB"]
            nphi = curves["NPHI"]
            
            # Porosity from density
            matrix = 2.65 if lithology == "sandstone" else 2.71
            phi_density = (matrix - rhob) / (matrix - 1.0)
            
            # Neutron porosity should be similar to density porosity
            # with some shale effect
            if lithology == "shale":
                # Shale: neutron > density (crossover negative)
                nphi_adjusted = np.where(
                    nphi < phi_density + 0.05,
                    phi_density + 0.10 + 0.05 * self.rng.random(len(nphi)),
                    nphi
                )
            else:
                # Sandstone/carbonate: small crossover
                nphi_adjusted = np.clip(nphi, 0.0, 0.45)
            
            curves["NPHI"] = nphi_adjusted
        
        return curves