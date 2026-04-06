# Core Photo Generator

Generate synthetic core sample photographs with realistic geological features and comprehensive metadata.

## Features

- **AI-Powered Image Generation**: Uses Google Gemini API to generate photorealistic core sample images
- **Comprehensive Metadata**: Each image includes detailed metadata suitable for visualization and analysis
- **Realistic Geological Properties**: Generates physically realistic properties based on lithology type
- **Multiple Lithology Support**: Sandstone, shale, carbonate, limestone, and dolomite
- **Tooltip-Ready**: Metadata includes formatted tooltip text for easy visualization integration

## Installation

```bash
# Install required dependencies
pip install -r synthetic_data/requirements.txt

# Required packages:
# - google-generativeai>=0.8.0
# - pillow>=10.0.0
# - numpy>=1.21.0
```

## Setup

### Google AI API Key

You need a Google AI API key to generate images. Get one from [Google AI Studio](https://ai.google.dev/).

```bash
# Set as environment variable
export GOOGLE_AI_API_KEY="your-api-key-here"

# Or pass directly to the generator
generator = CorePhotoGenerator(api_key="your-api-key-here")
```

## Usage

### Basic Example

```python
from synthetic_data.core_photos import CorePhotoGenerator

# Initialize generator
generator = CorePhotoGenerator(api_key="your-api-key", seed=42)

# Generate single core photo
result = generator.create_record(
    well_name="Well-001",
    depth_range=(2000.0, 3000.0),
    core_length=1.0,
    lithology="sandstone",
    field_name="West Texas Field",
    formation="Permian Basin",
    output_dir="./output"
)

# Access generated data
print(f"Image: {result['image_path']}")
print(f"Metadata: {result['metadata_path']}")
print(result['metadata'].get_tooltip_text())
```

### Generate Multiple Core Photos

```python
# Generate dataset
results = generator.create_dataset(
    n_records=10,
    well_names=["Well-001", "Well-002", ...],
    depth_range=(1500.0, 2500.0),
    core_length=0.5,
    lithology="carbonate",
    output_dir="./output"
)

# Process results
for result in results:
    metadata = result['metadata']
    print(f"{metadata.well_name}: {metadata.depth_start:.1f}m")
```

### Specify Coordinates

```python
result = generator.create_record(
    well_name="Permian-001",
    latitude=31.8457,   # West Texas
    longitude=-103.2933,
    lithology="carbonate",
    field_name="Delaware Basin",
    output_dir="./output"
)
```

## Metadata Structure

Each generated core photo includes comprehensive metadata:

### CorePhotoMetadata Fields

| Field | Type | Description |
|-------|------|-------------|
| `depth_start` | float | Starting depth of core sample (meters) |
| `depth_end` | float | Ending depth of core sample (meters) |
| `latitude` | float | Latitude coordinate |
| `longitude` | float | Longitude coordinate |
| `well_name` | str | Name of the well |
| `lithology` | str | Rock type |
| `porosity` | float | Estimated porosity (0-1) |
| `permeability` | float | Estimated permeability (mD) |
| `grain_size` | str | Grain size description |
| `texture` | str | Texture description |
| `color` | str | Dominant color description |
| `fractures` | int | Number of visible fractures |
| `bedding_angle` | float | Bedding plane angle (degrees) |
| `oil_staining` | bool | Whether oil staining is visible |
| `sample_date` | str | Date of sampling |
| `field_name` | str | Field name |
| `formation` | str | Formation name |
| `image_path` | str | Path to generated image |

### Metadata Methods

```python
# Convert to dictionary
metadata_dict = metadata.to_dict()

# Convert to JSON
json_string = metadata.to_json()

# Get tooltip text for visualization
tooltip = metadata.get_tooltip_text()
```

## Supported Lithologies

The generator supports realistic property ranges for different rock types:

### Sandstone
- **Porosity**: 15-35%
- **Permeability**: 10-1000 mD
- **Grain Sizes**: very fine, fine, medium, coarse
- **Colors**: tan, light brown, gray, white, yellow-brown

### Shale
- **Porosity**: 5-15%
- **Permeability**: 0.001-0.1 mD
- **Grain Sizes**: clay, silt
- **Colors**: dark gray, black, brown, green-gray

### Carbonate
- **Porosity**: 5-30%
- **Permeability**: 0.1-500 mD
- **Textures**: crystalline, vuggy, oolitic, fossiliferous
- **Colors**: light gray, cream, tan, white

### Limestone
- **Porosity**: 8-25%
- **Permeability**: 1-300 mD
- **Textures**: crystalline, oolitic, bioclastic
- **Colors**: light gray, cream, tan

### Dolomite
- **Porosity**: 10-28%
- **Permeability**: 5-400 mD
- **Textures**: crystalline, sucrosic, vuggy
- **Colors**: tan, brown, gray

## Output Files

For each generated core photo, two files are created:

1. **Image File** (PNG): `{well_name}_depth_{depth}m.png`
2. **Metadata File** (JSON): `{well_name}_depth_{depth}m_metadata.json`

### Example Metadata JSON

```json
{
  "depth_start": 2345.6,
  "depth_end": 2346.6,
  "latitude": 31.8457,
  "longitude": -103.2933,
  "well_name": "Well-001",
  "lithology": "sandstone",
  "porosity": 0.24,
  "permeability": 245.3,
  "grain_size": "medium",
  "texture": "well-sorted",
  "color": "tan",
  "fractures": 2,
  "bedding_angle": 15.3,
  "oil_staining": true,
  "sample_date": "2024-01-01",
  "field_name": "West Texas Field",
  "formation": "Permian Basin",
  "image_path": "./output/Well-001_depth_2345.6m.png"
}
```

## Integration with Visualization

The metadata is designed for easy integration with visualization tools:

```python
# Use tooltip text in web visualization
tooltip_html = f"""
<div class="core-tooltip">
  <pre>{metadata.get_tooltip_text()}</pre>
</div>
"""

# Or create custom tooltips
tooltip = {
    "title": f"{metadata.well_name} - {metadata.formation}",
    "depth": f"{metadata.depth_start:.1f} - {metadata.depth_end:.1f} m",
    "location": f"{metadata.latitude:.4f}, {metadata.longitude:.4f}",
    "properties": {
        "Lithology": metadata.lithology,
        "Porosity": f"{metadata.porosity:.2%}",
        "Permeability": f"{metadata.permeability:.1f} mD"
    }
}
```

## Error Handling

The generator includes fallback mechanisms:

```python
# If Gemini API fails, a placeholder image is created
# The metadata is still generated correctly
result = generator.create_record(...)

# Check if image was generated successfully
if os.path.getsize(result['image_path']) > 1000:  # Real image
    print("Image generated successfully")
else:  # Placeholder
    print("Placeholder created - check API key/quota")
```

## Examples

See `examples/core_photo_example.py` for complete working examples:

```bash
# Set API key
export GOOGLE_AI_API_KEY="your-api-key"

# Run examples
python examples/core_photo_example.py
```

## API Reference

### CorePhotoGenerator

```python
CorePhotoGenerator(api_key: Optional[str] = None, seed: int = None)
```

**Parameters:**
- `api_key`: Google AI API key (reads from `GOOGLE_AI_API_KEY` env var if not provided)
- `seed`: Random seed for reproducibility

### create_record()

```python
create_record(
    well_name: str,
    depth_range: Tuple[float, float] = (1000.0, 3000.0),
    core_length: float = 1.0,
    lithology: str = "sandstone",
    field_name: str = "Synthetic Field",
    formation: str = "Synthetic Formation",
    latitude: Optional[float] = None,
    longitude: Optional[float] = None,
    output_dir: Optional[str] = None,
) -> Dict[str, Any]
```

**Returns:**
```python
{
    "metadata": CorePhotoMetadata,
    "image_path": str,
    "metadata_path": str
}
```

### create_dataset()

```python
create_dataset(
    n_records: int,
    well_names: Optional[List[str]] = None,
    depth_range: Tuple[float, float] = (1000.0, 3000.0),
    core_length: float = 1.0,
    lithology: str = "sandstone",
    field_name: str = "Synthetic Field",
    formation: str = "Synthetic Formation",
    output_dir: Optional[str] = None,
) -> List[Dict[str, Any]]
```

**Returns:** List of result dictionaries (same format as `create_record()`)

## Best Practices

1. **Set Random Seed**: Use consistent seed for reproducible results
2. **Batch Generation**: Generate multiple samples in one session to avoid API rate limits
3. **Save Metadata**: Always keep metadata files with images for traceability
4. **Validate Coordinates**: Ensure lat/long values are within realistic ranges for your field
5. **Check API Quota**: Monitor your Google AI API usage to avoid unexpected failures

## Limitations

- Requires Google AI API key and internet connection
- Image generation may be slow for large datasets
- Generated images are synthetic and for demonstration/testing only
- API rate limits apply (check Google AI documentation)

## Future Enhancements

Potential improvements:
- Support for horizontal core photos
- Core box layouts (multiple samples)
- Custom image dimensions
- Batch processing with progress tracking
- Local image generation fallback (offline mode)
- Support for mixed lithologies in single sample
- Integration with well log data for consistency
