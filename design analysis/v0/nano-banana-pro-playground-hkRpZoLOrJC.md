# Nano Banana Pro Playground (hkRpZoLOrJC)

![Screenshot](../images/v0/nano-banana-pro-playground-hkRpZoLOrJC.png)

## Overview
A community-shared template page showcasing an interactive “playground” style app. The template page itself is a marketing/detail view with title, author, engagement stats, and a live preview embed plus a primary CTA to open the template in v0.

## Layout
- **Top nav**: v0 global navigation (Templates/Resources/etc) with auth actions.
- **Breadcrumbs**: category trail (e.g., Templates → AI → …).
- **Header block**:
  - Large H1 title
  - Author avatar/name + lightweight metadata (likes, views, forks/uses, pricing/free)
  - Action cluster (like, open in v0)
- **Preview area**: large embedded preview/iframe with its own toolbar (viewport controls, refresh/open-new, fullscreen).
- **Below-the-fold (typical on v0 templates)**: description, tags, and/or additional screenshots/content blocks (varies per template).

## UX patterns
- Clear **primary CTA** (“Open in v0”) placed in the header.
- **Social proof** via view/like counters next to author.
- **Embedded live preview** to reduce friction before opening/duplicating.
- Breadcrumbs to support back-navigation to the category listing.

## Animations
Minimal—primarily standard hover/focus states on links and buttons; any motion is likely limited to subtle transitions on controls.

## Visual style
- Clean, neutral, product-doc aesthetic.
- Large typographic hierarchy (bold H1).
- Plenty of whitespace with card-like containers.
- Dark preview content framed within a light page chrome.

## Components
- Global header/navigation bar
- Breadcrumb component
- Title + metadata row (avatar, counters, badges)
- Primary button + icon buttons (like, share/open)
- Preview/embed frame with toolbar controls

## Framework/stack (inferred)
- v0 templates are typically implemented with **Next.js + React**, styled with **Tailwind CSS**, and composed with **shadcn/ui** components (Radix primitives under the hood).

## Prompt cues to recreate
- “Create a template detail page with a global top nav, breadcrumbs, and a hero header containing: large title, author avatar/name, view/like counters, and a primary ‘Open in v0’ button.”
- “Below the header, add a large embedded preview frame with a toolbar (viewport selector, refresh, fullscreen).”
- “Use a minimal neutral UI, lots of whitespace, and clear typographic hierarchy (H1 + muted metadata).”
- “Implement with Next.js/React, Tailwind, and shadcn/ui; use Button, Breadcrumb, Avatar, Badge, Card, and icon buttons.”
