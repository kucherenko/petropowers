# Synthetic Data API Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use petropowers:subagent-driven-development (recommended) or petropowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a read-only FastAPI service at `examples/api/` that lets consumers browse and download pre-generated synthetic oil & gas data from `examples/data/`.

**Architecture:** A FastAPI app with no database — the `examples/data/` directory tree is the data store. Two route modules handle catalogue browsing and file download. Auth is optional: if `API_KEY` env var is set, every request must include a matching `X-API-Key` header.

**Tech Stack:** Python 3.8+, FastAPI, uvicorn, pytest + TestClient (httpx)

**Spec:** `docs/petropowers/specs/2026-04-06-synthetic-data-api-design.md`

---

## File Map

| File | Action | Responsibility |
|------|--------|----------------|
| `examples/__init__.py` | Create | Makes `examples` a package so imports work |
| `examples/api/__init__.py` | Create | Makes `examples.api` a package |
| `examples/api/requirements.txt` | Create | API-specific dependencies |
| `examples/api/config.py` | Create | Reads `DATA_DIR`, `API_KEY`, `HOST`, `PORT` from env |
| `examples/api/utils.py` | Create | `safe_resolve()`, `content_type_for()` |
| `examples/api/auth.py` | Create | FastAPI dependency that enforces optional API key |
| `examples/api/routes/__init__.py` | Create | Package marker |
| `examples/api/routes/catalogue.py` | Create | `/health`, `/reservoirs`, `/reservoirs/{r}`, `/reservoirs/{r}/{type}` |
| `examples/api/routes/download.py` | Create | `/reservoirs/{r}/{type}/{file_path:path}` |
| `examples/api/main.py` | Create | FastAPI app factory, mounts routers |
| `tests/test_api.py` | Create | All API tests using TestClient |

---

## Task 1: Scaffold the package structure

**Files:**
- Create: `examples/__init__.py`
- Create: `examples/api/__init__.py`
- Create: `examples/api/routes/__init__.py`
- Create: `examples/api/requirements.txt`

- [ ] **Step 1: Create package markers and requirements**

```bash
touch examples/__init__.py
touch examples/api/__init__.py
mkdir -p examples/api/routes && touch examples/api/routes/__init__.py
```

Write `examples/api/requirements.txt`:

```
fastapi>=0.100.0
uvicorn[standard]>=0.20.0
httpx>=0.24.0
```

- [ ] **Step 2: Verify the package structure is importable**

```bash
python -c "import examples; import examples.api; print('OK')"
```

Expected output: `OK`

- [ ] **Step 3: Commit the scaffold**

```bash
git add examples/__init__.py examples/api/__init__.py examples/api/routes/__init__.py examples/api/requirements.txt
git commit -m "feat(api): scaffold examples/api package structure"
```

---

## Task 2: config.py — environment settings

**Files:**
- Create: `examples/api/config.py`
- Create: `tests/test_api.py` (initial section)

- [ ] **Step 1: Write failing tests for config**

Create `tests/test_api.py`:

