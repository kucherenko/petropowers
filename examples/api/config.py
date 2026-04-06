"""API service configuration loaded from environment variables."""
import os
from pathlib import Path
from typing import Optional

# Data directory: defaults to examples/data relative to this file's parent (examples/)
DATA_DIR: Path = Path(
    os.getenv("DATA_DIR", str(Path(__file__).parent.parent / "data"))
).resolve()

# API key: None means open (no authentication required)
API_KEY: Optional[str] = os.getenv("API_KEY")

HOST: str = os.getenv("HOST", "127.0.0.1")
PORT: int = int(os.getenv("PORT", "8000"))
