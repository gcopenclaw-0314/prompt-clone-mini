# FINBRO Dashboard (shuOX59VNOv)

![Screenshot](../images/v0/finbro-dashboard-shuOX59VNOv.png)

## Overview
A dark-mode finance dashboard template (“FINBRO”) with bold branding and KPI cards. The embedded preview shows a large “Current” balance metric and a minimal, high-contrast dashboard aesthetic.

## Layout
- **v0 shell**: top nav + breadcrumbs (Templates → Dashboards → …).
- **Header**: template title, author + engagement stats, primary “Open in v0” button.
- **Embedded preview**:
  - Dark background
  - Brand wordmark top-left
  - Accent circular gradient element top-right
  - Main content area with large metric card (e.g., “Current $6,810”) and likely additional sections below.

## UX patterns
- KPI-first dashboard: lead with primary balance/metric.
- Strong visual hierarchy (brand → KPI → secondary cards).
- Likely uses cards, tabs/filters, and charts in lower sections.

## Animations
Minimal—hover states on cards/buttons; potential subtle chart transitions if charts are present below the fold.

## Visual style
- Dark, premium fintech vibe.
- Oversized typography for primary metric.
- Subtle gradients (accent orb) and soft shadows/elevation.
- Rounded cards with muted labels.

## Components
- Breadcrumb + header meta/actions
- Preview frame
- (Inside preview)
  - Dashboard layout wrapper
  - Brand header/wordmark
  - Stat/KPI Card component
  - Potential chart components, tables, and filters (common dashboard primitives)

## Framework/stack (inferred)
- **Next.js + React**.
- **Tailwind CSS**.
- **shadcn/ui** components (Card, Tabs, Button, DropdownMenu) with custom styling for the brand look.

## Prompt cues to recreate
- “Design a dark-mode fintech dashboard with a bold wordmark in the top-left and a subtle gradient accent orb in the top-right.”
- “Use a main KPI card labeled ‘Current’ with very large currency value; keep labels muted and spacing generous.”
- “Build with Next.js/React + Tailwind + shadcn/ui; use Card components with rounded corners and soft shadows.”
