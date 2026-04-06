# Geoscience Theme & Dark Mode Design

**Date:** 2026-04-06  
**Scope:** `examples/webapp/src/`  
**Status:** Approved

## Problem

The app currently has a plain white theme with no dark mode. The color variables exist in `app.css` but only define a single light palette. There is no theme toggle, no dark mode CSS variables, and no persistence of user preference.

## Goals

1. Apply a Geoscience Blue visual direction (deep navy dark mode, blue-tinted light mode).
2. Add a persistent light/dark toggle in the nav bar.
3. Touch the minimum number of files — rely on existing CSS custom property architecture.

## Design Decisions

### Visual Direction: Geoscience Blue

Dark mode is the default. It uses a deep navy base with cerulean blue accents, evoking seismic displays and subsurface visualization tools.

### Color Palette

Values are expressed in HSL space-separated format (matching the existing `app.css` convention used by Tailwind, e.g. `210 100% 12%`). The `--radius` token is unchanged.

#### Dark Mode (default)

| Role | Token | HSL value |
|---|---|---|
| Page background | `--background` | `216 67% 12%` |
| Page text | `--foreground` | `206 100% 97%` |
| Card / navbar bg | `--card` | `215 65% 17%` |
| Card text | `--card-foreground` | `206 100% 97%` |
| Primary accent | `--primary` | `207 82% 67%` |
| Text on primary | `--primary-foreground` | `216 67% 12%` |
| Secondary bg | `--secondary` | `215 64% 28%` |
| Text on secondary | `--secondary-foreground` | `206 100% 97%` |
| Subtle bg / hover | `--muted` | `215 64% 28%` |
| Muted text / labels | `--muted-foreground` | `207 79% 77%` |
| Destructive | `--destructive` | `0 84% 60%` |
| Text on destructive | `--destructive-foreground` | `206 100% 97%` |
| Card border | `--border` | `215 55% 35%` |
| Input background | `--input` | `215 64% 28%` |
| Ring / focus | `--ring` | `207 82% 67%` |

#### Light Mode

| Role | Token | HSL value |
|---|---|---|
| Page background | `--background` | `214 100% 97%` |
| Page text | `--foreground` | `215 51% 24%` |
| Card / navbar bg | `--card` | `0 0% 100%` |
| Card text | `--card-foreground` | `215 51% 24%` |
| Primary accent | `--primary` | `224 71% 46%` |
| Text on primary | `--primary-foreground` | `214 100% 97%` |
| Secondary bg | `--secondary` | `214 89% 93%` |
| Text on secondary | `--secondary-foreground` | `215 51% 24%` |
| Subtle bg / hover | `--muted` | `214 89% 93%` |
| Muted text / labels | `--muted-foreground` | `217 91% 60%` |
| Destructive | `--destructive` | `0 84% 60%` |
| Text on destructive | `--destructive-foreground` | `0 0% 100%` |
| Card border | `--border` | `213 97% 87%` |
| Input background | `--input` | `214 89% 93%` |
| Ring / focus | `--ring` | `224 71% 46%` |

### Theme Toggle

A pill-style toggle (☀ sun / ☽ moon) lives in the top-right of the nav bar, next to the Disconnect button. It is inline in `NavBar.svelte` — no separate component file.

### Persistence

Theme preference is stored in `localStorage` under the key `reservoir_theme`. Accepted values: `'light'` | `'dark'`. Default on first visit: `'dark'`.

### How Theming Works

The `<html>` element receives a `dark` class when dark mode is active. All CSS custom properties are defined under `:root` (light) and `:root.dark` (dark). Because all existing components already use CSS custom properties, they pick up both themes automatically with no per-component changes.

## Files Changed

| File | Change |
|---|---|
| `src/app.css` | Add `:root.dark` block with dark mode CSS custom property values; update `:root` block with light mode values |
| `src/lib/stores.ts` | Add `theme` writable store (`'light' \| 'dark'`), initialized from `localStorage`, subscribes to persist changes |
| `src/components/NavBar.svelte` | Add pill toggle switch (sun/moon) next to Disconnect button; subscribes to theme store |
| `src/App.svelte` | Subscribe to theme store; add/remove `dark` class on `document.documentElement` |

## Out of Scope

- No layout changes (no sidebar added)
- No new pages
- No backend changes
- No font changes
- No animation or transition library
- No per-component theme changes (CSS vars handle this automatically)
- No Tailwind dark mode plugin (`darkMode: 'class'` config change is not needed — we manage the class manually)

## Acceptance Criteria

1. App loads in dark (Geoscience Blue) mode by default on first visit.
2. Toggle in nav bar switches between light and dark modes.
3. Theme preference persists across page reloads via `localStorage`.
4. All existing pages and components render correctly in both modes (no hardcoded color values leak through).
5. No regressions to existing functionality or tests.
