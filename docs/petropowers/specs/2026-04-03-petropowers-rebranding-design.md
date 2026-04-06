# PetroPowers Rebranding and README Rewrite

**Date:** 2026-04-03
**Status:** Design

## Summary

Rebrand the project from Superpowers to PetroPowers, positioning it as a specialized AI skills framework for petroleum engineering workflows built on the Superpowers foundation. Rewrite README.md to reflect the domain-specific focus while acknowledging the upstream relationship.

## Problem

Current README positions the project as general-purpose Superpowers. The project is actually PetroPowers - a domain-specialized framework for oil & gas operations. The README needs to:

1. Clearly communicate the petroleum engineering focus
2. Acknowledge the relationship with upstream Superpowers
3. Serve a mixed audience (AI engineers + domain specialists)
4. Highlight domain skills alongside general development skills
5. Update ownership, licensing, and community information

## Solution

### Positioning

PetroPowers = Superpowers general skills + petroleum engineering domain skills

The relationship:
- PetroPowers is a standalone project
- Built on Superpowers foundation (upstream)
- Adds specialized oil & gas domain skills
- Maintains all general development workflow skills

### Target Audience

**Mixed audience:**
- AI engineers using coding agents for petroleum engineering workflows
- Petroleum engineers who want AI assistance with domain tasks
- Both technical (development) and domain expertise

## Design

### Section 1: Title & Tagline

**Current:** "Superpowers is a complete software development workflow for your coding agents..."

**New:** 
```markdown
# PetroPowers

AI skills framework for petroleum engineering workflows, built on Superpowers foundation. Specialized domain expertise for oil & gas operations.

PetroPowers combines proven software development workflows with deep oil & gas domain knowledge, enabling coding agents to understand industry terminology, work with professional data formats, and follow domain-specific best practices.
```

### Section 2: Why PetroPowers (New Section)

Insert after tagline, before "How it works":

```markdown
## Why PetroPowers?

PetroPowers combines proven software development workflows with deep domain expertise:

- **General engineering skills** - TDD, debugging, planning, code review (Superpowers foundation)
- **Oil & gas domain skills** - Exploration, drilling, reservoir, midstream, refining workflows
- **Intelligent delegation** - Domain tasks stay in domain skills; software tasks route to development workflows

**For petroleum engineers:** AI understands your workflows, data formats, and safety culture.

**For AI engineers:** Build robust oil & gas applications with domain-informed agents.

**For both:** Work seamlessly between domain analysis and software development.
```

### Section 3: How it Works

Keep existing "How it works" section. Add domain-specific example:

```markdown
## How it works

[Keep existing paragraph about brainstorming → design → planning → execution]

**For domain work, it works differently:**

When you ask "Calculate porosity from this density log," PetroPowers:
1. Routes to domain skill (well-log-analysis)
2. Loads LAS file, applies petrophysical equations
3. Returns domain results (porosity, saturation, lithology)

When you ask "Build a drilling monitoring dashboard," PetroPowers:
1. Detects software development task
2. Delegates to development workflow (brainstorming → TDD)
3. Builds deployment-ready web application
4. Returns to domain context when complete
```

### Section 4: Sponsorship → Maintainers

Replace sponsorship section with:

```markdown
## Maintainers

PetroPowers is maintained by [Your Name/Team].

Built on [Superpowers](https://github.com/obra/superpowers) by Jesse Vincent and Prime Radiant.

### Acknowledgments

PetroPowers extends Superpowers with petroleum engineering domain expertise. The general development workflow skills (TDD, debugging, planning, collaboration) are from the upstream Superpowers project.
```

### Section 5: Installation

Update for PetroPowers distribution. Structure:

```markdown
## Installation

PetroPowers includes all Superpowers general skills plus oil & gas domain specialization.

### Prerequisites

- One of: Claude Code, Cursor, Codex, OpenCode, or Gemini CLI
- Understanding of petroleum engineering workflows (for domain skills)

### Platform-Specific Installation

[Update each platform instruction to reference PetroPowers repository/marketplace]

**Note:** Installation differs by platform. Claude Code and Cursor have built-in plugin marketplaces. Codex and OpenCode require manual setup.
```

Subsections for each platform (Claude Code, Cursor, Codex, OpenCode, Gemini CLI) - update references from "superpowers" to "petropowers".

### Section 6: Basic Workflow

