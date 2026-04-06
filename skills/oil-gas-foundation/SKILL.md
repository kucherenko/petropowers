---
name: oil-gas-foundation
description: Core industry knowledge shared across all oil & gas pipeline skills. Provides terminology, role hierarchy, data formats, and safety culture foundation.
---

# Skill: Oil & Gas Foundation

Core industry knowledge shared across all oil & gas pipeline skills.

## Industry Overview

The oil & gas industry operates across three primary segments:

### Upstream (Exploration & Production)
Goal: Discover and extract hydrocarbons

Sub-pipelines:
- Exploration
- Appraisal  
- Drilling
- Production

### Midstream (Transportation & Storage)
Goal: Move and store oil/gas

Sub-pipelines:
- Pipeline transport
- LNG processing
- Storage facilities

### Downstream (Refining & Distribution)
Goal: Convert raw hydrocarbons into usable products

Sub-pipelines:
- Refining
- Petrochemicals
- Distribution & retail

## Role Hierarchy

Functional hierarchy (not organizational chart):

```
Executives
  ↓
Asset / Field Managers
  ↓
Domain Leads (Geology, Drilling, Production, Facilities)
  ↓
Engineers & Scientists
  ↓
Operators / Technicians
  ↓
Data & Digital (cross-cutting)
```

## End-to-End Data Flow

```
Raw Data Acquisition
  ↓
Data Ingestion (WITSML, LAS, SCADA, etc.)
  ↓
Data Processing & QC
  ↓
Domain Interpretation (Geology, Drilling, etc.)
  ↓
Modeling & Simulation
  ↓
Decision Making
  ↓
Execution (Drill / Produce / Transport)
  ↓
Feedback Loop (real-time data)
```

## Common Data Formats

| Format | Purpose | File Extension |
|--------|---------|----------------|
| LAS | Well log data | .las |
| SEG-Y | Seismic data | .sgy, .segy |
| WITSML | Drilling/completion data | XML |
| PRODML | Production data | XML |
| RESQML | Reservoir models | XML/EPC |
| DLIS | Well log data (binary) | .dlis |

## Data Types

- **Structured**: Tables (production logs, drilling parameters)
- **Semi-structured**: LAS, WITSML, PRODML
- **Unstructured**: Reports, PDFs, images, core photos
- **Spatial**: Seismic volumes, maps, geological models
- **Time-series**: Sensors, SCADA, real-time drilling data

## Safety Culture

Oil & gas operations prioritize safety above all else:

- HSE (Health, Safety, Environment) is non-negotiable
- "Stop work authority" - anyone can halt unsafe operations
- Risk assessments (JSA, HAZOP, HAZID) before operations
- Regulatory compliance: EPA, OSHA, BSEE (US), NPD (Norway), etc.

### Key Safety Concepts

- **Well control**: Preventing uncontrolled hydrocarbon release
- **Process safety**: Managing hazardous materials and pressures
- **Asset integrity**: Ensuring equipment fitness-for-service
- **Environmental protection**: Spill prevention, emissions control

## How To Use This Skill

This skill is referenced by all pipeline skills. It provides:

1. Shared terminology and context
2. Data format reference
3. Safety culture foundation
4. Role hierarchy understanding

Pipeline skills build on this foundation with domain-specific workflows.