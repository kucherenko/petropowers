"""Download and image routes: stream files from the data directory."""
from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import FileResponse

from .. import config
from ..auth import verify_api_key
from ..utils import content_type_for, safe_resolve

router = APIRouter(dependencies=[Depends(verify_api_key)])

_IMAGE_EXTENSIONS = {".png", ".jpg", ".jpeg"}


def _resolve_file(reservoir: str, data_type: str, file_path: str) -> FileResponse:
    """Shared path resolution used by both download and image endpoints."""
    base = (config.DATA_DIR / reservoir / data_type).resolve()
    try:
        base.relative_to(config.DATA_DIR.resolve())
    except ValueError:
        raise HTTPException(status_code=400, detail="Path traversal detected")
    if not base.is_dir():
        raise HTTPException(status_code=404, detail="Not found")
    resolved = safe_resolve(base, file_path)
    if not resolved.is_file():
        raise HTTPException(status_code=404, detail="File not found")
    return resolved


@router.get(
    "/reservoirs/{reservoir}/{data_type}/{file_path:path}",
    tags=["files"],
    summary="Download file",
    description=(
        "Download any file from the data directory as an attachment. "
        "`file_path` may contain subdirectory components for nested types "
        "such as `core_photos` and `osdu_manifests`."
    ),
)
def download_file(reservoir: str, data_type: str, file_path: str) -> FileResponse:
    resolved = _resolve_file(reservoir, data_type, file_path)
    return FileResponse(
        path=str(resolved),
        media_type=content_type_for(resolved),
        filename=resolved.name,
    )


@router.get(
    "/images/{reservoir}/{data_type}/{file_path:path}",
    tags=["images"],
    summary="Get image inline",
    description=(
        "Serve an image file inline — no `Content-Disposition: attachment` header — "
        "so it can be embedded directly in an `<img>` tag or viewed in a browser. "
        "Only PNG and JPEG files are accepted; other types return **415**."
    ),
    responses={
        415: {"description": "File is not a supported image type (PNG or JPEG)"},
    },
)
def get_image(reservoir: str, data_type: str, file_path: str) -> FileResponse:
    resolved = _resolve_file(reservoir, data_type, file_path)
    if resolved.suffix.lower() not in _IMAGE_EXTENSIONS:
        raise HTTPException(
            status_code=415,
            detail=f"Not an image file. Supported types: {sorted(_IMAGE_EXTENSIONS)}",
        )
    return FileResponse(
        path=str(resolved),
        media_type=content_type_for(resolved),
        # No filename= → no Content-Disposition header → browser renders inline
    )
