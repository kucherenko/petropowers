# Quick Start: Core Photo Generation

## Installation

```bash
# Install dependencies
pip install google-generativeai pillow

# Or install all synthetic_data requirements
pip install -r synthetic_data/requirements.txt
```

## Setup API Key

```bash
# Get API key from https://ai.google.dev/
export GOOGLE_AI_API_KEY="your-api-key-here"
```

## Basic Usage

```python
from synthetic_data.core_photos import CorePhotoGenerator

# Initialize
generator = CorePhotoGenerator(seed=42)

# Generate one core photo
result = generator.create_record(
    well_name="Well-001",
    lithology="sandstone",
    output_dir="./output"
)

# Access results
print(f"Image: {result['image_path']}")
print(f"Metadata: {result['metadata_path']}")
print(result['metadata'].get_tooltip_text())
```

## Generate Multiple Photos

```python
# Generate 10 core photos
results = generator.create_dataset(
    n_records=10,
    lithology="carbonate",
    output_dir="./output"
)

for result in results:
    print(f"{result['metadata'].well_name}: {result['image_path']}")
```

## Specify Location

```python
result = generator.create_record(
    well_name="Permian-001",
    latitude=31.8457,      # West Texas
    longitude=-103.2933,
    depth_range=(2000, 3000),
    lithology="carbonate",
    field_name="Delaware Basin",
    formation="Wolfcamp",
    output_dir="./output"
)
```

## Supported Lithologies

- `sandstone` - High porosity/permeability
- `shale` - Low porosity/permeability  
- `carbonate` - Variable properties
- `limestone` - Medium properties
- `dolomite` - Good reservoir properties

## Output Files

Each core photo generates:
- `{well_name}_depth_{depth}m.png` - Image file
- `{well_name}_depth_{depth}m_metadata.json` - Metadata

## Visualization Integration

```python
# Get formatted tooltip
tooltip = result['metadata'].get_tooltip_text()

# Or access individual properties
metadata = result['metadata']
print(f"Depth: {metadata.depth_start} - {metadata.depth_end} m")
print(f"Location: {metadata.latitude}, {metadata.longitude}")
print(f"Porosity: {metadata.porosity:.2%}")
print(f"Permeability: {metadata.permeability} mD")
```

## Run Example

```bash
export GOOGLE_AI_API_KEY="your-key"
python examples/core_photo_example.py
```

## Documentation

- Full documentation: `synthetic_data/core_photos/README.md`
- Implementation details: `CORE_PHOTOS_IMPLEMENTATION.md`
- Tests: `tests/test_core_photos.py`
