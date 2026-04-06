"""LAS file generator using lasio library."""
import os
import tempfile
from typing import Dict, List, Optional, Tuple
import lasio
from lasio import LASFile, HeaderItem, CurveItem
import numpy as np

from synthetic_data.base import Generator
from synthetic_data.well_log.curves import CurveSynthesizer


class LASGenerator(Generator):
    """Generate synthetic LAS well log files.
    
    Creates realistic LAS files with proper:
    - Well metadata headers
    - Depth-indexed curve data
    - Physical relationships between curves
    - Validation through lasio library
    """
    
    def __init__(self, seed: int = None):
        """Initialize generator.
        
        Args:
            seed: Random seed for reproducibility
        """
        self.synthesizer = CurveSynthesizer(seed)
    
    def create_record(
        self,
        well_name: str,
        curves: List[str] = None,
        depth_range: Tuple[float, float] = (1000.0, 2000.0),
        sample_interval: float = 0.15,
        lithology: str = "sandstone",
        field_name: str = None,
        company: str = None,
        location: str = None,
        output_dir: str = None,
        **kwargs
    ) -> str:
        """Generate a single LAS file.
        
        Args:
            well_name: Well name for header
            curves: List of curve mnemonics (default: GR, RHOB, NPHI, RT)
            depth_range: (start_depth, end_depth) in meters
            sample_interval: Depth interval between samples in meters
            lithology: Lithology type (sandstone, shale, carbonate)
            field_name: Field name for header
            company: Company name for header
            location: Location for header
            output_dir: Directory to write file (default: temp dir)
            
        Returns:
            Path to generated LAS file
        """
        # Default curves
        if curves is None:
            curves = ["GR", "RHOB", "NPHI", "RT"]
        
        # Generate curve data
        curve_data = self.synthesizer.generate_curves(
            curve_list=curves,
            depth_range=depth_range,
            sample_interval=sample_interval,
            lithology=lithology
        )
        
        # Create LAS file
        las = LASFile()
        
        # Update version section (already has defaults, just update values)
        las.version["VERS"].value = 2.0
        las.version["WRAP"].value = "NO"
        
        # Update well section (already has defaults)
        las.well["STRT"].value = depth_range[0]
        las.well["STRT"].unit = "m"
        las.well["STOP"].value = depth_range[1]
        las.well["STOP"].unit = "m"
        las.well["STEP"].value = sample_interval
        las.well["STEP"].unit = "m"
        las.well["NULL"].value = -999.25
        las.well["COMP"].value = company or "Synthetic Company"
        las.well["WELL"].value = well_name
        las.well["FLD"].value = field_name or "Synthetic Field"
        las.well["LOC"].value = location or "Synthetic Location"
        las.well["SRVC"].value = "Synthetic Data Generator"
        las.well["DATE"].value = "2024-01-01"
        
        # Add curves
        # Depth curve (must be first)
        las.append_curve(
            "DEPT",
            curve_data["DEPT"],
            unit="m",
            descr="Depth"
        )
        
        # Add data curves
        curve_units = {
            "GR": ("API", "Gamma Ray"),
            "RHOB": ("g/cc", "Bulk Density"),
            "NPHI": ("vol/vol", "Neutron Porosity"),
            "RT": ("ohm-m", "Deep Resistivity"),
            "DT": ("us/ft", "Sonic Slowness"),
            "CALI": ("in", "Caliper"),
        }
        
        for curve_mnemonic in curves:
            unit, descr = curve_units.get(curve_mnemonic, ("", ""))
            las.append_curve(
                curve_mnemonic,
                curve_data[curve_mnemonic],
                unit=unit,
                descr=descr
            )
        
        # Write file
        if output_dir is None:
            output_dir = tempfile.mkdtemp()
        
        os.makedirs(output_dir, exist_ok=True)
        file_path = os.path.join(output_dir, f"{well_name}.las")
        
        las.write(file_path)
        
        return file_path
    
    def create_dataset(
        self,
        n_records: int,
        well_names: List[str] = None,
        curves: List[str] = None,
        depth_range: Tuple[float, float] = (1000.0, 2000.0),
        sample_interval: float = 0.15,
        lithology: str = "sandstone",
        output_dir: str = None,
        **kwargs
    ) -> List[str]:
        """Generate multiple LAS files.
        
        Args:
            n_records: Number of LAS files to generate
            well_names: List of well names (default: auto-generated)
            curves: List of curve mnemonics
            depth_range: (start_depth, end_depth) in meters
            sample_interval: Depth interval in meters
            lithology: Lithology type
            output_dir: Directory to write files
            
        Returns:
            List of paths to generated LAS files
        """
        # Generate well names if not provided
        if well_names is None:
            well_names = [f"Well-{i:03d}" for i in range(n_records)]
        
        # Ensure we have enough names
        if len(well_names) < n_records:
            well_names.extend([f"Well-{i:03d}" for i in range(len(well_names), n_records)])
        
        # Create output directory
        if output_dir is None:
            output_dir = tempfile.mkdtemp()
        
        os.makedirs(output_dir, exist_ok=True)
        
        # Generate each record
        file_paths = []
        for i in range(n_records):
            file_path = self.create_record(
                well_name=well_names[i],
                curves=curves,
                depth_range=depth_range,
                sample_interval=sample_interval,
                lithology=lithology,
                output_dir=output_dir
            )
            file_paths.append(file_path)
        
        return file_paths