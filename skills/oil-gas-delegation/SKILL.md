---
name: oil-gas-delegation
description: Meta-skill that detects software tasks and routes them to appropriate superpowers skills.
---

# Skill: Oil & Gas Delegation

Meta-skill that detects software tasks and routes them to appropriate superpowers skills.

## Purpose

Oil & gas domain skills handle interpretation, analysis, and optimization recommendations. When a request requires building software (web apps, dashboards, APIs, databases), this skill delegates to superpowers skills.

## Detection Logic

When a request contains any of these keywords, delegate to software development workflow:

- Web app, dashboard, visualization
- API, REST endpoint, GraphQL
- Database schema, data model, persistence
- Data pipeline, ETL, automation script
- Report generation system
- Alert notification system

### Decision Flow

```
User request received
  ↓
Does request require building software?
  ↓
  YES → Invoke oil-gas-delegation
        ↓
        Route to appropriate superpowers workflow
  ↓
  NO → Handle within domain skill
```

## Delegation Workflows

### Web Application / Dashboard

Request: "Build a drilling monitoring dashboard"

1. Invoke `superpowers:brainstorming` skill
   - Refine dashboard requirements
   - Identify data sources, users, features
   - Create design document
   
2. Get user approval on design

3. Invoke `superpowers:writing-plans` skill
   - Break into implementation tasks
   - Define file structure, tech stack
   
4. Execute via `superpowers:subagent-driven-development`
   - TDD for components
   - Integration tests
   - Code review between tasks

### Data Pipeline

Request: "Create an automated LAS file processor"

1. Invoke `superpowers:brainstorming`
2. Get design approval
3. Invoke `superpowers:writing-plans`
4. Execute via `superpowers:subagent-driven-development`

### API Development

Request: "Build a REST API for production data"

1. Invoke `superpowers:brainstorming`
2. Get design approval
3. Invoke `superpowers:writing-plans`
4. Execute via `superpowers:subagent-driven-development`

### Quick Script

Request: "Write a script to convert SEG-Y to numpy"

1. Check if truly needs TDD (one-off vs. production)
2. If production: Use TDD workflow
3. If one-off: Direct implementation with verification

## Domain-Only Tasks (No Delegation)

These tasks stay within domain skills:

- "Analyze this seismic section for faults"
- "Interpret well log data for porosity"
- "Calculate probability of success for this prospect"
- "Optimize drilling parameters"
- "Forecast production decline"
- "Assess pipeline integrity"

Domain skills provide analysis, recommendations, and domain expertise. Software skills build tools to support that work.

## Integration Points

Domain skills invoke this skill when they detect software requirements:

```markdown
## Software Tasks

If the user requests software development:

1. Acknowledge the request
2. Invoke `superpowers:oil-gas-delegation`
3. Delegation skill routes to appropriate workflow
4. Return to domain work after software is complete
```

## Example Interaction

**User:** "I need a dashboard to visualize my seismic data"

**Agent response:**
1. Recognize: "dashboard" → software task
2. Invoke: `superpowers:oil-gas-delegation`
3. Delegation skill:
   - Invokes `superpowers:brainstorming` for dashboard design
   - Design: "Seismic Visualization Dashboard"
     - Upload SEG-Y files
     - Display inline/crossline/time slices
     - Filter by amplitude range
   - User approves design
   - Invokes `superpowers:writing-plans` for implementation plan
   - Executes via TDD workflow

**User:** "What's the porosity in this well based on the logs?"

**Agent response:**
1. Recognize: Domain analysis, no software
2. Invoke: `superpowers:oil-gas-pipelines/exploration`
3. Domain skill:
   - Reads LAS file
   - Calculates porosity from density/neutron logs
   - Returns analysis result

## Usage Instructions

When implementing this skill:

1. Check user request for software keywords
2. If software: Route to brainstorming workflow
3. If domain: Stay in domain skill
4. After software complete, return to domain context

This skill is the bridge between oil & gas domain expertise and software engineering best practices.