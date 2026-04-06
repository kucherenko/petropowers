# Synthetic Data API Service — Design Spec

**Date:** 2026-04-06  
**Status:** Approved

---

## Problem

The petropowers synthetic data generators produce LAS well logs, SEG-Y seismic volumes, SCADA production time-series, well path trajectories, core photos, and OSDU manifests. These files are written to disk by `examples/generate_reservoir_dataset.py`. Currently there is no programmatic way for external consumers to discover or download this data without direct filesystem access.

## Goal

Build a REST API service that lets consumers browse the pre-generated dataset catalogue and download any file. The service is a read-only file-server — it does not generate data on demand.

---

## Architecture

A single FastAPI application at `examples/api/`. It has no database; the file system under `examples/data/` (configurable via `DATA_DIR` env var) is the data store.

**Auth:** Optional. If the `API_KEY` environment variable is set, every request must include a matching `X-API-Key` header. If `API_KEY` is unset, the service is open with no authentication required.

**Runtime:** Plain Python / uvicorn. No Docker required.

```
uvicorn examples.api.main:app --reload
```

or with options:

```
DATA_DIR=/path/to/data API_KEY=secret uvicorn examples.api.main:app --host 0.0.0.0 --port 8000
```

---

## API Endpoints

| Method | Path | Response |
|--------|------|----------|
| `GET` | `/health` | `{"status": "ok", "reservoirs": [...]}` |
| `GET` | `/reservoirs` | `["ppr-1", "ppr-2", ...]` |
| `GET` | `/reservoirs/{reservoir}` | `{"well_logs": 50, "seismic": 1, "production": 50, ...}` |
| `GET` | `/reservoirs/{reservoir}/{data_type}` | `["PPR1-Well-001.las", "PPR1-Well-002.las", ...]` |
| `GET` | `/reservoirs/{reservoir}/{data_type}/{file_path:path}` | File stream (download) |

**Note on nested data types:** Some data types store files in subdirectories (e.g., `core_photos/PPR1-Well-001/photo.png`, `osdu_manifests/well_log/manifest.json`). The listing endpoint returns all files recursively as relative paths (e.g., `PPR1-Well-001/photo.png`). The download endpoint uses `{file_path:path}` to capture these multi-segment paths. Path traversal validation applies to the full relative path.

### Content-Type on Download

Auto-detected from file extension:

| Extension | Content-Type |
|-----------|-------------|
| `.las` | `text/plain` |
| `.segy`, `.sgy` | `application/octet-stream` |
| `.json` | `application/json` |
| `.csv` | `text/csv` |
| `.png` | `image/png` |
| `.jpg`, `.jpeg` | `image/jpeg` |
| other | `application/octet-stream` |

---

## File Structure

```
examples/
  api/
    __init__.py
    main.py          # FastAPI app factory, mounts routers, configures middleware
    config.py        # settings from env: DATA_DIR, API_KEY, HOST, PORT
    auth.py          # optional API-key FastAPI dependency
    routes/
      __init__.py
      catalogue.py   # /health, /reservoirs, /reservoirs/{r}, /reservoirs/{r}/{type}
      download.py    # /reservoirs/{r}/{type}/{file_path:path}  → FileResponse
    utils.py         # safe path resolution (resolve-and-check against root), content-type detection
  data/              # existing generated data (unchanged)
  generate_reservoir_dataset.py  # existing script (unchanged)
```

---

## Error Handling

| Condition | HTTP Status |
|-----------|------------|
| Reservoir not found | `404 Not Found` |
| Data type not found | `404 Not Found` |
| File not found | `404 Not Found` |
| `API_KEY` set, header missing or wrong | `401 Unauthorized` |
| Path traversal attempt in `filename` | `400 Bad Request` |

---

## Security

- Filenames in the download endpoint are validated: the resolved path must be inside the `{reservoir}/{data_type}` directory. Any path that escapes this boundary returns `400`. This applies to nested paths captured by `{file_path:path}` as well.
- The service is read-only; no endpoint writes to disk.

---

## Testing

Location: `tests/test_api.py`

Uses FastAPI's `TestClient` (no live server required). Tests are run with `pytest` alongside the existing test suite.

Test cases:
1. `GET /health` returns `200` with reservoir list
2. `GET /reservoirs` lists directories under `DATA_DIR`
3. `GET /reservoirs/{reservoir}` returns data-type summary
4. `GET /reservoirs/{reservoir}/{data_type}` lists files
5. Download a known file — status `200`, correct content-type
6. `404` for unknown reservoir, data type, and file
7. Auth off (no `API_KEY`) — requests succeed without header
8. Auth on (`API_KEY` set) — requests without header return `401`
9. Auth on — requests with correct header succeed
10. Path traversal in filename — returns `400`

Test fixtures use `tmp_path` to create a minimal synthetic directory tree (a few small text files), so tests have no dependency on the real `examples/data/` folder.

---

## Dependencies

```
fastapi
uvicorn[standard]
```

Both are added to `examples/api/requirements.txt` (separate from the main project so they don't affect petropowers core).

---

## Out of Scope

- On-demand data generation via API (generation stays in `generate_reservoir_dataset.py`)
- Core photo generation endpoint (requires Google AI API key; not part of browsing pre-generated data)
- Pagination (file counts per reservoir are small enough to return in a single response)
- Write / upload endpoints
- Docker / containerisation
