"""FastAPI application entry point."""
from fastapi import FastAPI

from .routes.catalogue import router as catalogue_router
from .routes.download import router as download_router

app = FastAPI(
    title="Synthetic Data API",
    version="1.0.0",
    description="""
Read-only REST API for browsing and downloading pre-generated synthetic oil & gas datasets.

## Data types

| Type | Format | Description |
|------|--------|-------------|
| `well_logs` | LAS | Well log curves |
| `production` | CSV | Time-series production data |
| `seismic` | SEG-Y | 3-D seismic volumes |
| `core_photos` | PNG/JPEG | Core sample photos (nested by well) |
| `osdu_manifests` | JSON | OSDU-format metadata manifests |
| `trajectories` | CSV | Well path trajectories |

## Authentication

Set the `API_KEY` environment variable to enable API-key protection.
Pass the key in every request via the `X-API-Key` header.
When `API_KEY` is unset the service is open to all callers.
""",
)

app.include_router(catalogue_router)
app.include_router(download_router)


if __name__ == "__main__":
    import uvicorn
    from .config import HOST, PORT

    uvicorn.run(app, host=HOST, port=PORT, reload=False)
