"""Tests for SCADA time series generator."""
import pytest
import tempfile
import os
import pandas as pd
from synthetic_data.scada import TimeSeriesGenerator


def test_timeseries_generator_creates_file():
    """Generator should create a CSV file."""
    gen = TimeSeriesGenerator(seed=42)
    with tempfile.TemporaryDirectory() as tmpdir:
        path = gen.create_record(
            well_name="Test-Well-001",
            n_days=10,
            output_dir=tmpdir,
        )
        assert os.path.exists(path)
        assert path.endswith(".csv")


def test_timeseries_generator_columns():
    """Generated CSV must have all required columns."""
    gen = TimeSeriesGenerator(seed=42)
    with tempfile.TemporaryDirectory() as tmpdir:
        path = gen.create_record(
            well_name="Test-Well-001",
            n_days=10,
            output_dir=tmpdir,
        )
        df = pd.read_csv(path, parse_dates=["date"])
        for col in ["date", "oil_rate_bbl_d", "gas_rate_mscf_d",
                    "water_rate_bbl_d", "wellhead_pressure_psi", "temperature_f"]:
            assert col in df.columns, f"Missing column: {col}"


def test_timeseries_generator_row_count():
    """CSV should have exactly n_days rows."""
    gen = TimeSeriesGenerator(seed=42)
    with tempfile.TemporaryDirectory() as tmpdir:
        path = gen.create_record(
            well_name="Test-Well-001",
            n_days=730,
            output_dir=tmpdir,
        )
        df = pd.read_csv(path)
        assert len(df) == 730


def test_timeseries_generator_physical_ranges():
    """Rates and pressures must be non-negative."""
    gen = TimeSeriesGenerator(seed=42)
    with tempfile.TemporaryDirectory() as tmpdir:
        path = gen.create_record(
            well_name="Test-Well-001",
            n_days=100,
            output_dir=tmpdir,
        )
        df = pd.read_csv(path)
        assert (df["oil_rate_bbl_d"] >= 0).all()
        assert (df["gas_rate_mscf_d"] >= 0).all()
        assert (df["water_rate_bbl_d"] >= 0).all()
        assert (df["wellhead_pressure_psi"] >= 0).all()


def test_timeseries_generator_filename():
    """Output filename should embed well name."""
    gen = TimeSeriesGenerator(seed=42)
    with tempfile.TemporaryDirectory() as tmpdir:
        path = gen.create_record(
            well_name="PPR1-Well-007",
            n_days=5,
            output_dir=tmpdir,
        )
        assert "PPR1-Well-007" in os.path.basename(path)


def test_timeseries_generator_dataset():
    """create_dataset should return one file per well."""
    gen = TimeSeriesGenerator(seed=42)
    with tempfile.TemporaryDirectory() as tmpdir:
        paths = gen.create_dataset(
            n_records=3,
            well_names=["W-001", "W-002", "W-003"],
            n_days=5,
            output_dir=tmpdir,
        )
        assert len(paths) == 3
        for p in paths:
            assert os.path.exists(p)
