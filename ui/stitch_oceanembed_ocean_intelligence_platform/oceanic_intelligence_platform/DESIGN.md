---
name: Oceanic Intelligence Platform
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#3d494c'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#6d797d'
  outline-variant: '#bcc9cd'
  surface-tint: '#00687a'
  primary: '#00687a'
  on-primary: '#ffffff'
  primary-container: '#06b6d4'
  on-primary-container: '#00424f'
  inverse-primary: '#4cd7f6'
  secondary: '#4d5f7d'
  on-secondary: '#ffffff'
  secondary-container: '#c8dbfe'
  on-secondary-container: '#4e607e'
  tertiary: '#0053db'
  on-tertiary: '#ffffff'
  tertiary-container: '#85a3ff'
  on-tertiary-container: '#003490'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#acedff'
  primary-fixed-dim: '#4cd7f6'
  on-primary-fixed: '#001f26'
  on-primary-fixed-variant: '#004e5c'
  secondary-fixed: '#d5e3ff'
  secondary-fixed-dim: '#b5c7ea'
  on-secondary-fixed: '#061c36'
  on-secondary-fixed-variant: '#354764'
  tertiary-fixed: '#dbe1ff'
  tertiary-fixed-dim: '#b4c5ff'
  on-tertiary-fixed: '#00174b'
  on-tertiary-fixed-variant: '#003ea8'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-sm:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  metric-readout-lg:
    fontFamily: JetBrains Mono
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  metric-readout-md:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 24px
    letterSpacing: -0.01em
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-desktop: 1.5rem
  space-2xs: 0.125rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
  space-2xl: 2rem
---

## Brand & Style
The design system articulates an authoritative, precision-engineered scientific telemetry command center. It bridges rigorous oceanographic research with autonomous AI-driven subsurface analysis. The target audience comprises marine researchers, physical oceanographers, climate modelers, and institutional monitoring agencies (such as INCOIS, NOAA, and Copernicus Marine).

The aesthetic marries **High-Density Scientific Modernism** with an **Instrumental Glass Command Canvas**. Visual tension is deliberately maintained between a deep, abyssal telemetry frame (dark oceanic shell) and an ultra-crisp, high-legibility analytical core (light slate workspace). This bi-zonal structure reduces cognitive fatigue during prolonged analysis while delivering high-contrast, mission-critical spatial and temporal data visualization. The interface should feel uncompromisingly reliable, analytical, computationally advanced, and responsive.

## Colors
The color architecture employs a hybrid split-shell model: deep oceanic navy framing around a high-clarity slate analytical workspace.

### Core Foundation
- **Abyssal Shell (Dark Canvas)**: `#071224` (Global root viewport), `#0A192F` (Primary sidebar & command panels), `#0F233E` (Layer control floating panels & map heads).
- **Workspace Surfaces (Light Canvas)**: `#F8FAFC` (Main dashboard ground), `#FFFFFF` (Surface cards & analytic panes), `#F1F5F9` (Sub-container wells & table headers).
- **Borders & Rules**: Light mode borders use `#E2E8F0` and `#CBD5E1`. Dark mode control borders use `rgba(255, 255, 255, 0.12)` and `rgba(6, 182, 212, 0.25)`.

### Accent & Telemetry Radiance
- **Bioluminescent Cyan (Primary)**: `#00F0FF` (Display readout accents, active trajectory traces), `#06B6D4` (Actionable primary controls, focused telemetry points).
- **Scientific Azure (Secondary)**: `#2563EB` (Primary brand moments, confidence intervals), `#3B82F6` (Vector paths, secondary highlights).
- **Deep Sea Teal**: `#0D9488` / `#14B8A6` (Bathymetric contours, subsurface acoustic floats).

### Scientific Validation & Oceanographic Alerts
- **Reliable / Nominal**: `#10B981` (Sensor active, high drift confidence).
- **Warning / Divergent**: `#F59E0B` (Drift anomaly, model deviation).
- **Flagged / Sensor Fault**: `#EF4444` (Telemetry loss, sensor stall).
- **Marine Heatwave**: `#F43F5E` (Sea surface temperature anomaly indicator).

### Depth Gradient Mapping (0m to 1000m+)
- **Epipelagic (0m - 200m)**: `#00F0FF` -> `#06B6D4`
- **Mesopelagic (200m - 1000m)**: `#3B82F6` -> `#1D4ED8`
- **Bathypelagic (>1000m)**: `#0F172A` -> `#020617`

## Typography
The typographic hierarchy is structured for extreme data clarity across complex analytical matrices:

1. **Plus Jakarta Sans** governs platform headlines and modal titles, delivering an open, contemporary geometry that keeps the dense dashboard approachable.
2. **Inter** handles narrative copy, tooltips, analytical notes, and structural settings where maximum neutral legibility is demanded.
3. **JetBrains Mono** forms the analytical engine of the system. It is strictly deployed for geospatial coordinates (Lat/Long), depth soundings (meters), temperature/salinity readouts, timestamps (UTC), Argo float IDs, and tabular matrices.

