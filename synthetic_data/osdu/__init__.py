"""OSDU schema mapping for synthetic data."""
from synthetic_data.osdu.mapper import OSDUMapper
from synthetic_data.osdu.well_log_mapper import LASMapper

__all__ = ["OSDUMapper", "LASMapper"]