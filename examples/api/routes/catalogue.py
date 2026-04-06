"""Catalogue routes: browse available reservoirs and data types."""
from pathlib import Path
from typing import Any, Dict, List

from fastapi import APIRouter, Depends, HTTPException

from examples.api import config
from examples.api.auth import verify_api_key

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


@router.get("/health")
def health() -> Dict[str, Any]:
    data_dir = config.DATA_DIR
    reservoirs: List[str] = (
        sorted(d.name for d in data_dir.iterdir() if d.is_dir())
        if data_dir.is_dir()
        else []
    )
    return {"status": "ok", "reservoirs": reservoirs}


@router.get("/reservoirs")
def list_reservoirs() -> List[str]:
    data_dir = config.DATA_DIR
    if not data_dir.is_dir():
        return []
    return sorted(d.name for d in data_dir.iterdir() if d.is_dir())


@router.get("/reservoirs/{reservoir}")
def reservoir_summary(reservoir: str) -> Dict[str, int]:
    rd = _get_reservoir_dir(reservoir)
    return {
        dt.name: sum(1 for p in dt.rglob("*") if p.is_file())
        for dt in rd.iterdir()
        if dt.is_dir()
    }


@router.get("/reservoirs/{reservoir}/{data_type}")
def list_files(reservoir: str, data_type: str) -> List[str]:
    rd = _get_reservoir_dir(reservoir)
    dt_dir = rd / data_type
    if not dt_dir.is_dir():
        raise HTTPException(status_code=404, detail=f"Data type '{data_type}' not found")
    return sorted(
        str(p.relative_to(dt_dir))
        for p in dt_dir.rglob("*")
        if p.is_file()
    )
