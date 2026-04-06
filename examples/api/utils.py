"""Utility functions: safe path resolution and content-type detection."""
from pathlib import Path
from typing import Dict

from fastapi import HTTPException

CONTENT_TYPES: Dict[str, str] = {
    ".las": "text/plain",
    ".segy": "application/octet-stream",
    ".sgy": "application/octet-stream",
    ".json": "application/json",
    ".csv": "text/csv",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
}


def content_type_for(path: Path) -> str:
    """Return the MIME type for a file based on its extension."""
    return CONTENT_TYPES.get(path.suffix.lower(), "application/octet-stream")


def safe_resolve(base: Path, relative: str) -> Path:
    """Resolve *relative* path under *base*.

    Raises HTTPException(400) if the resolved path escapes *base*.
    """
    resolved = (base / relative).resolve()
    try:
        resolved.relative_to(base.resolve())
    except ValueError:
        raise HTTPException(status_code=400, detail="Path traversal detected")
    return resolved
