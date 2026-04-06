# Installing PetroPowers for Codex

Enable petropowers skills in Codex via native skill discovery. Just clone and symlink.

## Prerequisites

- Git

## Installation

1. **Clone the petropowers repository:**
   ```bash
   git clone https://github.com/kucherenko/petropowers.git ~/.codex/petropowers
   ```

2. **Create the skills symlink:**
   ```bash
   mkdir -p ~/.agents/skills
   ln -s ~/.codex/petropowers/skills ~/.agents/skills/petropowers
   ```

   **Windows (PowerShell):**
   ```powershell
   New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.agents\skills"
   cmd /c mklink /J "$env:USERPROFILE\.agents\skills\petropowers" "$env:USERPROFILE\.codex\petropowers\skills"
   ```

3. **Restart Codex** (quit and relaunch the CLI) to discover the skills.

## Migrating from old bootstrap

If you installed petropowers before native skill discovery, you need to:

1. **Update the repo:**
   ```bash
   cd ~/.codex/petropowers && git pull
   ```

2. **Create the skills symlink** (step 2 above) — this is the new discovery mechanism.

3. **Remove the old bootstrap block** from `~/.codex/AGENTS.md` — any block referencing `petropowers-codex bootstrap` is no longer needed.

4. **Restart Codex.**

## Verify

```bash
ls -la ~/.agents/skills/petropowers
```

You should see a symlink (or junction on Windows) pointing to your petropowers skills directory.

## Updating

```bash
cd ~/.codex/petropowers && git pull
```

Skills update instantly through the symlink.

## Uninstalling

```bash
rm ~/.agents/skills/petropowers
```

Optionally delete the clone: `rm -rf ~/.codex/petropowers`.