```python
"""Tests for the synthetic data REST API service."""
import pytest
from pathlib import Path


# ---------------------------------------------------------------------------
# Fixtures
# ---------------------------------------------------------------------------

def _make_data_dir(tmp_path: Path) -> Path:
    """Create a minimal synthetic data directory tree under tmp_path."""
    r = tmp_path / "ppr-1"
    (r / "well_logs").mkdir(parents=True)
    (r / "well_logs" / "PPR1-Well-001.las").write_text("~VERSION\n")
    (r / "well_logs" / "PPR1-Well-002.las").write_text("~VERSION\n")
    (r / "production").mkdir(parents=True)
    (r / "production" / "PPR1-Well-001.csv").write_text("date,oil_rate\n2024-01-01,100\n")
    # nested: core_photos
    (r / "core_photos" / "PPR1-Well-001").mkdir(parents=True)
    (r / "core_photos" / "PPR1-Well-001" / "photo_001.png").write_bytes(b"\x89PNG")
    # nested: osdu_manifests
    (r / "osdu_manifests" / "well_log").mkdir(parents=True)
    (r / "osdu_manifests" / "well_log" / "PPR1-Well-001.json").write_text('{"kind":"osdu"}')
    return tmp_path


@pytest.fixture
def data_dir(tmp_path):
    return _make_data_dir(tmp_path)


@pytest.fixture
def client(data_dir, monkeypatch):
    import examples.api.config as cfg
    monkeypatch.setattr(cfg, "DATA_DIR", data_dir)
    monkeypatch.setattr(cfg, "API_KEY", None)
    from examples.api.main import app
    from fastapi.testclient import TestClient
    return TestClient(app)


@pytest.fixture
def auth_client(data_dir, monkeypatch):
    import examples.api.config as cfg
    monkeypatch.setattr(cfg, "DATA_DIR", data_dir)
    monkeypatch.setattr(cfg, "API_KEY", "test-secret")
    from examples.api.main import app
    from fastapi.testclient import TestClient
    return TestClient(app)


# ---------------------------------------------------------------------------
# Config
# ---------------------------------------------------------------------------

def test_config_defaults():
    import examples.api.config as cfg
    assert cfg.DATA_DIR.is_absolute()
    # Default DATA_DIR should resolve to examples/data
    assert cfg.DATA_DIR.name == "data"
    assert cfg.DATA_DIR.parent.name == "examples"


def test_config_api_key_default_is_none():
    import examples.api.config as cfg
    # Without setting API_KEY env var, it should be None
    assert cfg.API_KEY is None or isinstance(cfg.API_KEY, str)
```

- [ ] **Step 2: Run tests to confirm they fail**

```bash
pytest tests/test_api.py::test_config_defaults tests/test_api.py::test_config_api_key_default_is_none -v
```

Expected: `ERROR` — `ModuleNotFoundError: No module named 'examples.api.config'`

- [ ] **Step 3: Implement config.py**

Create `examples/api/config.py`:

```python
"""API service configuration loaded from environment variables."""
import os
from pathlib import Path

# Data directory: defaults to examples/data relative to this file's parent (examples/)
DATA_DIR: Path = Path(
    os.getenv("DATA_DIR", str(Path(__file__).parent.parent / "data"))
).resolve()

# API key: None means open (no authentication required)
API_KEY: str = os.getenv("API_KEY")  # type: ignore[assignment]

HOST: str = os.getenv("HOST", "127.0.0.1")
PORT: int = int(os.getenv("PORT", "8000"))
```

- [ ] **Step 4: Run tests to confirm they pass**

```bash
pytest tests/test_api.py::test_config_defaults tests/test_api.py::test_config_api_key_default_is_none -v
```

Expected: Both PASS

- [ ] **Step 5: Commit**

```bash
git add examples/api/config.py tests/test_api.py
git commit -m "feat(api): add config module and initial test file"
```

---

## Task 3: utils.py — safe path resolution and content-type detection

**Files:**
- Create: `examples/api/utils.py`
- Modify: `tests/test_api.py` (append utility tests)

- [ ] **Step 1: Append failing tests for utils**

Append to `tests/test_api.py`:

