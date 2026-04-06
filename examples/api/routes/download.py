"""Download route: stream a single file from the data directory."""
from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import FileResponse

from examples.api import config
from examples.api.auth import verify_api_key
from examples.api.utils import content_type_for, safe_resolve

router = APIRouter(dependencies=[Depends(verify_api_key)])


@router.get("/reservoirs/{reservoir}/{data_type}/{file_path:path}")
def download_file(reservoir: str, data_type: str, file_path: str) -> FileResponse:
    """Stream a file from the data directory.

    ``file_path`` may contain subdirectory components (e.g.
    ``PPR1-Well-001/photo_001.png``) to support nested data types such as
    ``core_photos`` and ``osdu_manifests``.
    """
    base = config.DATA_DIR / reservoir / data_type
    if not base.is_dir():
        raise HTTPException(status_code=404, detail="Not found")
    resolved = safe_resolve(base, file_path)
    if not resolved.is_file():
        raise HTTPException(status_code=404, detail="File not found")
    return FileResponse(
        path=str(resolved),
        media_type=content_type_for(resolved),
        filename=resolved.name,
    )
