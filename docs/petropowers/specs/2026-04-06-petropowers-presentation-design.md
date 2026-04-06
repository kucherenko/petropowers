# PetroPowers Presentation Design

**Date:** 2026-04-06  
**Status:** Approved  
**Audience:** Project Management  
**Purpose:** Research presentation on AI approach for oil & gas industry

## Overview

A 7-slide Reveal.js presentation introducing PetroPowers as a skills framework that brings domain intelligence to world-leading AI coding agents (Claude Code, OpenCode, Codex, Gemini CLI, Cursor).

## Technical Specification

### Format
- **Technology:** Reveal.js 5.x
- **Theme:** Custom industry theme (petroleum blues, industrial accents)
- **Output:** Single HTML file with embedded CSS/JS (portable)
- **Location:** `docs/presentations/petropowers-overview.html`

### Visual Style
- **Primary color:** Deep petroleum blue (#1a365d)
- **Secondary color:** Industrial steel (#4a5568)
- **Accent color:** Energy orange (#ed8936)
- **Background:** Gradient with subtle industrial texture
- **Typography:** Clean sans-serif (system fonts for portability)

## Slide Structure

### Slide 1: Title
**AI in Oil & Gas: A Skills Framework Approach**

Content:
- Title: "AI in Oil & Gas: A Skills Framework Approach"
- Subtitle: "PetroPowers - Research & Implementation"
- Tagline: "Bringing domain intelligence to world-leading AI agents"
- Visual: Abstract pipeline/industrial background

### Slide 2: The Challenge
**Why General AI Struggles in Petroleum Engineering**

Content:
| Problem | Impact |
|---------|--------|
| No domain terminology | Misunderstands "porosity", "kick", "completion" |
| Unknown data formats | Can't read LAS, SEG-Y, WITSML |
| Missing safety culture | Ignores well control, process safety |
| Jumps to coding | Skips design, builds wrong thing |

Visual: Problem icons with red indicators

### Slide 3: The Solution
**PetroPowers: Skills Framework for AI Agents**

Content:
- Core concept: Zero-dependency plugin for AI coding agents
- Platform support table:
  - Claude Code (Anthropic)
  - OpenCode
  - Codex CLI (OpenAI)
  - Gemini CLI (Google)
  - Cursor

Visual: Hub-and-spoke diagram with PetroPowers center, agent logos around

### Slide 4: Domain Intelligence
**Oil & Gas Pipeline Coverage**

Content:
- Pipeline flow: Exploration → Drilling → Reservoir & Production → Midstream → Refining
- Capabilities per pipeline:
  - Exploration: Seismic interpretation, well log analysis, prospect evaluation
  - Drilling: Real-time monitoring, kick detection, stuck pipe analysis
  - Reservoir: Decline analysis, production forecasting, reservoir modeling
  - Midstream: Pipeline integrity, leak detection, flow assurance
  - Refining: Process optimization, crude blending, product quality

Visual: Horizontal pipeline flow diagram with stage icons

### Slide 5: Development Workflow
**Rigorous Process: Design → Plan → Build → Review**

Content (full workflow):

```
Brainstorm → Write Plan → TDD → Execute → Review
```

Each phase detail:
1. **Brainstorm**: Clarify intent, propose options, get approval
2. **Write Plan**: 2-5 minute tasks, file paths, verify steps
3. **TDD**: RED (write test) → GREEN (implement) → REFACTOR (clean up)
4. **Execute**: Subagents per task, parallel execution, fresh context
5. **Review**: Spec compliance check, code quality, evidence required

Key principle: "Evidence before assertions"

Visual: Process flow with stage gates

### Slide 6: Synthetic Data Generation
**Industry-Format Test Data with Physical Constraints**

Content:
| Data Type | Format | Physical Realism |
|-----------|--------|------------------|
| Well Logs | LAS 2.0/3.0 | Archie equation, density-porosity correlations |
| Seismic | SEG-Y | Proper geometry, trace headers |
| Production | CSV/JSON | Decline curves, water cut progression |
| Core Photos | PNG | AI-generated lithology images |
| OSDU Manifests | JSON | Platform-compliant metadata |

Use cases: Testing, demos, training, development without real data

Visual: Sample data previews (well log curves, seismic section mockup)

### Slide 7: Results & Next Steps
**Research Outcomes & Path Forward**

Content:
Achieved:
- 20+ skills covering full petroleum value chain
- Multi-agent autonomous execution (hours without deviation)
- Cross-platform compatibility (5 major AI agents)
- FastAPI service for data access

Next Steps:
- Expand domain coverage (HSE, economics)
- Real-world pilot projects
- Community contributions

Visual: Achievement icons + roadmap timeline

## Implementation Notes

### Dependencies
- Reveal.js loaded from CDN (no local install needed)
- All assets embedded or linked to CDN
- Single portable HTML file

### File Structure
```
docs/presentations/
└── petropowers-overview.html    # Main presentation file
```

### Viewing
- Open HTML file directly in browser
- Use arrow keys or spacebar to navigate
- Press 'F' for fullscreen
- Press 'S' for speaker notes (if added)

## Verification

- [ ] All 7 slides render correctly
- [ ] Navigation works (arrows, spacebar)
- [ ] Industry theme applied (blues, orange accent)
- [ ] Responsive on different screen sizes
- [ ] File is self-contained and portable
