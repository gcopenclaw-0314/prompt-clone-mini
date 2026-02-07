# Parallax Agency Portfolio — Preview UI Analysis

![Screenshot](../images/lovable/parallax-agency-portfolio.jpg)

## Overview
A stark, high-end agency/consultant portfolio with a dark theme and oversized editorial typography. The homepage is a simple narrative: a bold headline + intro copy, a vertical list of project cards, and a “Let’s connect” footer section.

## Page structure
- **Top bar / header**
  - Left: name/location block (e.g., “Marco Coppeto”, “Brooklyn, NY”)
  - Center: small pill-style control with icons (acts like a view toggle or compact navigation)
  - Right: **Contacts** link
- **Hero**
  - Huge multi-line headline: “Shaping what’s next.”
  - Short paragraph describing services/role
- **Work list (project index)**
  - Series of project cards stacked vertically
  - Each card shows: project name + short description + category tags (e.g., BRAND / FINTECH)
  - Cards link to detail pages (`/project/...`) and use image previews
- **Footer contact section**
  - Heading: “Let’s connect.”
  - Email link plus three columns of social links (LinkedIn, Twitter, Instagram, Dribbble)
  - Bottom nav repeats: Work / About / Contact
  - Copyright line
- **Lovable badge**
  - “Edit with Lovable” floating badge + dismiss control

## UX patterns
- **Minimal routing**: primarily a work index + about/contact pages.
- **High signal hero**: visitors understand positioning immediately.
- **Project cards** combine summary + taxonomy (tags) for quick scanning.

## Visual design
- **Dark-first** (near-black background) with white text.
- **Oversized typography** and lots of negative space for premium feel.
- Subtle UI controls (small pill toggle) contrast with large type.

## Components inventory
- Header (name/location + contacts)
- Hero headline + lead paragraph
- Vertical project card list (image + title + description + tags)
- Contact footer block with social links
- Bottom navigation links
- Lovable badge

## Notes for recreation
- Use a **black canvas** and **very large headline type**.
- Add **project cards with tags** and a **contact-centric footer**.
- Include a small **header control/toggle pill** as a signature UI element.
