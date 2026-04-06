# Core Photos Skill Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use petropowers:subagent-driven-development (recommended) or petropowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add core photos to synthetic data generation workflow with mandatory cost-protection questions.

**Architecture:** Update two skill markdown files to include core photos as a data type option, with mandatory questions (count, lithology, features) before generation.

**Tech Stack:** Markdown skill files only - no code changes

**Spec:** `docs/petropowers/specs/2026-04-06-core-photos-skill-integration-design.md`

---

## File Structure

| File | Action | Purpose |
|------|--------|---------|
| `skills/synthetic-data-generation/SKILL.md` | Modify | Add core photos to capabilities, add dedicated section, add examples |
| `skills/brainstorming/SKILL.md` | Modify | Update data requirements, add core photo questions, update scenarios |

---

## Task 1: Update Synthetic Data Generation Skill Description

**Files:**
- Modify: `skills/synthetic-data-generation/SKILL.md:3`

- [ ] **Step 1: Update the description in frontmatter**

Change line 3 from:
```markdown
description: "Generate realistic synthetic oil & gas data (LAS well logs, SEG-Y seismic, time-series) with proper physical constraints for testing, demos, and training."
```

To:
```markdown
description: "Generate realistic synthetic oil & gas data (LAS well logs, SEG-Y seismic, core photos, time-series) with proper physical constraints for testing, demos, and training."
```

- [ ] **Step 2: Verify the change**

```bash
head -5 skills/synthetic-data-generation/SKILL.md
```

Expected: Line 3 shows "core photos" in the description.

- [ ] **Step 3: Commit**

```bash
git add skills/synthetic-data-generation/SKILL.md
git commit -m "feat: add core photos to synthetic-data-generation skill description"
```

---

## Task 2: Update Synthetic Data Generation Capabilities Section

**Files:**
- Modify: `skills/synthetic-data-generation/SKILL.md:14-19`

- [ ] **Step 1: Add core photos to capabilities list**

After line 19 (after "- OSDU-compliant metadata"), add:

```markdown
- Core photos using AI image generation (requires API key, expensive operation)
```

- [ ] **Step 2: Update the Purpose section**

Change line 12 from:
```markdown
Generate synthetic well logs (LAS/DLIS), seismic (SEG-Y), and time-series data with proper physical constraints for testing, demos, and training.
```

To:
```markdown
Generate synthetic well logs (LAS/DLIS), seismic (SEG-Y), core photos, and time-series data with proper physical constraints for testing, demos, and training.
```

- [ ] **Step 3: Verify the changes**

```bash
sed -n '10,22p' skills/synthetic-data-generation/SKILL.md
```

Expected: Shows "core photos" in Purpose and Capabilities sections.

- [ ] **Step 4: Commit**

```bash
git add skills/synthetic-data-generation/SKILL.md
git commit -m "feat: add core photos to synthetic-data-generation capabilities"
```

---

## Task 3: Add Core Photo Generation Section to Synthetic Data Skill

**Files:**
- Modify: `skills/synthetic-data-generation/SKILL.md` (insert after line 65, after Seismic Generation section)

- [ ] **Step 1: Insert Core Photo Generation section after Seismic Generation**

After line 65 (after the seismic code block closing), insert:

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

These show proper format: depth markers, well identification, lithology variations, and scale bars.
```

- [ ] **Step 2: Verify the section was added**

```bash
grep -n "Core Photo Generation" skills/synthetic-data-generation/SKILL.md
```

Expected: Shows line number where "Core Photo Generation" section appears.

- [ ] **Step 3: Commit**

```bash
git add skills/synthetic-data-generation/SKILL.md
git commit -m "feat: add core photo generation section with mandatory questions"
```

---

## Task 4: Add Core Photo Examples to Synthetic Data Skill

**Files:**
- Modify: `skills/synthetic-data-generation/SKILL.md` (Example Usages section, around line 87)

- [ ] **Step 1: Find the Example Usages section**

```bash
grep -n "Example Usages" skills/synthetic-data-generation/SKILL.md
```

- [ ] **Step 2: Add core photo examples after existing examples**

After the last example (after "→ Creates LAS files + OSDU-compliant JSON manifests"), add:

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

- [ ] **Step 3: Verify the examples were added**

```bash
grep -A 2 "Generate core photos" skills/synthetic-data-generation/SKILL.md
```

Expected: Shows the core photo example.

- [ ] **Step 4: Commit**

```bash
git add skills/synthetic-data-generation/SKILL.md
git commit -m "feat: add core photo usage examples to synthetic-data-generation"
```

---

## Task 5: Update Brainstorming Skill Data Requirements

**Files:**
- Modify: `skills/brainstorming/SKILL.md:84-87`

- [ ] **Step 1: Update the Data Requirements question**

Change lines 84-87 from:
```markdown
- **Data Requirements:**
  - "Will this need test data? If so, should I generate synthetic well logs, seismic data, or production data for testing?"
  - "What data formats will you work with? (LAS, SEG-Y, WITSML, PRODML, DLIS)"
  - "Do you need OSDU-compliant data structures?"
