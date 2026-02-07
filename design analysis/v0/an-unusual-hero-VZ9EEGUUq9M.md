# An unusual hero (VZ9EEGUUq9M)

![Screenshot](../images/v0/an-unusual-hero-VZ9EEGUUq9M.png)

## Overview
A landing-page hero concept combining a marketing headline with creator attribution (“Made with Midjourney + v0 by Webrenew”) and a prominent call-to-action. The preview reads as a dark, cinematic hero with an overlaid attribution row and a bright accent button.

## Layout
- **Hero (full-bleed / centered)**
  - Large headline: “Transform Your Vision Into Reality”.
  - Supporting paragraph describing using GSAP animations + Midjourney-generated images/videos.
  - Primary CTA button: “BUILD WITH v0” (anchors to `#demo`).
- **Attribution overlay / footer row**
  - “Made with” label.
  - Pill-style badges/buttons: “Midjourney”, “v0”, and author “Webrenew”.
  - Secondary in-page CTA: “PROMPT” (anchors to `#demo`).
  - Small brand mark/logo.

## UX patterns
- Two routes to action:
  - Traditional hero CTA (“BUILD WITH v0”).
  - A more “template-specific” CTA (“PROMPT”) that jumps to the demo/prompt section.
- Attribution is treated as interactive (pill buttons) rather than plain text.

## Visual style
- Dark gradient/vignette hero background (cinematic look).
- High-contrast white typography.
- Rounded pill controls with outline styling.
- Accent-filled rounded button for emphasis.

## Components
- Hero section (Heading, Paragraph)
- Primary Button
- Badge/Pill buttons (attribution)
- Logo/mark

## Framework/stack (inferred)
- **Next.js + React**
- **Tailwind CSS**
- Likely **shadcn/ui** primitives (Button/Badge)

## Prompt cues to recreate
- “Design a dark, cinematic hero with a centered H1 and supporting paragraph, plus a primary CTA button.”
- “Add an attribution row: ‘Made with’ + outlined pill badges for tools and author, and a bright accent ‘PROMPT’ button linking to a demo section.”
- “Use generous negative space, strong contrast, and rounded, modern UI controls.”