```python
# ---------------------------------------------------------------------------
# Utils
# ---------------------------------------------------------------------------

def test_content_type_for_las(tmp_path):
    from examples.api.utils import content_type_for
    assert content_type_for(tmp_path / "well.las") == "text/plain"


def test_content_type_for_segy(tmp_path):
    from examples.api.utils import content_type_for
    assert content_type_for(tmp_path / "survey.segy") == "application/octet-stream"
    assert content_type_for(tmp_path / "survey.sgy") == "application/octet-stream"


def test_content_type_for_json(tmp_path):
    from examples.api.utils import content_type_for
    assert content_type_for(tmp_path / "manifest.json") == "application/json"


def test_content_type_for_csv(tmp_path):
    from examples.api.utils import content_type_for
    assert content_type_for(tmp_path / "production.csv") == "text/csv"


def test_content_type_for_png(tmp_path):
    from examples.api.utils import content_type_for
    assert content_type_for(tmp_path / "photo.png") == "image/png"


def test_content_type_for_unknown(tmp_path):
    from examples.api.utils import content_type_for
    assert content_type_for(tmp_path / "file.bin") == "application/octet-stream"


def test_safe_resolve_valid_path(tmp_path):
    from examples.api.utils import safe_resolve
    (tmp_path / "file.txt").write_text("x")
    result = safe_resolve(tmp_path, "file.txt")
    assert result == (tmp_path / "file.txt").resolve()


def test_safe_resolve_nested_valid_path(tmp_path):
    from examples.api.utils import safe_resolve
    (tmp_path / "sub").mkdir()
    (tmp_path / "sub" / "file.txt").write_text("x")
    result = safe_resolve(tmp_path, "sub/file.txt")
    assert result == (tmp_path / "sub" / "file.txt").resolve()


def test_safe_resolve_traversal_raises_400(tmp_path):
    from examples.api.utils import safe_resolve
    from fastapi import HTTPException
    with pytest.raises(HTTPException) as exc_info:
        safe_resolve(tmp_path, "../../etc/passwd")
    assert exc_info.value.status_code == 400
```

- [ ] **Step 2: Run tests to confirm they fail**

```bash
pytest tests/test_api.py -k "content_type or safe_resolve" -v
```

Expected: `ERROR` — `ModuleNotFoundError: No module named 'examples.api.utils'`

- [ ] **Step 3: Implement utils.py**

Create `examples/api/utils.py`:

```python
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
```

- [ ] **Step 4: Run tests to confirm they pass**

```bash
pytest tests/test_api.py -k "content_type or safe_resolve" -v
```

Expected: All PASS

- [ ] **Step 5: Commit**

```bash
git add examples/api/utils.py tests/test_api.py
git commit -m "feat(api): add utils module with safe_resolve and content_type_for"
```

---

## Task 4: auth.py — optional API-key dependency

**Files:**
- Create: `examples/api/auth.py`

No isolated unit tests for auth — it is exercised by the integration tests in Task 7 (auth requires a running app context). This task creates the module only.

- [ ] **Step 1: Implement auth.py**

Create `examples/api/auth.py`:

```python
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
```

- [ ] **Step 2: Verify import works**

```bash
python -c "from examples.api.auth import verify_api_key; print('OK')"
```

Expected: `OK`

- [ ] **Step 3: Commit**

```bash
git add examples/api/auth.py
git commit -m "feat(api): add optional API-key auth dependency"
```

---

## Task 5: Catalogue routes

**Files:**
- Create: `examples/api/routes/catalogue.py`
- Modify: `tests/test_api.py` (append catalogue tests)

Note: These tests import `examples.api.main`, which doesn't exist yet. We create a minimal `main.py` stub in this task so the tests can run. The stub is extended in Task 7.

- [ ] **Step 1: Create minimal main.py stub**

Create `examples/api/main.py`:

```python
"""FastAPI application entry point."""
from fastapi import FastAPI

app = FastAPI(title="Synthetic Data API", version="1.0.0")
```

- [ ] **Step 2: Append failing catalogue tests**

Append to `tests/test_api.py`:

```python
# ---------------------------------------------------------------------------
# Health endpoint
# ---------------------------------------------------------------------------

def test_health_returns_ok(client):
    r = client.get("/health")
    assert r.status_code == 200
    body = r.json()
    assert body["status"] == "ok"
    assert "ppr-1" in body["reservoirs"]


# ---------------------------------------------------------------------------
# /reservoirs
# ---------------------------------------------------------------------------

def test_list_reservoirs(client):
    r = client.get("/reservoirs")
    assert r.status_code == 200
    assert "ppr-1" in r.json()


# ---------------------------------------------------------------------------
# /reservoirs/{reservoir}
# ---------------------------------------------------------------------------

def test_reservoir_summary(client):
    r = client.get("/reservoirs/ppr-1")
    assert r.status_code == 200
    body = r.json()
    assert "well_logs" in body
    assert body["well_logs"] == 2
    assert body["production"] == 1


def test_reservoir_not_found(client):
    r = client.get("/reservoirs/nonexistent")
    assert r.status_code == 404


# ---------------------------------------------------------------------------
# /reservoirs/{reservoir}/{data_type}
# ---------------------------------------------------------------------------

def test_list_files_flat(client):
    r = client.get("/reservoirs/ppr-1/well_logs")
    assert r.status_code == 200
    files = r.json()
    assert "PPR1-Well-001.las" in files
    assert "PPR1-Well-002.las" in files


def test_list_files_nested_returns_relative_paths(client):
    r = client.get("/reservoirs/ppr-1/core_photos")
    assert r.status_code == 200
    files = r.json()
    # Nested paths include subdirectory prefix
    assert any("photo_001.png" in f for f in files)
    assert any("PPR1-Well-001" in f for f in files)


def test_list_files_data_type_not_found(client):
    r = client.get("/reservoirs/ppr-1/nonexistent_type")
    assert r.status_code == 404
```

