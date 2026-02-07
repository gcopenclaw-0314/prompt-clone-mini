# Editorial Agency Portfolio — Preview UI Analysis

![Screenshot](../images/lovable/editorial-agency-portfolio.jpg)

## Overview
A minimal, editorial portfolio for a creative/agency persona ("Julien Moreau"). The experience is image-first: a full-bleed featured project hero followed by a curated “Selected Work” grid and a typographic, poster-like footer wordmark.

## Page structure
- **Top navigation (sticky at top)**
  - Left: brand/name “Julien Moreau”
  - Right: links **Work**, **About**, **Contact**
- **Featured project hero**
  - Full-bleed background image with dark overlay for legibility
  - Left-aligned label (project/client) + large title (2-line editorial headline)
  - Right-side slide indicator (e.g., **02/06**) suggesting a carousel of featured projects
- **Intro statement**
  - Prominent single-sentence positioning line (H2-size) under the hero
- **Selected Work section**
  - Grid/list of project cards with thumbnail image
  - Each card includes: project title + short descriptor
  - Cards read as links into case-study detail pages (e.g., `/work/...`)
- **Footer (multi-column + wordmark)**
  - Columns: **Contact** (email), **Social** (LinkedIn/Twitter), **Work** (external link like “View on Dribbble”), plus a small newsletter field
  - Oversized typographic mark **“JULIEN.”** occupying the bottom area
  - Small copyright + “Website design by …”
- **Lovable badge**
  - Floating “Edit with Lovable” badge in the corner with dismiss button

## UX patterns
- **Carousel-style hero** communicates breadth of work before scrolling.
- **Strong information scent**: hero + grid both click through to detailed work pages.
- **Editorial hierarchy**: short label → large headline → supporting descriptor.
- **Minimal navigation** keeps focus on projects.

## Visual design
- **High-contrast, magazine-like typography** with generous spacing.
- **Image-led** layout; text overlays are restrained and left-aligned.
- **Black/white neutral palette** (hero overlay + footer) with a bold, poster footer wordmark.

## Components inventory
- Top nav (brand + 3 links)
- Featured hero carousel slide (image + overlay text + slide count)
- Statement/mission heading
- Project grid cards (image + title + description)
- Footer columns (contact/social/work + newsletter)
- Oversized wordmark footer
- Lovable “Edit with Lovable” badge

## Notes for recreation
- Use a **fullscreen featured work carousel** with a slide counter (e.g., `02/06`).
- Keep **copy tight** (title + one-line descriptor).
- Add a **bold typographic footer wordmark** to end the page with brand presence.
