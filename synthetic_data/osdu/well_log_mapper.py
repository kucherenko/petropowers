"""Map LAS files to OSDU WellLog manifests."""
import os
from typing import Dict, List
from datetime import datetime, timezone
import lasio

from synthetic_data.osdu.mapper import OSDUMapper


class LASMapper(OSDUMapper):
    """Convert LAS files to OSDU WellLog manifests.
    
    Creates OSDU-compliant manifests for:
    - Well (master data)
    - Wellbore (master data)
    - WellLog (work product)
    """
    
    def to_manifest(self, las_path: str, legal_tags: Dict) -> Dict:
        """Convert LAS file to OSDU WellLog manifest.
        
        Args:
            las_path: Path to LAS file
            legal_tags: Legal tags configuration
            
        Returns:
            OSDU manifest dictionary with WellLog work product
        """
        las = lasio.read(las_path)
        
        well_name = las.well.get("WELL", lasio.HeaderItem("WELL", value="Unknown"))
        if hasattr(well_name, 'value'):
            well_name = well_name.value
        
        field_name = las.well.get("FLD", lasio.HeaderItem("FLD", value="Unknown"))
        if hasattr(field_name, 'value'):
            field_name = field_name.value
        
        company = las.well.get("COMP", lasio.HeaderItem("COMP", value="Unknown"))
        if hasattr(company, 'value'):
            company = company.value
        
        curves = []
        for curve in las.curves:
            if curve.mnemonic == "DEPT":
                continue
            
            curves.append({
                "CurveID": f"log-curve-{curve.mnemonic}",
                "CurveUnit": curve.unit or "",
                "LogCurveValues": curve.data.tolist()[:10]
            })
        
        strt_item = las.well.get("STRT")
        start_depth = float(strt_item.value) if strt_item else float(las.index[0])
        
        stop_item = las.well.get("STOP")
        stop_depth = float(stop_item.value) if stop_item else float(las.index[-1])
        
        manifest = {
            "kind": "osdu:wks:Manifest:1.0.0",
            "data": {
                "WorkProduct": {
                    "kind": "osdu:wks:work-product--WellLog:1.0.0",
                    "id": self._build_id("work-product--WellLog", well_name),
                    "legal": self._build_legal(legal_tags),
                    "data": {
                        "Name": f"Well Log - {well_name}",
                        "Description": f"Synthetic well log for {well_name}",
                        "WellboreID": self._build_id("master-data--Wellbore", f"{well_name}-01"),
                        "Source": "Synthetic Data Generator",
                        "CreationDateTime": datetime.now(timezone.utc).isoformat(),
                        "LogCurveDepth": {
                            "Start": start_depth,
                            "End": stop_depth,
                            "Unit": las.index_unit or "m"
                        },
                        "LogCurveData": {
                            "Curves": curves
                        }
                    }
                },
                "MasterData": {
                    "Well": {
                        "kind": "osdu:wks:master-data--Well:1.0.0",
                        "id": self._build_id("master-data--Well", well_name),
                        "data": {
                            "FacilityName": well_name,
                            "FieldName": field_name,
                            "Operator": company
                        }
                    },
                    "Wellbore": {
                        "kind": "osdu:wks:master-data--Wellbore:1.0.0",
                        "id": self._build_id("master-data--Wellbore", f"{well_name}-01"),
                        "data": {
                            "Name": f"{well_name}-01",
                            "WellID": self._build_id("master-data--Well", well_name)
                        }
                    }
                }
            }
        }
        
        return manifest