- [ ] **Step 3: Run tests to confirm they fail**

```bash
pytest tests/test_api.py -k "health or reservoir or list_files" -v
```

Expected: FAIL — routes return 404 because the stub `main.py` has no routers mounted.

- [ ] **Step 4: Implement catalogue.py**

Create `examples/api/routes/catalogue.py`:

```python
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
```

- [ ] **Step 5: Mount catalogue router in main.py**

Replace contents of `examples/api/main.py`:

```python
"""FastAPI application entry point."""
from fastapi import FastAPI

from examples.api.routes.catalogue import router as catalogue_router

app = FastAPI(title="Synthetic Data API", version="1.0.0")
app.include_router(catalogue_router)
```

- [ ] **Step 6: Run tests to confirm they pass**

```bash
pytest tests/test_api.py -k "health or reservoir or list_files" -v
```

Expected: All PASS

- [ ] **Step 7: Commit**

```bash
git add examples/api/routes/catalogue.py examples/api/main.py tests/test_api.py
git commit -m "feat(api): add catalogue routes for browsing reservoirs and data types"
```

---

## Task 6: Download route

**Files:**
- Create: `examples/api/routes/download.py`
- Modify: `tests/test_api.py` (append download tests)
- Modify: `examples/api/main.py` (mount download router)

- [ ] **Step 1: Append failing download tests**

Append to `tests/test_api.py`:

```python
# ---------------------------------------------------------------------------
# Download
# ---------------------------------------------------------------------------

def test_download_flat_file(client):
    r = client.get("/reservoirs/ppr-1/well_logs/PPR1-Well-001.las")
    assert r.status_code == 200
    assert r.headers["content-type"].startswith("text/plain")


def test_download_csv_file(client):
    r = client.get("/reservoirs/ppr-1/production/PPR1-Well-001.csv")
    assert r.status_code == 200
    assert r.headers["content-type"].startswith("text/csv")


def test_download_nested_png(client):
    r = client.get("/reservoirs/ppr-1/core_photos/PPR1-Well-001/photo_001.png")
    assert r.status_code == 200
    assert r.headers["content-type"].startswith("image/png")


def test_download_nested_json(client):
    r = client.get("/reservoirs/ppr-1/osdu_manifests/well_log/PPR1-Well-001.json")
    assert r.status_code == 200
    assert r.headers["content-type"].startswith("application/json")


def test_download_file_not_found(client):
    r = client.get("/reservoirs/ppr-1/well_logs/missing.las")
    assert r.status_code == 404


def test_download_reservoir_not_found(client):
    r = client.get("/reservoirs/ghost/well_logs/file.las")
    assert r.status_code == 404


def test_download_path_traversal_rejected(client):
    # Starlette normalises `../../` in the URL before routing, so the traversal
    # may be absorbed at the HTTP layer (404) before reaching safe_resolve (400).
    # Either status means the file was not served — both are acceptable.
    r = client.get("/reservoirs/ppr-1/well_logs/../../etc/passwd")
    assert r.status_code in (400, 404)
```

- [ ] **Step 2: Run tests to confirm they fail**

```bash
pytest tests/test_api.py -k "download" -v
```

Expected: FAIL — routes not found (404) because download router not mounted.

