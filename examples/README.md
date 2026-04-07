# Synthetic Oil & Gas Examples

This directory contains three components:

1. **`generate_reservoir_dataset.py`** — a script that uses the petropowers `synthetic_data` framework to generate a complete synthetic oil field dataset
2. **`api/`** — a read-only FastAPI service for browsing and downloading the generated data
3. **`webapp/`** — a Svelte frontend for visualizing reservoir data (well logs, production, maps, core photos)

---

## Generating the dataset

The generation script demonstrates all major generators in the `synthetic_data` package. It produces ~50-well datasets covering well logs, seismic, production history, well paths, core photos, and OSDU manifests.

### Install generation dependencies

```bash
pip install lasio segyio numpy pandas
```

### Run

```bash
# From the repo root — generates data/ppr-1/
python examples/generate_reservoir_dataset.py

# Specify a different reservoir name
python examples/generate_reservoir_dataset.py --reservoir ppr-2

# Fix the random seed for reproducible output
python examples/generate_reservoir_dataset.py --reservoir ppr-1 --seed 42
```

Output is written to `examples/data/{reservoir}/` (gitignored).

### Core photos (optional)

Core photo generation requires a Google Gemini API key. Without it the step is skipped automatically with a warning.

```bash
GOOGLE_AI_API_KEY=your-key python examples/generate_reservoir_dataset.py
```

### Generated data layout

```
examples/data/
└── ppr-1/
    ├── well_logs/                        # 50 LAS files (PPR1-Well-001.las … PPR1-Well-050.las)
    ├── seismic/                          # 1 SEG-Y volume (ppr-1_3d_survey.segy)
    ├── production/                       # 50 CSV files (730-day production history per well)
    ├── well_paths/                       # 50 JSON files (S-curve deviated trajectories)
    ├── core_photos/
    │   ├── PPR1-Well-001/                # Up to 5 PNG photos
    │   └── PPR1-Well-002/                # Up to 5 PNG photos
    └── osdu_manifests/
        ├── well_log/                     # OSDU WellLog + Well + Wellbore manifests
        ├── seismic/                      # OSDU SeismicTraceData manifest
        └── production/                   # OSDU Facility (production) manifests
```

### Dataset specifications

| Data type | Count | Format | Key parameters |
|-----------|-------|--------|----------------|
| Well logs | 50 | LAS | 1500–3500 m depth, 0.15 m interval, curves: GR RHOB NPHI RT DT |
| Seismic | 1 | SEG-Y | 50×50 inlines/crosslines, 0–1000 ms @ 4 ms |
| Production | 50 | CSV | 2 years daily (730 samples), oil/gas/water rates + pressure + temperature |
| Well paths | 50 | JSON | S-curve deviated trajectories (MD, TVD, inclination, azimuth) |
| Core photos | ≤10 | PNG | 2 wells × up to 5 photos, 2000–2500 m, sandstone with oil staining |
| OSDU manifests | 151 | JSON | Well, Wellbore, WellLog (×50), SeismicTraceData (×1), Facility (×50) |

---

## Synthetic Data API

Read-only FastAPI service for browsing and downloading pre-generated synthetic oil & gas datasets from `examples/data/`.

### Quick start

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
| `well_paths` | JSON | Deviated well path trajectories (MD, TVD, inclination, azimuth) |
| `core_photos` | PNG/JPEG | Core sample photos (nested by well) |
| `osdu_manifests` | JSON | OSDU-format metadata manifests |

## Data directory layout

```
examples/data/
└── {reservoir}/
    ├── well_logs/
    │   └── {well}.las
    ├── production/
    │   └── {well}_production.csv
    ├── seismic/
    │   └── {reservoir}_3d_survey.segy
    ├── well_paths/
    │   └── {well}_path.json
    ├── core_photos/
    │   └── {well}/
    │       └── depth_{XXXX}.png
    └── osdu_manifests/
        ├── well_log/
        │   └── {well}.json
        ├── seismic/
        │   └── {survey}.json
        └── production/
            └── {well}.json
```

Generate sample data with:

```bash
python examples/generate_reservoir_dataset.py
# or with a fixed seed
python examples/generate_reservoir_dataset.py --seed 42
```

---

## Web Application

A Svelte-based web application for visualizing synthetic reservoir data. Provides an interactive interface for exploring well logs, production charts, reservoir maps, core photos, and OSDU manifests.

### Features

- **Reservoir List** — Browse available reservoirs
- **Reservoir Map** — Interactive well map with contour visualization
- **Well Logs** — Display LAS well log curves with depth tracking
- **Production Charts** — Time-series production data (oil, gas, water rates)
- **Core Photos** — View core sample photos by well
- **OSDU Manifests** — Browse OSDU metadata records

### Install dependencies

```bash
cd examples/webapp
npm install
```

### Development server

```bash
npm run dev
```

The app runs on `http://localhost:5173` by default. The dev server proxies API requests to `http://localhost:8000`.

### Production build

```bash
npm run build
npm run preview
```

### Run tests

```bash
npm run test          # Run once
npm run test:watch    # Watch mode
```

### Environment variables

The webapp proxies API requests through the Express server configured in `server.cjs`. To connect to a different API backend, modify the proxy target in that file.

### Technology stack

| Component | Technology |
|-----------|------------|
| Framework | Svelte 5 |
| Build | Vite |
| Styling | Tailwind CSS |
| Charts | uPlot |
| Icons | Lucide Svelte |
| Testing | Vitest + Testing Library |
