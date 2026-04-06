"""SEG-Y file generator using segyio library."""
import os
import tempfile
from typing import List, Optional, Tuple
import segyio
import numpy as np
from datetime import datetime

from synthetic_data.base import Generator
from synthetic_data.seismic.traces import TraceGenerator


class SEGYGenerator(Generator):
    """Generate synthetic SEG-Y seismic files.
    
    creates realistic SEG-Y files with proper:
    - Survey geometry (inline/crossline)
    - Trace headers
    - Amplitude distributions
    """
    
    def __init__(self, seed: int = None):
        """Initialize generator.
        
        Args:
            seed: Random seed for reproducibility
        """
        self.trace_gen = TraceGenerator(seed)
    
    def create_record(
        self,
        survey_name: str,
        n_inlines: int = 100,
        n_crosslines: int = 100,
        n_samples: int = 500,
        sample_interval: int = 4000,
        inline_start: int = 1,
        crossline_start: int = 1,
        output_dir: str = None,
        **kwargs
    ) -> str:
        """Generate a single SEG-Y file.
        
        Args:
            survey_name: Survey name for file naming
            n_inlines: Number of inline traces
            n_crosslines: Number of crossline traces
            n_samples: Number of samples per trace
            sample_interval: Sample interval in microseconds
            inline_start: Starting inline number
            crossline_start: Starting crossline number
            output_dir: Directory to write file (default: temp dir)
            
        Returns:
            Path to generated SEG-Y file
        """
        if output_dir is None:
            output_dir = tempfile.mkdtemp()
        
        os.makedirs(output_dir, exist_ok=True)
        file_path = os.path.join(output_dir, f"{survey_name}.sgy")
        
        volume = self.trace_gen.generate_volume(n_inlines, n_crosslines, n_samples)
        
        ilines = np.arange(inline_start, inline_start + n_inlines)
        xlines = np.arange(crossline_start, crossline_start + n_crosslines)
        
        spec = segyio.spec()
        spec.format = 1
        spec.sorting = 2
        spec.iline = 5
        spec.xline = 21
        spec.samples = np.arange(n_samples) * (sample_interval / 1e6)
        spec.ilines = ilines
        spec.xlines = xlines
        
        with segyio.create(file_path, spec) as segy_file:
            traces = volume.reshape(-1, n_samples)
            segy_file.trace = traces
            
            segy_file.bin.update({
                segyio.BinField.Traces: n_inlines * n_crosslines,
                segyio.BinField.Samples: n_samples,
                segyio.BinField.Interval: sample_interval,
            })
            
            for i, (il, xl) in enumerate(
                [(il, xl) for il in ilines for xl in xlines]
            ):
                segy_file.header[i].update({
                    segyio.TraceField.INLINE_3D: il,
                    segyio.TraceField.CROSSLINE_3D: xl,
                    segyio.TraceField.TRACE_SEQUENCE_LINE: i + 1,
                })
        
        return file_path
    
    def create_dataset(
        self,
        n_records: int,
        survey_names: List[str] = None,
        n_inlines: int = 100,
        n_crosslines: int = 100,
        n_samples: int = 500,
        sample_interval: int = 4000,
        output_dir: str = None,
        **kwargs
    ) -> List[str]:
        """Generate multiple SEG-Y files.
        
        Args:
            n_records: Number of SEG-Y files to generate
            survey_names: List of survey names (default: auto-generated)
            n_inlines: Number of inline traces
            n_crosslines: Number of crossline traces
            n_samples: Number of samples per trace
            sample_interval: Sample interval in microseconds
            output_dir: Directory to write files
            
        Returns:
            List of paths to generated SEG-Y files
        """
        if survey_names is None:
            survey_names = [f"Survey-{i:03d}" for i in range(n_records)]
        
        if len(survey_names) < n_records:
            survey_names.extend([f"Survey-{i:03d}" for i in range(len(survey_names), n_records)])
        
        if output_dir is None:
            output_dir = tempfile.mkdtemp()
        
        os.makedirs(output_dir, exist_ok=True)
        
        file_paths = []
        for i in range(n_records):
            file_path = self.create_record(
                survey_name=survey_names[i],
                n_inlines=n_inlines,
                n_crosslines=n_crosslines,
                n_samples=n_samples,
                sample_interval=sample_interval,
                output_dir=output_dir
            )
            file_paths.append(file_path)
        
        return file_paths