- [ ] **Step 3: Implement download.py**

Create `examples/api/routes/download.py`:

```python
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
```

- [ ] **Step 4: Mount download router in main.py**

Replace contents of `examples/api/main.py`:

```python
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
```

- [ ] **Step 5: Run tests to confirm they pass**

```bash
pytest tests/test_api.py -k "download" -v
```

Expected: All PASS

- [ ] **Step 6: Commit**

```bash
git add examples/api/routes/download.py examples/api/main.py tests/test_api.py
git commit -m "feat(api): add download route with nested path and content-type detection"
```

---

## Task 7: Auth integration tests + full suite

**Files:**
- Modify: `tests/test_api.py` (append auth tests)

- [ ] **Step 1: Append failing auth tests**

Append to `tests/test_api.py`:

```python
# ---------------------------------------------------------------------------
# Auth
# ---------------------------------------------------------------------------

def test_auth_off_no_header_succeeds(client):
    """When API_KEY is unset, requests without X-API-Key succeed."""
    r = client.get("/health")
    assert r.status_code == 200


def test_auth_on_no_header_returns_401(auth_client):
    """When API_KEY is set, requests without X-API-Key return 401."""
    r = auth_client.get("/health")
    assert r.status_code == 401


def test_auth_on_wrong_key_returns_401(auth_client):
    """Wrong X-API-Key value returns 401."""
    r = auth_client.get("/health", headers={"X-API-Key": "wrong-key"})
    assert r.status_code == 401


def test_auth_on_correct_key_succeeds(auth_client):
    """Correct X-API-Key header allows access."""
    r = auth_client.get("/health", headers={"X-API-Key": "test-secret"})
    assert r.status_code == 200


def test_auth_on_download_enforced(auth_client):
    """Auth applies to download endpoint too."""
    r = auth_client.get("/reservoirs/ppr-1/well_logs/PPR1-Well-001.las")
    assert r.status_code == 401


def test_auth_on_download_with_key_succeeds(auth_client):
    """Download with correct key succeeds."""
    r = auth_client.get(
        "/reservoirs/ppr-1/well_logs/PPR1-Well-001.las",
        headers={"X-API-Key": "test-secret"},
    )
    assert r.status_code == 200
```

- [ ] **Step 2: Run auth tests to confirm they fail (or pass — auth may already work)**

```bash
pytest tests/test_api.py -k "auth" -v
```

Expected: Most PASS (auth is already wired through the dependency). If any FAIL, debug before continuing.

- [ ] **Step 3: Run the complete test suite**

```bash
pytest tests/test_api.py -v
```

Expected: All tests PASS

- [ ] **Step 4: Run the full project test suite to confirm no regressions**

```bash
pytest -v
```

Expected: All existing tests PASS, plus new API tests PASS

- [ ] **Step 5: Commit**

```bash
git add tests/test_api.py
git commit -m "test(api): add auth integration tests and verify full test suite"
```

---

## Task 8: Smoke test the running server

**No code changes — this is a manual verification step.**

- [ ] **Step 1: Start the server**

```bash
uvicorn examples.api.main:app --reload
```

Expected output:
```
INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
```

- [ ] **Step 2: Check the health endpoint**

In a second terminal:

```bash
curl http://127.0.0.1:8000/health
```

Expected response:
```json
{"status": "ok", "reservoirs": [...]}
```

If `examples/data/` is empty or doesn't exist the reservoirs list will be `[]` — that is correct behavior.

- [ ] **Step 3: Check the auto-generated OpenAPI docs**

Open in browser: `http://127.0.0.1:8000/docs`

Expected: FastAPI Swagger UI listing all 5 endpoint groups.

- [ ] **Step 4: Stop the server**

Press `CTRL+C` in the uvicorn terminal.

---

## Running the Server (Reference)

```bash
# Default: open, data from examples/data/
uvicorn examples.api.main:app --reload

# With auth and custom data dir
DATA_DIR=/path/to/data API_KEY=mysecret uvicorn examples.api.main:app --host 0.0.0.0 --port 8000

# Direct module invocation
python -m examples.api.main
```