```

To:
```markdown
- **Data Requirements:**
  - "Will this need test data? If so, should I generate synthetic well logs, seismic data, core photos, or production data for testing?"
  - "Note: Core photo generation uses AI image generation and is expensive - always confirm count and aspects before generating"
  - "What data formats will you work with? (LAS, SEG-Y, WITSML, PRODML, DLIS)"
  - "Do you need OSDU-compliant data structures?"
```

- [ ] **Step 2: Verify the change**

```bash
sed -n '84,90p' skills/brainstorming/SKILL.md
```

Expected: Shows "core photos" and expense warning.

- [ ] **Step 3: Commit**

```bash
git add skills/brainstorming/SKILL.md
git commit -m "feat: add core photos to brainstorming data requirements"
```

---

## Task 6: Add Core Photo-Specific Questions to Brainstorming Skill

**Files:**
- Modify: `skills/brainstorming/SKILL.md` (after Data Requirements, around line 88)

- [ ] **Step 1: Add Core Photo Requirements subsection**

After the Data Requirements section (after line 88), insert:

```markdown

- **Core Photo Requirements (if selected):**
  - "How many core photos do you need? (This is an expensive operation - each image costs API credits)"
  - "What lithology should the cores represent? (sandstone, shale, carbonate, limestone, dolomite)"
  - "Do you need specific visual features? (fractures, oil staining, bedding angles)"
  - "Do you need full geological context? (depth range, formation, field name, well metadata)"
```

- [ ] **Step 2: Verify the section was added**

```bash
grep -n "Core Photo Requirements" skills/brainstorming/SKILL.md
```

Expected: Shows line number where section appears.

- [ ] **Step 3: Commit**

```bash
git add skills/brainstorming/SKILL.md
git commit -m "feat: add core photo questions to brainstorming skill"
```

---

## Task 7: Update Brainstorming Skill Synthetic Data Scenarios

**Files:**
- Modify: `skills/brainstorming/SKILL.md:150-155` (Common synthetic data scenarios)

- [ ] **Step 1: Find the scenarios section**

```bash
grep -n "Common synthetic data scenarios" skills/brainstorming/SKILL.md
```

- [ ] **Step 2: Add core photos scenario to the list**

After line 155 (after "- Demo/training environments → Generate diverse datasets representing different formations"), add:

```markdown
- Testing core analysis workflows → Generate core photos with specific lithology and features (EXPENSIVE - confirm count first)
```

- [ ] **Step 3: Verify the scenario was added**

```bash
grep "core analysis workflows" skills/brainstorming/SKILL.md
```

Expected: Shows the core analysis scenario line.

- [ ] **Step 4: Commit**

```bash
git add skills/brainstorming/SKILL.md
git commit -m "feat: add core photo scenario to brainstorming synthetic data list"
```

---

## Task 8: Commit Spec Document and Final Verification

**Files:**
- Commit: `docs/petropowers/specs/2026-04-06-core-photos-skill-integration-design.md`

- [ ] **Step 1: Commit the spec document**

```bash
git add docs/petropowers/specs/2026-04-06-core-photos-skill-integration-design.md
git commit -m "docs: add core photos skill integration design spec"
```

- [ ] **Step 2: Verify all files are committed**

```bash
git status
```

Expected: Clean working directory for these files.

- [ ] **Step 3: Review commit history**

```bash
git log --oneline -10
```

Expected: Shows commits for all tasks.

- [ ] **Step 4: Verify core photos mentioned in both skills**

```bash
grep -l "core photo" skills/synthetic-data-generation/SKILL.md skills/brainstorming/SKILL.md
```

Expected: Both files listed.

---

## Summary

| Task | Description |
|------|-------------|
| 1 | Update synthetic-data-generation skill description |
| 2 | Update capabilities and purpose sections |
| 3 | Add Core Photo Generation section with mandatory questions |
| 4 | Add core photo usage examples |
| 5 | Update brainstorming data requirements |
| 6 | Add core photo-specific questions to brainstorming |
| 7 | Update synthetic data scenarios in brainstorming |
| 8 | Commit spec and final verification |

**Total tasks:** 8
**Estimated time:** 20-30 minutes
