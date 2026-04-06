# PetroPowers Rebranding Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebrand README.md from Superpowers to PetroPowers with comprehensive rewrite reflecting domain-specialized positioning.

**Architecture:** Complete README rewrite section-by-section, maintaining logical flow from title → value proposition → installation → skills overview → philosophy → community. No code changes, pure documentation.

**Tech Stack:** Markdown

---

## Task 1: Rewrite title, tagline, and add Why PetroPowers section

**Files:**
- Modify: `README.md` (lines 1-15)

- [ ] **Step 1: Replace title and introductory content**

Replace lines 1-15 in `README.md` with:

```markdown
# PetroPowers

AI skills framework for petroleum engineering workflows, built on Superpowers foundation. Specialized domain expertise for oil & gas operations.

PetroPowers combines proven software development workflows with deep oil & gas domain knowledge, enabling coding agents to understand industry terminology, work with professional data formats, and follow domain-specific best practices.

## Why PetroPowers?

PetroPowers combines proven software development workflows with deep domain expertise:

- **General engineering skills** - TDD, debugging, planning, code review (Superpowers foundation)
- **Oil & gas domain skills** - Exploration, drilling, reservoir, midstream, refining workflows
- **Intelligent delegation** - Domain tasks stay in domain skills; software tasks route to development workflows

**For petroleum engineers:** AI understands your workflows, data formats, and safety culture.

**For AI engineers:** Build robust oil & gas applications with domain-informed agents.

**For both:** Work seamlessly between domain analysis and software development.

## How it works
```

- [ ] **Step 2: Verify introduction reads correctly**

Read lines 1-25 of README.md to confirm:
- Title says "PetroPowers"
- Tagline mentions "domain expertise for oil & gas"
- Why PetroPowers section added
- Flows into "How it works"

- [ ] **Step 3: Commit changes**

```bash
git add README.md
git commit -m "docs: rebrand to PetroPowers with title and value proposition"
```

---

## Task 2: Update How it works section with domain examples

**Files:**
- Modify: `README.md` (How it works section)

- [ ] **Step 1: Add domain workflow after existing paragraph**

After the existing "How it works" paragraph (lines ~25-40), add:

```markdown
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

- [ ] **Step 2: Verify domain examples flow naturally**

Read the section to confirm domain examples follow naturally after the general workflow explanation.

- [ ] **Step 3: Commit changes**

```bash
git add README.md
git commit -m "docs: add domain workflow examples to How it works"
```

---

## Task 3: Replace sponsorship with maintainers section

**Files:**
- Modify: `README.md` (Sponsorship section, approximately lines 18-24)

- [ ] **Step 1: Replace sponsorship section entirely**

Find the "## Sponsorship" section and replace it with:

```markdown
## Maintainers

PetroPowers is maintained by [Your Name/Team].

