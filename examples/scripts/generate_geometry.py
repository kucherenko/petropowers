"""Generate synthetic well surface coordinates and reservoir boundary polygon.

Usage:
    python scripts/generate_geometry.py

Writes:
    data/ppr-1/geometry/wells.json
    data/ppr-1/geometry/boundary.json
"""

from __future__ import annotations

import json
import math
import random
from pathlib import Path

SEED = 42
N_WELLS = 50
EXTENT_X = 10_000  # metres east
EXTENT_Y = 8_000   # metres north
WELL_NAMES = [f"PPR1-Well-{i:03d}" for i in range(1, N_WELLS + 1)]

OUT_DIR = Path(__file__).parent.parent / "data" / "ppr-1" / "geometry"


def _cluster_points(rng: random.Random) -> list[tuple[float, float]]:
    """Return 50 (x, y) surface locations with realistic cluster distribution."""
    # 4 cluster centres scattered across the reservoir
    centres = [
        (EXTENT_X * 0.25, EXTENT_Y * 0.30),
        (EXTENT_X * 0.65, EXTENT_Y * 0.25),
        (EXTENT_X * 0.40, EXTENT_Y * 0.70),
        (EXTENT_X * 0.75, EXTENT_Y * 0.65),
    ]
    cluster_sizes = [14, 13, 12, 11]  # = 50 total
    points: list[tuple[float, float]] = []
    for (cx, cy), size in zip(centres, cluster_sizes):
        for _ in range(size):
            # Gaussian scatter, σ≈700 m around cluster centre
            x = cx + rng.gauss(0, 700)
            y = cy + rng.gauss(0, 600)
            x = max(500.0, min(EXTENT_X - 500.0, x))
            y = max(400.0, min(EXTENT_Y - 400.0, y))
            points.append((x, y))
    return points


def _boundary_polygon() -> list[dict[str, float]]:
    """Return ~20 vertices for a slightly irregular convex polygon."""
    rng = random.Random(SEED + 1)
    cx, cy = EXTENT_X / 2, EXTENT_Y / 2
    # Radii approximate: 5400 m E-W, 4200 m N-S
    rx, ry = 4800, 3700
    n = 20
    vertices: list[dict[str, float]] = []
    for i in range(n):
        angle = 2 * math.pi * i / n
        # Add small per-vertex perturbation for organic look
        jitter_r = rng.uniform(0.88, 1.08)
        x = cx + rx * math.cos(angle) * jitter_r
        y = cy + ry * math.sin(angle) * jitter_r
        # Clamp to reasonable bounds
        x = max(100.0, min(EXTENT_X - 100.0, x))
        y = max(100.0, min(EXTENT_Y - 100.0, y))
        vertices.append({"x_m": round(x, 1), "y_m": round(y, 1)})
    return vertices


def main() -> None:
    rng = random.Random(SEED)
    raw_points = _cluster_points(rng)

    wells = [
        {"name": name, "x_m": round(x, 1), "y_m": round(y, 1)}
        for name, (x, y) in zip(WELL_NAMES, raw_points)
    ]
    boundary = _boundary_polygon()

    OUT_DIR.mkdir(parents=True, exist_ok=True)

    wells_path = OUT_DIR / "wells.json"
    boundary_path = OUT_DIR / "boundary.json"

    wells_path.write_text(json.dumps(wells, indent=2) + "\n")
    boundary_path.write_text(json.dumps(boundary, indent=2) + "\n")

    print(f"Wrote {len(wells)} wells  → {wells_path}")
    print(f"Wrote {len(boundary)} boundary vertices → {boundary_path}")


if __name__ == "__main__":
    main()
