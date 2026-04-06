# Core Photos Skill Integration Design

## Overview

Integrate core photo generation into the synthetic data generation workflow with mandatory cost-protection questions. Core photos are expensive to generate (AI image generation API), so users must always confirm count and aspects before generation proceeds.

## Problem Statement

Currently:
1. The `synthetic-data-generation` skill does not mention core photos, even though `CorePhotoGenerator` exists
2. The `brainstorming` skill doesn't suggest core photos when asking about test data needs
3. There's no cost protection - users could inadvertently trigger expensive image generation

## Solution

Update two skill files to:
1. Add core photos as a synthetic data option
2. Implement mandatory questions before generation (count, lithology, features)
3. Warn about expense whenever core photos are mentioned

## Files to Modify

| File | Changes |
|------|---------|
| `skills/synthetic-data-generation/SKILL.md` | Add core photos to capabilities, add dedicated section with mandatory questions, add usage examples |
| `skills/brainstorming/SKILL.md` | Update data requirements to include core photos, add core photo-specific questions, update synthetic data scenarios |

## Component 1: Synthetic Data Generation Skill Updates

### File: `skills/synthetic-data-generation/SKILL.md`

### 1.1 Update Description (line 3)

Change from:
```
description: "Generate realistic synthetic oil & gas data (LAS well logs, SEG-Y seismic, time-series) with proper physical constraints for testing, demos, and training."
```

To:
```
description: "Generate realistic synthetic oil & gas data (LAS well logs, SEG-Y seismic, core photos, time-series) with proper physical constraints for testing, demos, and training."
```

### 1.2 Update Capabilities Section (after line 19)

Add to capabilities list:
```markdown
- Core photos using AI image generation (requires API key, expensive operation)
```

### 1.3 Add Core Photo Generation Section (after Seismic Generation section, around line 65)

Insert new section:

```markdown
## Core Photo Generation

**IMPORTANT: Expensive Operation**

Core photo generation uses AI image generation APIs which are costly. Before generating:
1. **Always ask for count** - Never generate without explicit number confirmation
2. **Ask about aspects** based on detail level needed

### Mandatory Questions

When user requests core photos, ask these in order:

**Question 1 - Count:**
> "How many core photos do you need? (Image generation is expensive - each photo costs API credits)"

**Question 2 - Lithology:**
> "What lithology? (A) Sandstone (B) Shale (C) Carbonate (D) Limestone (E) Dolomite (F) Mixed/varies"

**Question 3 - Visual Features (if user wants detail):**
> "Any specific visual features? (A) Default/random (B) With fractures (C) With oil staining (D) Specific bedding angles (E) Let me specify"

**Question 4 - Full Context (if user wants geological accuracy):**
> "Need full geological context? If yes, specify: depth range, formation name, field name, well naming convention"

### Usage

```python
from synthetic_data.core_photos import CorePhotoGenerator

generator = CorePhotoGenerator(api_key="YOUR_GOOGLE_AI_API_KEY")
result = generator.create_record(
    well_name="Test-Well-001",
    lithology="sandstone",
    depth_range=(1000.0, 2000.0),
    output_dir="./output"
)
```

Options:
- `well_name`: Well identifier
- `lithology`: sandstone | shale | carbonate | limestone | dolomite
- `depth_range`: (start, end) in meters
- `core_length`: Length of core sample in meters (default: 1.0)
- `field_name`: Field name for metadata
- `formation`: Formation name for metadata
- `output_dir`: Directory to save images and metadata

### Example Assets

Reference examples available at `synthetic_data/assets/`:
- `core-photos.png` - Real core sample photographs showing proper format
- `core-photos.webp` - WebP version

These show proper format: depth markers, well identification (Moga 26, Moga 6, Keyi 4), lithology variations, and scale bars.
```

### 1.4 Add Core Photo Examples to Example Usages Section (around line 95)

Add:

