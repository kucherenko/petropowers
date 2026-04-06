"""Map SEG-Y files to OSDU SeismicTraceData manifests."""
import os
from typing import Dict
from datetime import datetime, timezone
import segyio

from synthetic_data.osdu.mapper import OSDUMapper


class SEGYMapper(OSDUMapper):
    """Convert SEG-Y files to OSDU SeismicTraceData manifests."""

    def to_manifest(self, segy_path: str, legal_tags: Dict) -> Dict:
        """Convert a SEG-Y file to an OSDU SeismicTraceData manifest.

        Args:
            segy_path: Path to SEG-Y file.
            legal_tags: OSDU legal tags dictionary.

        Returns:
            OSDU manifest dictionary.
        """
        survey_name = os.path.splitext(os.path.basename(segy_path))[0]

        try:
            with segyio.open(segy_path, ignore_geometry=True) as f:
                n_traces = f.tracecount
                n_samples = len(f.samples)
                sample_interval_us = int(f.bin[segyio.BinField.Interval])
        except Exception as exc:
            raise OSError(f"Failed to read SEG-Y file '{segy_path}': {exc}") from exc

        if sample_interval_us == 0:
            import warnings
            warnings.warn(
                f"SEG-Y BinField.Interval is 0 in {segy_path}; sample interval unknown",
                UserWarning,
                stacklevel=2,
            )

        sample_interval_ms = sample_interval_us / 1000.0
        total_time_ms = (n_samples - 1) * sample_interval_ms

        manifest = {
            "kind": "osdu:wks:Manifest:1.0.0",
            "data": {
                "WorkProduct": {
                    "kind": "osdu:wks:work-product--SeismicTraceData:1.0.0",
                    "id": self._build_id("work-product--SeismicTraceData", survey_name),
                    "legal": self._build_legal(legal_tags),
                    "data": {
                        "Name": survey_name,
                        "Description": f"Synthetic 3D seismic survey: {survey_name}",
                        "Source": "Synthetic Data Generator",
                        "CreationDateTime": datetime.now(timezone.utc).isoformat(),
                        "TraceCount": n_traces,
                        "SampleCount": n_samples,
                        "SampleIntervalMs": sample_interval_ms,
                        "TotalTimeMs": total_time_ms,
                    },
                }
            },
        }

        return manifest
