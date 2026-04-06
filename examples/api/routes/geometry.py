"""Geometry route: surface well coordinates and reservoir boundary polygon."""
from pathlib import Path
import json

from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel

from .. import config
from ..auth import verify_api_key

router = APIRouter(dependencies=[Depends(verify_api_key)])


class WellCoordinate(BaseModel):
    name: str
    x_m: float
    y_m: float


class BoundaryPoint(BaseModel):
    x_m: float
    y_m: float


class GeometryResponse(BaseModel):
    wells: list[WellCoordinate]
    boundary: list[BoundaryPoint]


def _get_reservoir_dir(reservoir: str) -> Path:
    """Return reservoir directory or raise 400/404."""
    data_dir = config.DATA_DIR
    rd = (data_dir / reservoir).resolve()
    try:
        rd.relative_to(data_dir.resolve())
    except ValueError:
        raise HTTPException(status_code=400, detail="Path traversal detected")
    if not rd.is_dir():
        raise HTTPException(status_code=404, detail=f"Reservoir '{reservoir}' not found")
    return rd


@router.get(
    "/reservoirs/{reservoir}/geometry",
    response_model=GeometryResponse,
    tags=["geometry"],
    summary="Reservoir geometry",
    description=(
        "Returns surface coordinates for all wells in the reservoir "
        "and the boundary polygon vertices."
    ),
)
def get_geometry(reservoir: str) -> GeometryResponse:
    rd = _get_reservoir_dir(reservoir)
    geo_dir = rd / "geometry"

    wells_path = geo_dir / "wells.json"
    boundary_path = geo_dir / "boundary.json"

    if not wells_path.is_file():
        raise HTTPException(status_code=404, detail="geometry/wells.json not found")
    if not boundary_path.is_file():
        raise HTTPException(status_code=404, detail="geometry/boundary.json not found")

    wells_data = json.loads(wells_path.read_text())
    boundary_data = json.loads(boundary_path.read_text())

    return GeometryResponse(
        wells=[WellCoordinate(**w) for w in wells_data],
        boundary=[BoundaryPoint(**b) for b in boundary_data],
    )