```markdown
User says:
```
"Generate core photos for testing"
```

→ Ask: "How many?" then "What lithology?" then generate

User says:
```
"I need 5 sandstone core photos with visible fractures"
```

→ Confirms count (5), lithology (sandstone), feature (fractures) → generate

User says:
```
"Generate synthetic data for my reservoir project"
```

→ Ask: "What type of data? (well logs, seismic, core photos, production data)"
→ If core photos selected, proceed with mandatory questions
```

## Component 2: Brainstorming Skill Updates

### File: `skills/brainstorming/SKILL.md`

### 2.1 Update Data Requirements Question (around line 84-87)

Change from:
```markdown
- **Data Requirements:**
  - "Will this need test data? If so, should I generate synthetic well logs, seismic data, or production data for testing?"
```

To:
```markdown
- **Data Requirements:**
  - "Will this need test data? If so, should I generate synthetic well logs, seismic data, core photos, or production data for testing?"
  - "Note: Core photo generation uses AI image generation and is expensive - always confirm count and aspects before generating"
```

### 2.2 Add Core Photo-Specific Questions (after Data Requirements, around line 88)

Insert:
```markdown
- **Core Photo Requirements (if selected):**
  - "How many core photos do you need? (This is an expensive operation - each image costs API credits)"
  - "What lithology should the cores represent? (sandstone, shale, carbonate, limestone, dolomite)"
  - "Do you need specific visual features? (fractures, oil staining, bedding angles)"
  - "Do you need full geological context? (depth range, formation, field name, well metadata)"
```

### 2.3 Update Common Synthetic Data Scenarios (around line 135)

Add to the list:
```markdown
- Testing core analysis workflows → Generate core photos with specific lithology and features (EXPENSIVE - confirm count first)
```

## Behavior Flow

```
User: "Generate synthetic data for my project"
    ↓
Brainstorming skill asks: "What type? (well logs, seismic, core photos, production)"
    ↓
User selects "core photos"
    ↓
Mandatory questions triggered:
  1. "How many?" (always ask - never skip)
  2. "What lithology?" (sandstone/shale/carbonate/limestone/dolomite)
  3. "Visual features?" (fractures, oil staining, bedding angles) - optional detail
  4. "Full geological context?" (depth, formation, field, well names) - optional detail
    ↓
Generate with confirmed parameters
```

## Cost Protection Rules

1. **Never generate core photos without explicit count confirmation** - This is the primary safeguard
2. **Always warn about expense** when core photos are mentioned in any context
3. **Tiered questioning** - Start with essentials (count, lithology), offer more detail if user wants it

## Existing Infrastructure

The `CorePhotoGenerator` class already exists at `synthetic_data/core_photos/photo_generator.py` with:
- Google Gemini API integration for image generation
- `CorePhotoMetadata` dataclass with full geological context
- Metadata generation (depth, coordinates, porosity, permeability, grain size, texture, color, fractures, bedding angle, oil staining)
- Lithology-specific properties for sandstone, shale, carbonate, limestone, dolomite
- `create_record()` for single photo generation
- `create_dataset()` for batch generation
- Placeholder fallback when API fails

**No code changes needed** - only skill documentation updates.

## Reference Assets

Located at `synthetic_data/assets/`:
- `core-photos.png` - Example of real core photographs
- `core-photos.webp` - WebP version

These show proper format with:
- Depth markers (e.g., 797.00 m, 803.00 m)
- Well/core identification (CORE 1, CORE 2, CORE 3)
- Field names (Moga 26, Moga 6, Keyi 4)
- Scale bars (0-50 cm)
- Various lithologies and textures

## Testing

After implementation, verify:

1. **Synthetic data skill** - Ask "generate core photos" → should trigger mandatory questions
2. **Brainstorming skill** - Ask "I need test data for my project" → should offer core photos as option with expense warning
3. **Count protection** - Try to generate without specifying count → should always ask first
4. **Tiered questions** - Basic request gets basic questions, detailed request gets more options

## Success Criteria

1. Core photos appear as an option when users ask about synthetic data generation
2. Users are always asked for count before any core photo generation
3. Expense warning is visible in skill documentation and interaction
4. Tiered questioning allows simple or detailed configuration