Keep existing workflow, add domain workflow:

```markdown
## The Basic Workflow

### Software Development Workflow

1. **brainstorming** - Activates before writing code. Refines ideas through questions...
[Keep existing bullets]

### Domain Workflow

When working with oil & gas tasks:

1. **Domain skill activation** - Agent recognizes domain keywords (seismic, well log, drilling, etc.)
2. **Domain analysis** - Skill provides expertise (interpret data, calculate reserves, optimize parameters)
3. **Delegation (if needed)** - If task requires software, routes to development workflow
4. **Return to domain** - After software complete, continue domain work

**The agent checks skills domain before any task.** Correct skill for correct job.
```

### Section 7: What's Inside → Restructure

Split into two subsections:

```markdown
## What's Inside

### Domain Skills (Petroleum Engineering)

Specialized workflows for petroleum engineering operations:

**Exploration Pipeline**
- Seismic interpretation, well log analysis, prospect evaluation
- Skills: `exploration`, `segy-operations`, `well-log-analysis`
- File: `skills/oil-gas-pipelines/exploration/SKILL.md`

**Drilling Pipeline**
- Well planning, real-time monitoring, kick detection
- Skills: `drilling`, `scada-timeseries`
- File: `skills/oil-gas-pipelines/drilling/SKILL.md`

**Reservoir & Production Pipeline**
- Reservoir modeling, production forecasting, well optimization
- Skills: `reservoir-production`
- File: `skills/oil-gas-pipelines/reservoir-production/SKILL.md`

**Midstream Pipeline**
- Pipeline transportation, leak detection, integrity management
- Skills: `midstream`
- File: `skills/oil-gas-pipelines/midstream/SKILL.md`

**Refining Pipeline**
- Process operations, crude blending, product quality
- Skills: `refining`
- File: `skills/oil-gas-pipelines/refining/SKILL.md`

**Foundation & Delegation**
- `oil-gas-foundation` - Industry context, terminology, data formats, safety culture
- `oil-gas-delegation` - Routes software tasks to development workflows
- Files: `skills/oil-gas-foundation/SKILL.md`, `skills/oil-gas-delegation/SKILL.md`

See [docs/oil-gas-pipelines.md](docs/oil-gas-pipelines.md) for detailed pipeline documentation.

### Development Skills (Superpowers Foundation)

Workflows for software engineering best practices:

**Testing**
- **test-driven-development** - RED-GREEN-REFACTOR cycle (includes testing anti-patterns reference)

**Debugging**
- **systematic-debugging** - 4-phase root cause process (includes root-cause-tracing, defense-in-depth, condition-based-waiting techniques)
- **verification-before-completion** - Ensure it's actually fixed

**Collaboration** 
- **brainstorming** - Socratic design refinement
- **writing-plans** - Detailed implementation plans
- **executing-plans** - Batch execution with checkpoints
- **dispatching-parallel-agents** - Concurrent subagent workflows
- **requesting-code-review** - Pre-review checklist
- **receiving-code-review** - Responding to feedback
- **using-git-worktrees** - Parallel development branches
- **finishing-a-development-branch** - Merge/PR decision workflow
- **subagent-driven-development** - Fast iteration with two-stage review (spec compliance, then code quality)

**Meta**
- **writing-skills** - Create new skills following best practices (includes testing methodology)
- **using-superpowers** - Introduction to the skills system
```

### Section 8: Philosophy

Adapt for hybrid approach:

```markdown
## Philosophy

### For Domain Work
- **Domain expertise first** - Geological interpretation uses domain skills, not general tools
- **Industry data formats** - LAS, SEG-Y, WITSML, PRODML handled correctly
- **Safety culture** - Well control, process safety, environmental protection baked in
- **Professional workflows** - Exploration → Drilling → Production → Transport → Refining

### For Software Work
- **Test-Driven Development** - Write tests first, always
- **Systematic over ad-hoc** - Process over guessing
- **Complexity reduction** - Simplicity as primary goal
- **Evidence over claims** - Verify before declaring success

### For Mixed Work
- **Intelligent delegation** - Domain skills analyze, development skills build
- **Clear boundaries** - Know when to use which skill
- **Seamless handoffs** - Pass data correctly between workflows
```

### Section 9: Contributing

Update for dual focus:

