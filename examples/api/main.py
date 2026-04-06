"""FastAPI application entry point."""
from fastapi import FastAPI

from examples.api.routes.catalogue import router as catalogue_router
from examples.api.routes.download import router as download_router

app = FastAPI(title="Synthetic Data API", version="1.0.0")
app.include_router(catalogue_router)
app.include_router(download_router)


if __name__ == "__main__":
    import uvicorn
    from examples.api.config import HOST, PORT

    uvicorn.run("examples.api.main:app", host=HOST, port=PORT, reload=False)
