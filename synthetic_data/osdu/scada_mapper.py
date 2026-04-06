"""Map SCADA CSV files to OSDU Facility production manifests."""
import os
import re
from typing import Dict
from datetime import datetime, timezone
import pandas as pd

from synthetic_data.osdu.mapper import OSDUMapper


class SCADAMapper(OSDUMapper):
    """Convert SCADA production CSV files to OSDU Facility manifests."""

    def to_manifest(self, csv_path: str, legal_tags: Dict) -> Dict:
        """Convert a SCADA CSV to an OSDU Facility production manifest.

        Args:
            csv_path: Path to production CSV file (output of TimeSeriesGenerator).
            legal_tags: OSDU legal tags dictionary.

        Returns:
            OSDU manifest dictionary.
        """
        filename = os.path.splitext(os.path.basename(csv_path))[0]
        # Remove trailing _production suffix if present
        well_name = re.sub(r"_production$", "", filename)

        df = pd.read_csv(csv_path, parse_dates=["date"])
        start_date = df["date"].min().isoformat()
        end_date = df["date"].max().isoformat()
        n_samples = len(df)

        manifest = {
            "kind": "osdu:wks:Manifest:1.0.0",
            "data": {
                "WorkProduct": {
                    "kind": "osdu:wks:master-data--Facility:1.0.0",
                    "id": self._build_id("master-data--Facility", well_name),
                    "legal": self._build_legal(legal_tags),
                    "data": {
                        "FacilityName": well_name,
                        "FacilityTypeID": "Well",
                        "Source": "Synthetic Data Generator",
                        "CreationDateTime": datetime.now(timezone.utc).isoformat(),
                        "ProductionDateRange": {
                            "Start": start_date,
                            "End": end_date,
                        },
                        "SampleCount": n_samples,
                        "Measurements": [
                            "oil_rate_bbl_d",
                            "gas_rate_mscf_d",
                            "water_rate_bbl_d",
                            "wellhead_pressure_psi",
                            "temperature_f",
                        ],
                    },
                }
            },
        }

        return manifest
