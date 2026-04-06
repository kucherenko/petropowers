# PetroPowers Future Plans

This document outlines planned features and integrations that are currently in development or scheduled for future releases.

## Marketplace Integrations

### Claude Code Official Marketplace

**Status:** Not ready yet  
**Planned availability:** TBD

PetroPowers will be available via the [official Claude plugin marketplace](https://claude.com/plugins/petropowers)

Install the plugin from Claude marketplace:

```bash
/plugin install petropowers@claude-plugins-official
```

### Claude Code (via Plugin Marketplace)

**Status:** Not ready yet  
**Planned availability:** TBD

In Claude Code, register the marketplace first:

```bash
/plugin marketplace add kucherenko/petropowers-marketplace
```

Then install the plugin from this marketplace:

```bash
/plugin install petropowers@petropowers-marketplace
```

### Cursor (via Plugin Marketplace)

**Status:** Not ready yet  
**Planned availability:** TBD

In Cursor Agent chat, install from marketplace:

```text
/add-plugin petropowers
```

or search for "petropowers" in the plugin marketplace.

## Additional Platform Support

### GitHub Copilot CLI

**Status:** Under consideration  
**Planned availability:** TBD

Potential marketplace integration:

```bash
copilot plugin marketplace add kucherenko/petropowers-marketplace
copilot plugin install petropowers@petropowers-marketplace
```

### Gemini CLI

**Status:** Under consideration  
**Planned availability:** TBD

Potential extension install:

```bash
gemini extensions install https://github.com/kucherenko/petropowers
```

To update:

```bash
gemini extensions update petropowers
```

## Feature Roadmap

- Enhanced domain skills for more petroleum engineering workflows
- Integration with industry-standard data sources (OSDU, etc.)
- Additional synthetic data generation capabilities
- Improved visualization and reporting tools
- Real-time collaboration features for petroleum engineering teams

---

**Note:** This document is subject to change as development priorities evolve. Check the main repository for the latest updates.
