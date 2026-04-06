"""Catalogue routes: browse available reservoirs and data types."""
from pathlib import Path
from typing import Any, Dict, List

from fastapi import APIRouter, Depends, HTTPException

from .. import config
from ..auth import verify_api_key

router = APIRouter(dependencies=[Depends(verify_api_key)])


def _get_reservoir_dir(reservoir: str) -> Path:
    """Return the Path for a reservoir directory; raise 404 if not found."""
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
    "/health",
    tags=["system"],
    summary="Health check",
    description="Returns service status and the list of available reservoir names.",
)
def health() -> Dict[str, Any]:
    data_dir = config.DATA_DIR
    reservoirs: List[str] = (
        sorted(d.name for d in data_dir.iterdir() if d.is_dir())
        if data_dir.is_dir()
        else []
    )
    return {"status": "ok", "reservoirs": reservoirs}


@router.get(
    "/reservoirs",
    tags=["catalogue"],
    summary="List reservoirs",
    description="Returns the names of all reservoir directories present in the data folder.",
)
def list_reservoirs() -> List[str]:
    data_dir = config.DATA_DIR
    if not data_dir.is_dir():
        return []
    return sorted(d.name for d in data_dir.iterdir() if d.is_dir())


@router.get(
    "/reservoirs/{reservoir}",
    tags=["catalogue"],
    summary="Reservoir summary",
    description="Returns a mapping of data-type name to total file count for a single reservoir.",
)
def reservoir_summary(reservoir: str) -> Dict[str, int]:
    rd = _get_reservoir_dir(reservoir)
    return {
        dt.name: sum(1 for p in dt.rglob("*") if p.is_file())
        for dt in rd.iterdir()
        if dt.is_dir()
    }


@router.get(
    "/reservoirs/{reservoir}/{data_type}",
    tags=["catalogue"],
    summary="List files",
    description=(
        "Returns the relative paths of all files under a given data type. "
        "For nested types such as `core_photos` and `osdu_manifests` the paths "
        "include subdirectory components, e.g. `PPR1-Well-001/photo_001.png`."
    ),
)
def list_files(reservoir: str, data_type: str) -> List[str]:
    rd = _get_reservoir_dir(reservoir)
    dt_dir = (rd / data_type).resolve()
    try:
        dt_dir.relative_to(rd)
    except ValueError:
        raise HTTPException(status_code=400, detail="Path traversal detected")
    if not dt_dir.is_dir():
        raise HTTPException(status_code=404, detail=f"Data type '{data_type}' not found")
    return sorted(
        str(p.relative_to(dt_dir))
        for p in dt_dir.rglob("*")
        if p.is_file()
    )
