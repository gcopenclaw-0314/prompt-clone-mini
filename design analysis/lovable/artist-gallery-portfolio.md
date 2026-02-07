# Artist Gallery Portfolio — Preview UI Analysis

![Screenshot](../images/lovable/artist-gallery-portfolio.jpg)

## Overview
A warm, gallery-like portfolio for a visual artist (“Émile”). The UI is extremely minimal—essentially a tiled image gallery—using a soft beige background and large rounded-corner artwork cards.

## Page structure
- **Header (simple brand block)**
  - Left: name **Émile** + subtitle “Visual Artist”
  - Right: circular **hamburger menu** button
- **Main gallery grid**
  - Two-column (responsive) grid of large image tiles
  - Each tile is a link to a work detail page (`/work/...`)
  - **Strong rounded corners** and generous gutters
  - Below-the-fold: additional tiles, including empty/placeholder blocks (suggesting lazy-load or missing items)
- **Floating Lovable badge**
  - “Edit with Lovable” overlay/badge in the corner with close (dismiss) control

## UX patterns
- **Art-first navigation**: the homepage is the catalog; click a piece to view details.
- **Progressive loading**: additional rows appear as you scroll; placeholders indicate loading state.
- **Minimal chrome**: primary navigation is tucked into the menu.

## Visual design
- **Warm neutral palette** (beige/cream background).
- **Rounded, soft gallery cards** with large imagery.
- Typography is understated and modern, keeping focus on artwork.

## Components inventory
- Brand header (name + role)
- Hamburger menu (likely opens overlay/drawer with navigation + social links)
- Responsive image grid with linked cards
- Loading/placeholder tiles
- Lovable “Edit with Lovable” badge

## Notes for recreation
- Use a **beige gallery backdrop**, **2-up rounded image grid**, and **menu-only navigation**.
- Include **skeleton/placeholder tiles** for lazy-loading rows.