All uppercase metadata labels must use `label-caps` with subtle letter spacing to ensure rapid visual parsing in low-light laboratory or field bridge environments.

## Layout & Spacing
The layout is optimized for high-resolution desktop terminals (1440px and wider), conforming to a dense 12-column analytical grid with dynamic docked drawers:

- **Command Shell Rails**: Fixed 64px collapsed / 240px expanded navigation dock on the left (`#0A192F`).
- **Telemetry Main Canvas**: Fluid 12-column grid utilizing `1.5rem` gutters on desktop displays and `1rem` on compact displays.
- **Floating Geospatial Panel**: Absolute dock layout over map viewports with `1rem` offset from viewport margins.
- **Rhythm & Density**: Micro-spacers (`space-2xs`, `space-xs`, `space-sm`) structure dense statistical groupings inside cards, preserving vertical baseline alignment without forcing arbitrary scrolling.

## Elevation & Depth
Depth is produced via subtle tonal isolation and restrained oceanic ambient cast rather than diffuse blurred shadows:

- **Level 0 (Floor)**: Flat canvas `#F8FAFC` (workspace) or `#071224` (spatial ocean map).
- **Level 1 (Card & Sub-Panel)**: `#FFFFFF` surface accompanied by a hairline perimeter border (`1px solid #E2E8F0`) and an ambient elevation: `0 1px 3px 0 rgba(15, 23, 42, 0.05)`.
- **Level 2 (Telemetry Floating Docks & Tooltips)**: `#FFFFFF` or dark mode `#0F233E` with micro-border `1px solid rgba(226, 232, 240, 0.8)` (light) or `1px solid rgba(6, 182, 212, 0.25)` (dark) and directional drop: `0 8px 24px -4px rgba(7, 18, 36, 0.15)`.
- **Bioluminescent Focus**: Selected map clusters and active data traces trigger an inner glow: `box-shadow: 0 0 12px 0 rgba(0, 240, 255, 0.35)`.

## Shapes
The design balances soft modern roundedness with computational discipline:
- Standard analytical cards, inspector frames, and chart containers use `rounded-xl` (1rem).
- Small interactive tokens, sensor chips, and buttons use `rounded-md` (0.375rem) to `rounded-lg` (0.5rem) to preserve space efficiency.
- Data status badges and ping indicators are strictly pill-shaped (`rounded-full`) to contrast against rectangular data arrays.

## Components

### Buttons
- **Primary Telemetry Button**: Filled `#06B6D4` with white text (`#FFFFFF`) or dark contrast `#071224`, font weight 600, `rounded-lg`, subtle hover elevation with `box-shadow: 0 2px 8px rgba(6, 182, 212, 0.35)`.
- **Secondary Shell Action**: Transparent ground, `1px solid #CBD5E1`, dark navy label `#0F233E`, hover fill with `#F1F5F9`.
- **Dark Mode Map Floating Button**: Background `#0F233E` with `1px solid rgba(255, 255, 255, 0.15)`, text `#00F0FF`, hover border `#00F0FF`.

### Scientific Badges & Chips
- Compact height (22px to 26px), monospace or semi-bold body font.
- Composed of an 8px circular status indicator and uppercase metadata.
- **Reliable**: Light emerald ground (`#ECFDF5`), emerald text (`#047857`), solid `#10B981` dot.
- **Heatwave / Extreme**: Soft rose ground (`#FFE4E6`), crimson text (`#BE123C`), solid `#F43F5E` dot with optional pulsing outer ring.

### Cards & Analytical Panes
- Clean white container (`#FFFFFF`) with `1px solid #E2E8F0` border and `rounded-xl` curvature.
- Header incorporates high-contrast title (`Plus Jakarta Sans`), subtext metadata, and an inline status chip or parameter switcher.
- Interior metric grids feature `metric-readout-lg` typography aligned over small uppercase muted labels (`#64748B`).

### Checkboxes, Toggles & Radios
- Square-round checkboxes (4px radius) styled in `#0F233E` inactive border, shifting to `#06B6D4` fill on active state.
- Analytical switch toggles: compact 36px wide by 20px high pill with smooth 150ms spring transitions for rapid layer toggling (e.g., bathymetry, salinity currents, float drift paths).

### Input Fields & Filter Triggers
- Height: 36px (compact data density) with `0.5rem` radius.
- Background: `#FFFFFF` with inset border `#CBD5E1`.
- Focused: Border transitions to `#06B6D4` with a 2px outer aura `rgba(6, 182, 212, 0.15)`. Leading icons render in `#64748B`.

### Domain-Specific Components
- **Depth Profile Rail**: A vertical 0m to 1000m scrubber anchored beside spatial plots, using depth gradient color stops to isolate specific subsurface layers.
- **Telemetry Matrix Tables**: Dense tabular layouts with alternating row backgrounds (`#FFFFFF` to `#F8FAFC`), sticky header bars, and right-aligned JetBrains Mono numeric cells.