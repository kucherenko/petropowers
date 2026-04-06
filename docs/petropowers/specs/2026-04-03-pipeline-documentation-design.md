# Pipeline Documentation Design

**Date:** 2026-04-03  
**Author:** AI Agent  
**Status:** Design

## Summary

Add comprehensive pipeline documentation to Superpowers framework showing both oil & gas domain pipelines and their integration with development workflow skills. Documentation will serve mixed audience (technical and non-technical) using layered approach with Mermaid diagrams.

## Problem

Current documentation lacks clear visualization of:
1. Oil & gas domain pipeline structure and flow
2. How domain skills transition to software development workflows
3. Relationships between upstream, midstream, and downstream operations
4. Cross-cutting concerns that span multiple domain pipelines

Users cannot quickly understand the full scope of domain capabilities or how domain expertise integrates with the development workflow.

## Solution

### Documentation Structure

**Layered approach:**
- README.md: High-level overview with master diagram (serves all audiences)
- docs/oil-gas-pipelines.md: Detailed pipeline documentation for developers

### README.md Additions

**Location:** After "What's Inside" section, before "Contributing"

**New section: "Oil & Gas Domain Pipelines"**

Content:
1. Brief overview of domain skill purpose
2. Master Mermaid diagram showing all pipelines
3. Pipeline descriptions (5 bullets)
4. Integration point diagram (delegation flow)
5. Link to detailed documentation

### Detailed Documentation File

**Location:** docs/oil-gas-pipelines.md

**Sections:**

1. **Introduction**
   - Purpose of domain skills
   - How they complement development workflow skills

2. **Pipeline Architecture**
   - Complete Mermaid flowchart
   - Pipeline relationships and data flow

3. **Individual Pipeline Details**
   - Exploration Pipeline (5 phases)
   - Drilling Pipeline (3 phases)
   - Reservoir & Production Pipeline (4 phases)
   - Midstream Pipeline (4 phases)
   - Refining Pipeline (4 phases)

4. **Cross-Cutting Skills**
   - Well Log Analysis
   - SEG-Y Operations
   - SCADA Time-series

5. **Foundation & Delegation**
   - oil-gas-foundation skill (shared context)
   - oil-gas-delegation skill (domain → software transition)

6. **Workflow Integration**
   - Decision tree: When to use domain vs. software skills
   - Example scenarios showing delegation

7. **Data Flow**
   - Common data formats (LAS, SEG-Y, WITSML, etc.)
   - Format usage by pipeline

### Mermaid Diagrams

**Master Diagram (README.md):**
```
graph TD
    Exploration --> Drilling
    Drilling --> Reservoir[Reservoir & Production]
    Reservoir --> Midstream
    Midstream --> Refining
    
    Foundation[Foundation Skills]
    Foundation --> Exploration
    Foundation --> Drilling
    Foundation --> Reservoir
    Foundation --> Midstream
    Foundation --> Refining
    
    CrossCutting[Cross-Cutting Skills]
    CrossCutting -.-> Exploration
    CrossCutting -.-> Drilling
    CrossCutting -.-> Reservoir
    
    Delegation{Software Task?}
    Exploration --> Delegation
    Drilling --> Delegation
    Reservoir --> Delegation
    Midstream --> Delegation
    Refining --> Delegation
    
    Delegation -->|Yes| Brainstorming[Brainstorming]
    Delegation -->|No| Domain[Domain Analysis]
```

**Individual Pipeline Diagrams:**
- Separate detailed flowchart for each pipeline
- Shows all phases, inputs, outputs, decision points
- Includes data format references

**Integration Diagram:**
- Shows domain skill → delegation trigger → software workflow
- Clear boundary between domain expertise and software development

## File Changes

1. **README.md**
   - Add "Oil & Gas Domain Pipelines" section (insert after line 123)
   - ~40-50 lines of new content
   - No existing content removal

2. **docs/oil-gas-pipelines.md** (NEW)
   - Comprehensive pipeline documentation
   - ~400-500 lines
   - Multiple Mermaid diagrams
   - References to existing skill files

## Audience Considerations

**Non-technical readers (README.md):**
- Clear pipeline names and brief descriptions
- Visual overview without implementation details
- High-level understanding of capabilities

**Technical users (docs/oil-gas-pipelines.md):**
- Detailed phase breakdowns
- Data format specifications
- Skill invocation patterns
- Integration points with coordinates (file references)

## Out of Scope

- Modifying existing skill files
- Creating new skills
- Changing skill invocation logic
- Deep domain content (links to skill files for that)

## Success Criteria

1. New README section renders correctly with Mermaid diagrams
2. Detailed documentation file provides comprehensive pipeline view
3. Clear visual distinction between domain work and software development
4. Mixed audience can understand capabilities from README alone
5. Developers can access detailed flows via linked documentation