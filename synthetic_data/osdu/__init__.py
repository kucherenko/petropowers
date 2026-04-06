"""OSDU schema mapping for synthetic data."""
from synthetic_data.osdu.mapper import OSDUMapper
from synthetic_data.osdu.well_log_mapper import LASMapper
from synthetic_data.osdu.seismic_mapper import SEGYMapper
from synthetic_data.osdu.scada_mapper import SCADAMapper

__all__ = ["OSDUMapper", "LASMapper", "SEGYMapper", "SCADAMapper"]
