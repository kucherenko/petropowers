"""Optional API-key authentication dependency for FastAPI routes."""
from typing import Optional

from fastapi import Header, HTTPException

from examples.api import config


def verify_api_key(x_api_key: Optional[str] = Header(default=None)) -> None:
    """FastAPI dependency.

    If ``API_KEY`` env var is set, every request must supply a matching
    ``X-API-Key`` header. If ``API_KEY`` is unset the service is open.
    """
    if config.API_KEY is None:
        return  # open mode — no authentication required
    if x_api_key != config.API_KEY:
        raise HTTPException(status_code=401, detail="Invalid or missing API key")