```markdown
## Contributing

PetroPowers welcomes contributions in both domain skills and development skills.

### Domain Skills Contributions

Domain skills (oil & gas workflows) require domain knowledge:

1. Fork the repository
2. Create a branch for your skill
3. Follow the `writing-skills` skill for creating and testing new skills
4. Include domain context:
   - Industry terminology
   - Safety considerations
   - Data formats
   - Workflow stages
5. Test with domain experts
6. Submit a PR

See `skills/writing-skills/SKILL.md` for the complete guide.

### Development Skills Contributions

Development skills (TDD, debugging, planning) follow upstream Superpowers contribution guidelines.

### Oil & Gas Domain Pipelines

See [Contributing to Oil & Gas Skills](docs/oil-gas-pipelines.md#contributing) for domain-specific guidelines.
```

### Section 10: Updating

Update for PetroPowers:

```markdown
## Updating

Skills update automatically when you update the plugin:

```bash
/plugin update petropowers
```

Or follow platform-specific update instructions.
```

### Section 11: License

Add attribution:

```markdown
## License

MIT License - see LICENSE file for details.

### Attribution

PetroPowers is built on Superpowers by Jesse Vincent. The original Superpowers project is available at https://github.com/obra/superpowers.

General development workflow skills (TDD, debugging, planning, collaboration) are from the upstream Superpowers project, maintained by Jesse Vincent and Prime Radiant.
```

### Section 12: Community

Update for PetroPowers community:

```markdown
## Community

PetroPowers is maintained by [Your Team/Name].

- **Issues**: [Your repository issues URL]
- **Discussions**: [Your discussion platform, if any]
- **Petroleum Engineering AI**: [Community/discord/slack, if applicable]

### Upstream Community (Superpowers)

For general development workflow skills:

- **Discord**: [Join us](https://discord.gg/Jd8Vphy9jq) for community support, questions about general skills
- **Issues**: https://github.com/obra/superpowers/issues
- **Release announcements**: [Sign up](https://primeradiant.com/superpowers/) to get notified about new versions
```

### Section 13: Quick Reference (New)

Add reference table:

```markdown
## Quick Reference

### Domain Tasks → Skills

| Task | Pipeline | Skills |
|------|----------|--------|
| Seismic interpretation | Exploration | `exploration`, `segy-operations` |
| Well log analysis | Exploration | `well-log-analysis` |
| Well planning | Drilling | `drilling` |
| Real-time monitoring | Drilling, Production | `scada-timeseries` |
| Production forecasting | Reservoir | `reservoir-production` |
| Pipeline monitoring | Midstream | `midstream` |
| Refinery optimization | Refining | `refining` |

### Software Tasks → Workflow

| Task | Route to |
|------|----------|
| Build dashboard | `brainstorming` → `TDD` |
| Create API | `brainstorming` → `planning` → `TDD` |
| Write automation script | `planning` → `TDD` |
| Debug issue | `systematic-debugging` → `verification` |

### When to Use Which

```markdown
"Analyze this log" → Domain skill (well-log-analysis)
"Calculate reserves" → Domain skill (reservoir-production)
"Build dashboard" → Development workflow (delegation → TDD)
"Mixed task" → Domain first, then delegation if needed
```
```

## File Changes

1. **README.md** (complete rewrite)
   - Update title and tagline
   - Add "Why PetroPowers" section
   - Update "How it works" with domain examples
   - Replace sponsorship with maintainers
   - Update installation instructions
   - Add domain workflow section
   - Restructure "What's Inside" into domain + development subsections
   - Update philosophy for hybrid approach
   - Update contributing section
   - Add attribution in license
   - Update community section
   - Add quick reference section

## Out of Scope

- Changing skill files (they remain as-is)
- Modifying docs/oil-gas-pipelines.md (already correct)
- Changing repository structure
- Updating AGENTS.md or other config files
- Updating individual skill documentation

## Success Criteria

1. ✅ README clearly positions PetroPowers as domain-specialized framework
2. ✅ Upstream Superpowers relationship acknowledged with attribution
3. ✅ Serves mixed audience (AI engineers + domain specialists)
4. ✅ Domain skills and general skills clearly separated in "What's Inside"
5. ✅ Ownership, license, and community info updated
6. ✅ Quick reference table helps users find correct skill
7. ✅ Installation instructions updated for PetroPowers distribution
8. ✅ Philosophy reflects hybrid domain + development approach