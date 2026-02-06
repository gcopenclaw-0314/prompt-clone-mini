# Globe To Map Transform (99MAOQptgL3)

![Screenshot](../images/v0/globe-to-map-transform-99MAOQptgL3.png)

## Overview
A component demo showcasing an interactive visualization that morphs a 3D globe into a 2D equirectangular map. The preview uses a dark, presentation-style layout with descriptive text and a large visualization viewport.

## Layout
- **v0 shell** with breadcrumbs (Templates → Components → …).
- **Header**: title, author + engagement, “Free”, “Open in v0”.
- **Embedded preview**:
  - Dark hero header inside the preview with title + short description.
  - Large visualization container below (globe wireframe visible).

## UX patterns
- Educational/demo format: explain the interaction in a sentence, then show the interactive canvas.
- Likely includes controls (slider/toggle) to drive the transform, plus drag-to-rotate when in globe mode.

## Animations
Core animation is the **smooth morph** between globe projection and flat map projection; likely continuous interpolation with easing. Expect WebGL/canvas-based rendering.

## Visual style
- Dark, “tech demo” vibe.
- High-contrast wireframe globe.
- Minimal UI chrome to keep attention on the visualization.

## Components
- Preview frame
- (Inside preview)
  - Title + description block
  - Canvas/WebGL visualization component
  - Potential controls: slider, toggle buttons, tooltips, reset

## Framework/stack (inferred)
- Surrounding template: **Next.js + React** with **Tailwind CSS** and **shadcn/ui**.
- Visualization: likely **Canvas/WebGL** (e.g., Three.js) or D3 + canvas for projections.

## Prompt cues to recreate
- “Build an interactive visualization that morphs a 3D globe into a 2D equirectangular map with a smooth animated transition.”
- “Use a dark demo page: title + one-line description, then a large centered canvas.”
- “Add controls for morph progress (0–1 slider), drag-to-rotate in globe mode, and a reset button.”
- “Implement in Next.js/React + Tailwind; optionally use Three.js for rendering; use shadcn/ui for controls.”
