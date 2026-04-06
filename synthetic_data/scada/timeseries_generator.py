"""SCADA time series generator for well production history."""
import os
import tempfile
from typing import List, Optional
import numpy as np
import pandas as pd
from datetime import date, timedelta

from synthetic_data.base import Generator


class TimeSeriesGenerator(Generator):
    """Generate synthetic SCADA production history as CSV files.

    Each file contains daily measurements for one well:
    oil rate (bbl/d), gas rate (Mscf/d), water rate (bbl/d),
    wellhead pressure (psi), temperature (°F).
    """

    def __init__(self, seed: int = None):
        """Initialize generator.

        Args:
            seed: Random seed for reproducibility.
        """
        self.rng = np.random.default_rng(seed)

    def create_record(
        self,
        well_name: str,
        n_days: int = 730,
        start_date: str = "2022-01-01",
        peak_oil_rate: float = None,
        output_dir: str = None,
        **kwargs,
    ) -> str:
        """Generate a single well production CSV.

        Args:
            well_name: Well identifier used in the filename.
            n_days: Number of daily samples to generate.
            start_date: ISO date string for first sample (default 2022-01-01).
            peak_oil_rate: Peak oil rate in bbl/d (randomised if None).
            output_dir: Directory to write the file (default: temp dir).

        Returns:
            Path to generated CSV file.
        """
        if output_dir is None:
            output_dir = tempfile.mkdtemp()
        os.makedirs(output_dir, exist_ok=True)

        # Dates
        t0 = date.fromisoformat(start_date)
        dates = [t0 + timedelta(days=i) for i in range(n_days)]

        if peak_oil_rate is not None and peak_oil_rate < 0:
            raise ValueError(f"peak_oil_rate must be non-negative, got {peak_oil_rate}")

        # Exponential decline with noise — typical production profile
        if peak_oil_rate is None:
            peak_oil_rate = float(self.rng.uniform(200, 1500))
        decline_rate = float(self.rng.uniform(0.001, 0.004))  # per day
        t = np.arange(n_days, dtype=float)
        oil_rate = peak_oil_rate * np.exp(-decline_rate * t)
        oil_rate += self.rng.normal(0, oil_rate * 0.05)  # 5% noise
        oil_rate = np.clip(oil_rate, 0, None)

        # Gas-oil ratio 500–2000 Mscf/Mstb
        gor = float(self.rng.uniform(500, 2000))
        gas_rate = oil_rate * gor / 1000.0
        gas_rate += self.rng.normal(0, gas_rate * 0.05)
        gas_rate = np.clip(gas_rate, 0, None)

        # Water cut rises with time (0→60%)
        water_cut = 0.6 * (1 - np.exp(-decline_rate * 2 * t))
        water_rate = oil_rate * water_cut / (1 - water_cut + 1e-9)
        water_rate = np.clip(water_rate, 0, None)

        # Wellhead pressure declines gently
        peak_pressure = float(self.rng.uniform(1500, 4000))
        pressure = peak_pressure * np.exp(-decline_rate * 0.5 * t)
        pressure += self.rng.normal(0, 20, n_days)
        pressure = np.clip(pressure, 0, None)

        # Temperature — roughly constant with small noise
        base_temp = float(self.rng.uniform(150, 280))
        temperature = base_temp + self.rng.normal(0, 2, n_days)

        df = pd.DataFrame(
            {
                "date": [d.isoformat() for d in dates],
                "oil_rate_bbl_d": oil_rate.round(2),
                "gas_rate_mscf_d": gas_rate.round(2),
                "water_rate_bbl_d": water_rate.round(2),
                "wellhead_pressure_psi": pressure.round(1),
                "temperature_f": temperature.round(1),
            }
        )

        file_path = os.path.join(output_dir, f"{well_name}_production.csv")
        df.to_csv(file_path, index=False)
        return file_path

    def create_dataset(
        self,
        n_records: int,
        well_names: Optional[List[str]] = None,
        n_days: int = 730,
        start_date: str = "2022-01-01",
        output_dir: str = None,
        **kwargs,
    ) -> List[str]:
        """Generate production CSVs for multiple wells.

        Args:
            n_records: Number of wells.
            well_names: Well identifiers (auto-generated if None).
            n_days: Daily samples per well.
            start_date: ISO date string for first sample.
            output_dir: Directory to write files.

        Returns:
            List of paths to generated CSV files.
        """
        if well_names is None:
            well_names = [f"Well-{i:03d}" for i in range(n_records)]
        if len(well_names) < n_records:
            well_names = list(well_names) + [
                f"Well-{i:03d}" for i in range(len(well_names), n_records)
            ]
        if output_dir is None:
            output_dir = tempfile.mkdtemp()
        os.makedirs(output_dir, exist_ok=True)

        return [
            self.create_record(
                well_name=well_names[i],
                n_days=n_days,
                start_date=start_date,
                output_dir=output_dir,
                **kwargs,
            )
            for i in range(n_records)
        ]
