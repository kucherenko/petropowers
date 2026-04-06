"""FastAPI application entry point."""
from fastapi import FastAPI

from examples.api.routes.catalogue import router as catalogue_router

app = FastAPI(title="Synthetic Data API", version="1.0.0")
app.include_router(catalogue_router)