Built on [Superpowers](https://github.com/obra/superpowers) by Jesse Vincent and Prime Radiant.

### Acknowledgments

PetroPowers extends Superpowers with petroleum engineering domain expertise. The general development workflow skills (TDD, debugging, planning, collaboration) are from the upstream Superpowers project.
```

- [ ] **Step 2: Verify maintainers section**

Read the section to confirm:
- Sponsorship removed
- Maintainers added with placeholder
- Acknowledgments mention Superpowers foundation

- [ ] **Step 3: Commit changes**

```bash
git add README.md
git commit -m "docs: replace sponsorship with maintainers and acknowledgments"
```

---

## Task 4: Update installation section for PetroPowers

**Files:**
- Modify: `README.md` (Installation section, approximately lines 27-102)

- [ ] **Step 1: Rewrite installation introduction and prerequisites**

Replace the installation section introduction with:

```markdown
## Installation

PetroPowers includes all Superpowers general skills plus oil & gas domain specialization.

### Prerequisites

- One of: Claude Code, Cursor, Codex, OpenCode, or Gemini CLI
- Understanding of petroleum engineering workflows (for domain skills)

**Note:** Installation differs by platform. Claude Code and Cursor have built-in plugin marketplaces. Codex and OpenCode require manual setup.
```

- [ ] **Step 2: Update Claude Code Marketplace sections**

Replace "Superpowers is available via..." sections with:

```markdown
### Claude Code Official Marketplace

PetroPowers is available via the [official Claude plugin marketplace](https://claude.com/plugins/petropowers)

Install the plugin from Claude marketplace:

```bash
/plugin install petropowers@claude-plugins-official
```

### Claude Code (via Plugin Marketplace)

In Claude Code, register the marketplace first:

```bash
/plugin marketplace add [your-username]/petropowers-marketplace
```

Then install the plugin from this marketplace:

```bash
/plugin install petropowers@petropowers-marketplace
```
```

- [ ] **Step 3: Update Cursor installation**

Replace Cursor section with:

```markdown
### Cursor (via Plugin Marketplace)

In Cursor Agent chat, install from marketplace:

```text
/add-plugin petropowers
```

or search for "petropowers" in the plugin marketplace.
```

- [ ] **Step 4: Update Codex installation**

Replace Codex section with:

```markdown
### Codex

Tell Codex:

```
Fetch and follow instructions from https://raw.githubusercontent.com/[your-username]/petropowers/refs/heads/main/.codex/INSTALL.md
```

**Detailed docs:** [docs/README.codex.md](docs/README.codex.md)
```

- [ ] **Step 5: Update OpenCode installation**

Replace OpenCode section with:

```markdown
### OpenCode

Tell OpenCode:

```
Fetch and follow instructions from https://raw.githubusercontent.com/[your-username]/petropowers/refs/heads/main/.opencode/INSTALL.md
```

**Detailed docs:** [docs/README.opencode.md](docs/README.opencode.md)
```

- [ ] **Step 6: Update GitHub Copilot CLI installation**

Replace Copilot CLI section with:

```markdown
### GitHub Copilot CLI

```bash
copilot plugin marketplace add [your-username]/petropowers-marketplace
copilot plugin install petropowers@petropowers-marketplace
```
```

- [ ] **Step 7: Update Gemini CLI installation**

Replace Gemini section with:

```markdown
### Gemini CLI

```bash
gemini extensions install https://github.com/[your-username]/petropowers
```

To update:

```bash
gemini extensions update petropowers
```
```

- [ ] **Step 8: Update verify installation section**

Update the verification section to reference PetroPowers:

```markdown
### Verify Installation

Start a new session in your chosen platform and ask for something that should trigger a skill (for example, "analyze this well log" or "help me plan this drilling dashboard"). The agent should automatically invoke the relevant PetroPowers skill.
```

- [ ] **Step 9: Commit installation section changes**

```bash
git add README.md
git commit -m "docs: update installation instructions for PetroPowers"
```

---

## Task 5: Add domain workflow section and restructure What's Inside

**Files:**
- Modify: `README.md` (Basic Workflow and What's Inside sections)

- [ ] **Step 1: Split Basic Workflow into subsections**

Replace the "## The Basic Workflow" section header with:

```markdown
## The Basic Workflow

### Software Development Workflow
```

Then add after the existing workflow bullets (before "What's Inside"):

```markdown

### Domain Workflow

When working with oil & gas tasks:

1. **Domain skill activation** - Agent recognizes domain keywords (seismic, well log, drilling, etc.)
2. **Domain analysis** - Skill provides expertise (interpret data, calculate reserves, optimize parameters)
3. **Delegation (if needed)** - If task requires software, routes to development workflow
4. **Return to domain** - After software complete, continue domain work

**The agent checks skills domain before any task.** Correct skill for correct job.
```

- [ ] **Step 2: Add Domain Skills subsection under What's Inside**

Find "## What's Inside" and after the header, add:

```markdown

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
```

- [ ] **Step 3: Verify What's Inside structure**

Read the section to confirm:
- Domain Skills subsection appears first
- Development Skills subsection follows
- Clear separation between domain and general skills

- [ ] **Step 4: Commit workflow and skills restructure**

```bash
git add README.md
git commit -m "docs: add domain workflow and restructure skills into domain + development"
```

---

## Task 6: Update philosophy section for hybrid approach

**Files:**
- Modify: `README.md` (Philosophy section, approximately lines 204-209)

- [ ] **Step 1: Replace philosophy with hybrid version**

Replace the entire "## Philosophy" section with:

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

- [ ] **Step 2: Verify philosophy reflects hybrid approach**

Read the section to confirm three clear subsections: Domain, Software, Mixed.

- [ ] **Step 3: Commit philosophy changes**

```bash
git add README.md
git commit -m "docs: update philosophy for hybrid domain + development approach"
```

---

## Task 7: Update contributing section for dual focus

**Files:**
- Modify: `README.md` (Contributing section)

- [ ] **Step 1: Replace entire contributing section**

Replace "## Contributing" section with:

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

- [ ] **Step 2: Verify contributing reflects dual focus**

Read to confirm both domain and development contribution paths are clear.

- [ ] **Step 3: Commit contributing changes**

```bash
git add README.md
git commit -m "docs: update contributing section for domain and development skills"
```

---

## Task 8: Update remaining footer sections

**Files:**
- Modify: `README.md` (Updating, License, Community sections)

- [ ] **Step 1: Update Updating section**

Replace "## Updating" section with:

```markdown
## Updating

Skills update automatically when you update the plugin:

```bash
/plugin update petropowers
```

Or follow platform-specific update instructions.
```

- [ ] **Step 2: Update License section with attribution**

Replace "## License" section with:

```markdown
## License

MIT License - see LICENSE file for details.

### Attribution

PetroPowers is built on Superpowers by Jesse Vincent. The original Superpowers project is available at https://github.com/obra/superpowers.

General development workflow skills (TDD, debugging, planning, collaboration) are from the upstream Superpowers project, maintained by Jesse Vincent and Prime Radiant.
```

- [ ] **Step 3: Update Community section**

Replace "## Community" section with:

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

- [ ] **Step 4: Commit footer section updates**

```bash
git add README.md
git commit -m "docs: update updating, license, and community sections for PetroPowers"
```

---

## Task 9: Add Quick Reference section before Community

**Files:**
- Modify: `README.md` (insert before Community)

- [ ] **Step 1: Add Quick Reference section**

Insert before "## Community":

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

```
"Analyze this log" → Domain skill (well-log-analysis)
"Calculate reserves" → Domain skill (reservoir-production)
"Build dashboard" → Development workflow (delegation → TDD)
"Mixed task" → Domain first, then delegation if needed
```

```

- [ ] **Step 2: Verify Quick Reference placement**

Read around the Community section to confirm Quick Reference appears right before it.

- [ ] **Step 3: Commit Quick Reference section**

```bash
git add README.md
git commit -m "docs: add quick reference section with domain/software task routing"
```

---

## Task 10: Final review and commit

- [ ] **Step 1: Read entire README to verify flow**

Read README.md from start to finish to confirm:
- Title is PetroPowers
- Why PetroPowers section flows into How it works
- Domain examples make sense
- Maintainers replaces sponsorship
- Installation updated throughout
- Basic Workflow split into Software + Domain
- What's Inside split into Domain Skills + Development Skills
- Philosophy has three clear parts
- Quick Reference before Community
- All placeholders preserved for user to fill in

- [ ] **Step 2: Check for any remaining "Superpowers" references**

```bash
grep -n "Superpowers" README.md | grep -v "built on Superpowers" | grep -v "Superpowers foundation" | grep -v "upstream Superpowers"
```

Expected: Only references that acknowledge the foundation/upstream relationship should remain.

- [ ] **Step 3: Create final summary commit if needed**

If any minor fixes were needed:

```bash
git add README.md
git commit -m "docs: final polish for PetroPowers rebranding"
```

---

## Success Verification

1. ✅ README.md title says "PetroPowers"
2. ✅ Why PetroPowers section added with value proposition for mixed audience
3. ✅ How it works includes domain workflow examples
4. ✅ Sponsorship replaced with maintainers and acknowledgments
5. ✅ Installation updated for PetroPowers distribution
6. ✅ Basic Workflow split into Software + Domain subsections
7. ✅ What's Inside split into Domain Skills + Development Skills
8. ✅ Philosophy reflects hybrid approach (Domain, Software, Mixed)
9. ✅ Contributing addresses both domain and development skills
10. ✅ Updating, License, Community updated with attribution
11. ✅ Quick Reference section added with task routing table
12. ✅ All Superpowers references are appropriate (foundation/upstream acknowledgment)
13. ✅ Placeholders preserved for user customization ([Your Name/Team], etc.)