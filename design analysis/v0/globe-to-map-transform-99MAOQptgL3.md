# Globe To Map Transform (99MAOQptgL3)

![Screenshot](../images/v0/globe-to-map-transform-99MAOQptgL3.png)

## Overview
A single-purpose, dark “demo page” showcasing an interactive visualization that morphs a 3D wireframe globe into a 2D equirectangular map. The embedded preview presents a short explanatory hero followed by a large, centered visualization viewport.

## Layout
- **v0 shell** (marketing/detail wrapper) with breadcrumbs.
- **Template header**: title, author, stats, “Free”, and an “Open in v0” CTA.
- **Embedded preview iframe**:
  - Dark hero block with title + one-sentence description.
  - Large black canvas area underneath showing the globe (wireframe meridians/parallels + coastlines).
  - Small preview toolbar above the iframe (device, open/external, refresh, fullscreen).

## UX patterns
- “Explain then show”: short copy sets context for the interaction.
- The visualization reads like a **canvas/WebGL** component meant to be dragged/controlled (even if controls aren’t visible in the capture).
- Minimal surrounding UI to keep attention on the visual.

## Motion / interaction
- Primary motion: a **smooth, continuous morph** between spherical and flat projections.
- Likely includes:
  - Drag-to-rotate (globe state)
  - A morph progress control (slider) or toggle
  - Subtle easing / inertia

## Visual style
- Dark, high-contrast “tech demo” look.
- Thin, bright wireframe lines against near-black.
- Generous padding and rounded container edges.

## Components (inside preview)
- Page container (dark)
- Heading + supporting text
- Visualization canvas (globe/map)
- Optional controls (slider/toggle/reset)

## Framework/stack (inferred)
- Page wrapper: **Next.js/React** + **Tailwind CSS** + **shadcn/ui**.
- Viz: **Canvas/WebGL** (often Three.js) or canvas-based projection math.

## Prompt cues to recreate
- “Create a dark demo page with a title/description and a large visualization card below.”
- “Render a wireframe globe with graticule lines and coastlines; morph it into a 2D equirectangular map with a smooth interpolated transition.”
- “Support drag-to-rotate in globe mode and a morph slider (0–1) with easing/inertia; add a reset.”
