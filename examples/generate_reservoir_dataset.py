#!/usr/bin/env python3
"""Generate a complete synthetic dataset for reservoir ppr-1.

Usage:
    python examples/generate_reservoir_dataset.py
    python examples/generate_reservoir_dataset.py --reservoir ppr-2
    python examples/generate_reservoir_dataset.py --reservoir ppr-1 --seed 42

This script demonstrates the petropowers synthetic_data framework by
generating all major data types for a synthetic oil field.
"""
import argparse
import json
import os
from pathlib import Path
from typing import Dict, List

import numpy as np

# ---------------------------------------------------------------------------
# Generator imports — these show the petropowers framework API explicitly
# ---------------------------------------------------------------------------
from synthetic_data.well_log import LASGenerator
from synthetic_data.seismic import SEGYGenerator
from synthetic_data.scada import TimeSeriesGenerator
from synthetic_data.osdu import LASMapper, SEGYMapper, SCADAMapper

# Core photos require an AI API key — import is deferred and guarded
CORE_PHOTOS_AVAILABLE = True
try:
    from synthetic_data.core_photos import CorePhotoGenerator
except Exception:
    CORE_PHOTOS_AVAILABLE = False

# ---------------------------------------------------------------------------
# Constants
# ---------------------------------------------------------------------------
N_WELLS = 50
WELL_PREFIX = "PPR1-Well"
LITHOLOGIES = (
    ["sandstone"] * 30 + ["shale"] * 15 + ["carbonate"] * 5
)
DEPTH_RANGE = (1500.0, 3500.0)
SAMPLE_INTERVAL = 0.15
CURVES = ["GR", "RHOB", "NPHI", "RT", "DT"]

SEISMIC_INLINE_START = 100
SEISMIC_CROSSLINE_START = 200
SEISMIC_N = 50  # 50 inlines × 50 crosslines
SEISMIC_N_SAMPLES = 251  # 0–1000 ms @ 4 ms
SEISMIC_SAMPLE_INTERVAL_US = 4000  # 4 ms in microseconds

N_PRODUCTION_DAYS = 730  # 2 years
CORE_PHOTO_WELLS = [f"{WELL_PREFIX}-001", f"{WELL_PREFIX}-002"]
CORE_PHOTOS_PER_WELL = 5
CORE_PHOTO_DEPTH_RANGE = (2000.0, 2500.0)

LEGAL_TAGS = {
    "legaltags": ["synthetic-data-example"],
    "otherRelevantDataCountries": ["US"],
}


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def well_names(n: int = N_WELLS, prefix: str = WELL_PREFIX) -> List[str]:
    return [f"{prefix}-{i:03d}" for i in range(1, n + 1)]


def _print(msg: str) -> None:
    print(f"[ppr-1] {msg}", flush=True)


# ---------------------------------------------------------------------------
# Per-type generation functions
# ---------------------------------------------------------------------------

def generate_well_logs(output_dir: str, names: List[str], seed: int) -> List[str]:
    """Generate 50 LAS well log files."""
    _print(f"Generating {len(names)} LAS well logs …")
    gen = LASGenerator(seed=seed)
    paths = []
    for i, name in enumerate(names):
        lithology = LITHOLOGIES[i % len(LITHOLOGIES)]
        try:
            path = gen.create_record(
                well_name=name,
                curves=CURVES,
                depth_range=DEPTH_RANGE,
                sample_interval=SAMPLE_INTERVAL,
                lithology=lithology,
                field_name="PPR-1 Field",
                company="PetroPowers Synthetic",
                output_dir=output_dir,
            )
            paths.append(path)
        except Exception as exc:
            _print(f"  [WARN] {name}: {exc}")
    _print(f"  → {len(paths)} LAS files written to {output_dir}")
    return paths


def generate_seismic(output_dir: str, reservoir: str, seed: int) -> str:
    """Generate one 3D SEG-Y volume."""
    _print("Generating 3D seismic volume …")
    gen = SEGYGenerator(seed=seed)
    survey_name = f"{reservoir}_3d_survey"
    try:
        path = gen.create_record(
            survey_name=survey_name,
            n_inlines=SEISMIC_N,
            n_crosslines=SEISMIC_N,
            n_samples=SEISMIC_N_SAMPLES,
            sample_interval=SEISMIC_SAMPLE_INTERVAL_US,
            inline_start=SEISMIC_INLINE_START,
            crossline_start=SEISMIC_CROSSLINE_START,
            output_dir=output_dir,
        )
        _print(f"  → SEG-Y written to {path}")
        return path
    except Exception as exc:
        _print(f"  [WARN] SEG-Y generation failed: {exc}")
        return ""


