"""Statistical realism engine for synthetic data generation."""
import numpy as np


class StatisticalRealismEngine:
    """Generate realistic petrophysical curves with proper distributions.
    
    Provides statistically realistic values for well log curves,
    seismic amplitudes, and SCADA measurements based on domain knowledge.
    """
    
    # Curve definitions: (min, max, typical_mean, distribution_type)
    CURVE_PARAMS = {
        "GR": {
            "sandstone": (10, 90, 30, "normal"),
            "shale": (80, 200, 120, "normal"),
            "carbonate": (5, 50, 20, "normal"),
        },
        "RHOB": {
            "sandstone": (1.9, 2.7, 2.45, "normal"),
            "shale": (2.2, 2.8, 2.55, "normal"),
            "carbonate": (2.6, 2.9, 2.71, "normal"),
        },
        "NPHI": {
            "sandstone": (0.05, 0.35, 0.20, "normal"),
            "shale": (0.15, 0.45, 0.30, "normal"),
            "carbonate": (0.0, 0.25, 0.10, "normal"),
        },
        "RT": {
            "sandstone": (0.2, 2000, 50, "lognormal"),
            "shale": (0.5, 20, 2, "lognormal"),
            "carbonate": (1, 5000, 100, "lognormal"),
        },
        "DT": {
            "sandstone": (50, 120, 80, "normal"),
            "shale": (100, 240, 150, "normal"),
            "carbonate": (40, 90, 55, "normal"),
        },
        "CALI": {
            "sandstone": (6, 12, 8.5, "normal"),
            "shale": (6, 12, 8.5, "normal"),
            "carbonate": (6, 12, 8.5, "normal"),
        },
    }
    
    def __init__(self, seed: int = None):
        """Initialize engine with optional random seed.
        
        Args:
            seed: Random seed for reproducibility
        """
        self.rng = np.random.default_rng(seed)
    
    def generate_curve(
        self,
        curve_type: str,
        lithology: str,
        n_samples: int,
        add_noise: bool = True
    ) -> np.ndarray:
        """Generate realistic curve values.
        
        Args:
            curve_type: Type of curve (GR, RHOB, NPHI, RT, DT)
            lithology: Lithology type (sandstone, shale, carbonate)
            n_samples: Number of samples to generate
            add_noise: Whether to add realistic noise
            
        Returns:
            Array of generated values
        """
        if curve_type not in self.CURVE_PARAMS:
            raise ValueError(f"Unknown curve type: {curve_type}")
        
        if lithology not in self.CURVE_PARAMS[curve_type]:
            raise ValueError(f"Unknown lithology: {lithology}")
        
        min_val, max_val, mean, dist_type = self.CURVE_PARAMS[curve_type][lithology]
        
        # Generate values based on distribution type
        if dist_type == "normal":
            # Estimate std as 1/4 of range
            std = (max_val - min_val) / 4
            values = self.rng.normal(mean, std, n_samples)
        elif dist_type == "lognormal":
            # For resistivity - use log-normal distribution
            # mean is the log-scale mean
            log_mean = np.log(mean)
            log_std = 1.0  # Wide spread
            values = self.rng.lognormal(log_mean, log_std, n_samples)
        else:
            # Uniform fallback
            values = self.rng.uniform(min_val, max_val, n_samples)
        
        # Clip to realistic range
        values = np.clip(values, min_val, max_val)
        
        # Add realistic noise if requested
        if add_noise:
            noise_scale = (max_val - min_val) * 0.02
            noise = self.rng.normal(0, noise_scale, n_samples)
            values = values + noise
            # Re-clip after noise
            values = np.clip(values, min_val, max_val)
        
        return values