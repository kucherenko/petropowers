# Synthetic Data API

Read-only FastAPI service for browsing and downloading pre-generated synthetic oil & gas datasets from `examples/data/`.

## Quick start

Install dependencies (once):

```bash
cd examples
pip install -r api/requirements.txt
```

Start the server from the `examples/` directory:

```bash
cd examples
uvicorn api.main:app --reload
```

The server listens on `http://127.0.0.1:8000` by default.  
Interactive docs: `http://127.0.0.1:8000/docs`

## Environment variables

| Variable | Default | Description |
|----------|---------|-------------|
| `DATA_DIR` | `examples/data` | Absolute path to the synthetic data root directory |
| `API_KEY` | _(unset)_ | When set, every request must include `X-API-Key: <value>`. When unset, the API is open. |
| `HOST` | `127.0.0.1` | Bind address |
| `PORT` | `8000` | Bind port |

Example with all variables:

```bash
DATA_DIR=/data/synthetic API_KEY=secret HOST=0.0.0.0 PORT=9000 \
  uvicorn api.main:app
```

## Authentication

When `API_KEY` is set, include the header on every request:

```
X-API-Key: <your-key>
```

Requests without the header, or with a wrong value, return `401 Unauthorized`.

## Endpoints

### System

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/health` | Liveness check — returns status and list of known reservoirs |

```bash
curl http://localhost:8000/health
# {"status":"ok","reservoirs":["ppr-1","ppr-2"]}
```

### Catalogue

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/reservoirs` | List all reservoir names |
| `GET` | `/reservoirs/{reservoir}` | File-count summary per data type for one reservoir |
| `GET` | `/reservoirs/{reservoir}/{data_type}` | List all files under a data type (nested paths included) |

```bash
# List reservoirs
curl http://localhost:8000/reservoirs

# Summary for ppr-1
curl http://localhost:8000/reservoirs/ppr-1

# Files for well_logs data type
curl http://localhost:8000/reservoirs/ppr-1/well_logs

# Files for nested type (returns relative paths like "PPR1-Well-001/photo_001.png")
curl http://localhost:8000/reservoirs/ppr-1/core_photos
```

### Files — download as attachment

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/reservoirs/{reservoir}/{data_type}/{file_path}` | Download any file; response includes `Content-Disposition: attachment` |

`file_path` supports subdirectory components for nested data types:

```bash
# Flat file
curl -O http://localhost:8000/reservoirs/ppr-1/well_logs/PPR1-Well-001.las

# Nested file (core photo)
curl -O http://localhost:8000/reservoirs/ppr-1/core_photos/PPR1-Well-001/photo_001.png

# With auth
curl -H "X-API-Key: secret" -O \
  http://localhost:8000/reservoirs/ppr-1/well_logs/PPR1-Well-001.las
```

### Images — inline display

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/images/{reservoir}/{data_type}/{file_path}` | Serve a PNG or JPEG inline — no attachment header, suitable for `<img>` tags |

Only `.png`, `.jpg`, and `.jpeg` files are accepted. Non-image files return `415 Unsupported Media Type`.

```bash
# Returns image/png with no Content-Disposition header
curl http://localhost:8000/images/ppr-1/core_photos/PPR1-Well-001/photo_001.png

# HTML usage
# <img src="http://localhost:8000/images/ppr-1/core_photos/PPR1-Well-001/photo_001.png">
```

## Data types

| Type | Format | Description |
|------|--------|-------------|
| `well_logs` | LAS | Well log curves |
| `production` | CSV | Time-series production data |
| `seismic` | SEG-Y | 3-D seismic volumes |
| `core_photos` | PNG/JPEG | Core sample photos (nested by well) |
| `osdu_manifests` | JSON | OSDU-format metadata manifests |
| `trajectories` | CSV | Well path trajectories |

## Data directory layout

```
examples/data/
└── {reservoir}/
    ├── well_logs/
    │   └── {well}.las
    ├── production/
    │   └── {well}.csv
    ├── seismic/
    │   └── {survey}.segy
    ├── core_photos/
    │   └── {well}/
    │       └── photo_{n}.png
    ├── osdu_manifests/
    │   └── {type}/
    │       └── {well}.json
    └── trajectories/
        └── {well}.csv
```

Generate sample data with:

```bash
cd examples
python -m data.generate   # or follow the generation scripts in examples/data/
```