def generate_production(output_dir: str, names: List[str], seed: int) -> List[str]:
    """Generate 50 SCADA production CSV files (2 years daily)."""
    _print(f"Generating {len(names)} production history files …")
    gen = TimeSeriesGenerator(seed=seed)
    paths = []
    for name in names:
        try:
            path = gen.create_record(
                well_name=name,
                n_days=N_PRODUCTION_DAYS,
                output_dir=output_dir,
            )
            paths.append(path)
        except Exception as exc:
            _print(f"  [WARN] {name}: {exc}")
    _print(f"  → {len(paths)} production CSV files written to {output_dir}")
    return paths


def generate_well_paths(output_dir: str, names: List[str], seed: int) -> List[str]:
    """Generate 50 deviated well path JSON files (S-curve trajectories).

    NOTE: No WellPathGenerator exists in synthetic_data/ yet.
    This function implements a minimal S-curve inline using numpy.
    See spec §Implementation Notes for details.
    """
    _print(f"Generating {len(names)} well path JSON files …")
    rng = np.random.default_rng(seed)
    os.makedirs(output_dir, exist_ok=True)
    paths = []

    for name in names:
        # S-curve: vertical section → build angle → hold angle
        total_md = float(rng.uniform(2000, 4000))
        n_points = 200
        md = np.linspace(0, total_md, n_points)

        # Build-up from 0° to target inclination over first 40% of MD
        target_inc = float(rng.uniform(20, 60))
        build_end = total_md * 0.4
        inclination = np.where(
            md <= build_end,
            target_inc * (md / build_end),
            target_inc,
        )

        # Azimuth — constant (N45E ± some noise)
        azimuth_base = float(rng.uniform(0, 360))
        azimuth = np.full(n_points, azimuth_base) + rng.normal(0, 1, n_points)

        # TVD via numerical integration of cos(inc)
        inc_rad = np.deg2rad(inclination)
        d_md = np.diff(md, prepend=md[0])
        tvd = np.cumsum(d_md * np.cos(inc_rad))

        well_path = {
            "well_name": name,
            "md_m": md.round(2).tolist(),
            "tvd_m": tvd.round(2).tolist(),
            "inclination_deg": inclination.round(2).tolist(),
            "azimuth_deg": azimuth.round(2).tolist(),
        }

        file_path = os.path.join(output_dir, f"{name}_path.json")
        with open(file_path, "w") as f:
            json.dump(well_path, f, indent=2)
        paths.append(file_path)

    _print(f"  → {len(paths)} well path JSON files written to {output_dir}")
    return paths


def generate_core_photos(output_dir: str, seed: int) -> List[str]:
    """Generate core photos for PPR1-Well-001 and PPR1-Well-002 (up to 5 each).

    Requires GOOGLE_AI_API_KEY. If unavailable, skips with a clear message.
    """
    api_key = os.environ.get("GOOGLE_AI_API_KEY")
    if not api_key or not CORE_PHOTOS_AVAILABLE:
        _print(
            "[SKIP] Core photo generation requires AI API access "
            "(set GOOGLE_AI_API_KEY environment variable).\n"
            "       To generate core photos, configure your API key and re-run."
        )
        return []

    _print(f"Generating core photos for {CORE_PHOTO_WELLS} …")
    paths = []
    try:
        gen = CorePhotoGenerator(api_key=api_key, seed=seed)
        for well in CORE_PHOTO_WELLS:
            well_dir = os.path.join(output_dir, well)
            os.makedirs(well_dir, exist_ok=True)
            for _ in range(CORE_PHOTOS_PER_WELL):
                try:
                    result = gen.create_record(
                        well_name=well,
                        depth_range=CORE_PHOTO_DEPTH_RANGE,
                        lithology="sandstone",
                        field_name="PPR-1 Field",
                        formation="PPR-1 Formation",
                        output_dir=well_dir,
                    )
                    paths.append(result["image_path"])
                except Exception as exc:
                    _print(f"  [WARN] {well} photo failed: {exc}")
    except Exception as exc:
        _print(f"  [WARN] CorePhotoGenerator init failed: {exc}")

    _print(f"  → {len(paths)} core photos written")
    return paths


