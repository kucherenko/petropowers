"""Physical relationship validation for petrophysical data."""
import numpy as np
from typing import List, Tuple


class PhysicsValidator:
    """Validate physical relationships in petrophysical data.
    
    Ensures:
    - Archie equation relationships valid
    - Density-neutron crossover appropriate for lithology
    - Curve values in realistic ranges
    """
    
    CURVE_RANGES = {
        "GR": (0, 200, "API"),
        "RHOB": (1.9, 3.0, "g/cc"),
        "NPHI": (0.0, 0.45, "vol/vol"),
        "RT": (0.2, 2000, "ohm-m"),
        "DT": (40, 240, "us/ft"),
        "CALI": (6, 20, "in"),
    }
    
    def validate_archie(
        self,
        porosity: np.ndarray,
        resistivity: np.ndarray,
        a: float = 1.0,
        m: float = 2.0,
        n: float = 2.0,
        Rw: float = 0.1
    ) -> Tuple[bool, List[str]]:
        """Validate porosity-resistivity relationship via Archie equation.
        
        Archie equation: Sw = ((a * Rw) / (phi^m * Rt))^(1/n)
        
        Args:
            porosity: Porosity values (fraction)
            resistivity: Resistivity values (ohm-m)
            a: Tortuosity factor (default: 1.0)
            m: Cementation exponent (default: 2.0)
            n: Saturation exponent (default: 2.0)
            Rw: Formation water resistivity (ohm-m)
            
        Returns:
            Tuple of (is_valid, warnings)
        """
        warnings = []
        
        with np.errstate(divide='ignore', invalid='ignore'):
            Sw = ((a * Rw) / (porosity**m * resistivity))**(1/n)
        
        invalid_sw = (Sw < 0) | (Sw > 1.5)
        if np.any(invalid_sw):
            n_invalid = np.sum(invalid_sw)
            warnings.append(f"{n_invalid} points have unrealistic water saturation")
        
        if np.any(Sw < 0.05):
            warnings.append("Some water saturations < 5% (may indicate hydrocarbon)")
        
        return len(warnings) == 0, warnings
    
    def validate_density_neutron(
        self,
        density: np.ndarray,
        neutron: np.ndarray,
        lithology: str = "sandstone"
    ) -> Tuple[bool, List[str]]:
        """Validate density-neutron crossover for lithology.
        
        Args:
            density: Bulk density values (g/cc)
            neutron: Neutron porosity values (vol/vol)
            lithology: Lithology type (sandstone, shale, carbonate)
            
        Returns:
            Tuple of (is_valid, warnings)
        """
        warnings = []
        
        if np.any(density < 1.9) or np.any(density > 3.0):
            warnings.append("Density values outside typical range (1.9-3.0 g/cc)")
        
        if np.any(neutron < 0) or np.any(neutron > 0.45):
            warnings.append("Neutron porosity outside typical range (0-0.45 vol/vol)")
        
        matrix = {"sandstone": 2.65, "carbonate": 2.71, "shale": 2.70}
        matrix_density = matrix.get(lithology, 2.65)
        
        phi_density = (matrix_density - density) / (matrix_density - 1.0)
        
        crossover = neutron - phi_density
        
        if lithology == "sandstone":
            if np.any(crossover < -0.10):
                warnings.append("Large negative crossover unusual for sandstone")
        elif lithology == "shale":
            if np.any(crossover < 0.05):
                warnings.append("Shale typically shows positive crossover")
        
        return len(warnings) == 0, warnings
    
    def validate_gamma_ray(
        self,
        gr: np.ndarray,
        lithology: str = None
    ) -> Tuple[bool, List[str]]:
        """Validate gamma ray values are in realistic range.
        
        Args:
            gr: Gamma ray values (API)
            lithology: Optional lithology for specific range check
            
        Returns:
            Tuple of (is_valid, errors)
        """
        errors = []
        warnings = []
        
        min_gr, max_gr, unit = self.CURVE_RANGES["GR"]
        
        if np.any(gr < 0):
            errors.append(f"Negative gamma ray values detected (minimum: {gr.min()})")
        
        if np.any(gr > 300):
            errors.append(f"Gamma ray values exceed typical maximum (maximum: {gr.max():.0f} API)")
        
        if lithology == "sandstone":
            if np.mean(gr) > 70:
                warnings.append(f"High GR for sandstone (mean: {np.mean(gr):.0f} API)")
        elif lithology == "shale":
            if np.mean(gr) < 50:
                warnings.append(f"Low GR for shale (mean: {np.mean(gr):.0f} API)")
        
        return len(errors) == 0, errors + warnings
    
    def validate_resistivity(
        self,
        rt: np.ndarray
    ) -> Tuple[bool, List[str]]:
        """Validate resistivity has appropriate logarithmic range.
        
        Args:
            rt: Resistivity values (ohm-m)
            
        Returns:
            Tuple of (is_valid, warnings)
        """
        warnings = []
        
        min_rt, max_rt, unit = self.CURVE_RANGES["RT"]
        
        if np.any(rt <= 0):
            warnings.append("Resistivity must be positive")
        
        rt_range = rt.max() / rt.min()
        if rt_range < 10 and len(rt) > 10:
            warnings.append(f"Resistivity range narrow ({rt_range:.1f}x), typical is >10x")
        
        return len(warnings) == 0, warnings
    
    def validate(
        self,
        data: dict,
        lithology: str = "sandstone"
    ) -> Tuple[bool, List[str]]:
        """Validate all physical relationships in data.
        
        Args:
            data: Dictionary with curve data (GR, RHOB, NPHI, RT, etc.)
            lithology: Lithology type
            
        Returns:
            Tuple of (is_valid, all_errors_and_warnings)
        """
        all_warnings = []
        
        if "GR" in data:
            is_valid, warnings = self.validate_gamma_ray(data["GR"], lithology)
            all_warnings.extend(warnings)
        
        if "RHOB" in data and "NPHI" in data:
            is_valid, warnings = self.validate_density_neutron(
                data["RHOB"], data["NPHI"], lithology
            )
            all_warnings.extend(warnings)
        
        if "RT" in data:
            is_valid, warnings = self.validate_resistivity(data["RT"])
            all_warnings.extend(warnings)
        
        return len(all_warnings) == 0, all_warnings