def generate_osdu_manifests(
    output_dir: str,
    las_paths: List[str],
    segy_path: str,
    scada_paths: List[str],
) -> List[str]:
    """Generate OSDU manifests for all entities."""
    _print("Generating OSDU manifests …")
    paths = []

    las_mapper = LASMapper()
    segy_mapper = SEGYMapper()
    scada_mapper = SCADAMapper()

    # Well / Wellbore / WellLog manifests (one per LAS file)
    well_log_dir = os.path.join(output_dir, "well_log")
    os.makedirs(well_log_dir, exist_ok=True)
    for las_path in las_paths:
        try:
            manifest = las_mapper.to_manifest(las_path, LEGAL_TAGS)
            safe_name = Path(las_path).stem
            out_path = os.path.join(well_log_dir, f"{safe_name}.json")
            with open(out_path, "w") as f:
                json.dump(manifest, f, indent=2)
            paths.append(out_path)
        except Exception as exc:
            _print(f"  [WARN] LAS manifest for {las_path}: {exc}")

    # SeismicTraceData manifest
    if segy_path:
        seismic_dir = os.path.join(output_dir, "seismic")
        os.makedirs(seismic_dir, exist_ok=True)
        try:
            manifest = segy_mapper.to_manifest(segy_path, LEGAL_TAGS)
            survey_name = manifest["data"]["WorkProduct"]["data"]["Name"]
            safe_name = survey_name.replace(":", "_").replace("/", "_")
            out_path = os.path.join(seismic_dir, f"{safe_name}.json")
            with open(out_path, "w") as f:
                json.dump(manifest, f, indent=2)
            paths.append(out_path)
        except Exception as exc:
            _print(f"  [WARN] SEG-Y manifest: {exc}")

    # Facility (production) manifests
    facility_dir = os.path.join(output_dir, "facility")
    os.makedirs(facility_dir, exist_ok=True)
    for scada_path in scada_paths:
        try:
            manifest = scada_mapper.to_manifest(scada_path, LEGAL_TAGS)
            facility_name = manifest["data"]["WorkProduct"]["data"]["FacilityName"]
            safe_name = facility_name.replace(":", "_").replace("/", "_")
            out_path = os.path.join(facility_dir, f"{safe_name}.json")
            with open(out_path, "w") as f:
                json.dump(manifest, f, indent=2)
            paths.append(out_path)
        except Exception as exc:
            _print(f"  [WARN] SCADA manifest for {scada_path}: {exc}")

    _print(f"  → {len(paths)} OSDU manifests written to {output_dir}")
    return paths


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main() -> None:
    parser = argparse.ArgumentParser(
        description="Generate synthetic reservoir dataset using petropowers."
    )
    parser.add_argument(
        "--reservoir",
        default="ppr-1",
        help="Reservoir name (default: ppr-1). Controls output folder.",
    )
    parser.add_argument(
        "--seed",
        type=int,
        default=42,
        help="Random seed for reproducibility (default: 42).",
    )
    args = parser.parse_args()

    reservoir = args.reservoir
    seed = args.seed

    # Output root: examples/data/<reservoir>/
    script_dir = Path(__file__).parent
    data_root = script_dir / "data" / reservoir

    dirs: Dict[str, str] = {
        "well_logs": str(data_root / "well_logs"),
        "seismic": str(data_root / "seismic"),
        "production": str(data_root / "production"),
        "well_paths": str(data_root / "well_paths"),
        "core_photos": str(data_root / "core_photos"),
        "osdu_manifests": str(data_root / "osdu_manifests"),
    }
    for d in dirs.values():
        os.makedirs(d, exist_ok=True)

    print(f"\n{'='*60}")
    print(f"  petropowers — Reservoir Dataset Generator")
    print(f"  Reservoir : {reservoir}")
    print(f"  Output    : {data_root}")
    print(f"  Seed      : {seed}")
    print(f"{'='*60}\n")

    names = well_names()

    las_paths = generate_well_logs(dirs["well_logs"], names, seed)
    segy_path = generate_seismic(dirs["seismic"], reservoir, seed)
    scada_paths = generate_production(dirs["production"], names, seed)
    well_path_paths = generate_well_paths(dirs["well_paths"], names, seed)
    photo_paths = generate_core_photos(dirs["core_photos"], seed)
    manifest_paths = generate_osdu_manifests(
        dirs["osdu_manifests"], las_paths, segy_path, scada_paths
    )

    print(f"\n{'='*60}")
    print(f"  Dataset complete: {data_root}")
    print(f"  Well logs     : {len(las_paths)}")
    print(f"  Seismic       : {'1' if segy_path else '0'}")
    print(f"  Production    : {len(scada_paths)}")
    print(f"  Well paths    : {len(well_path_paths)}")
    print(f"  Core photos   : {len(photo_paths)}")
    print(f"  OSDU manifests: {len(manifest_paths)}")
    print(f"{'='*60}\n")


if __name__ == "__main__":
    main()
