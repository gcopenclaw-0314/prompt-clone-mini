# FINBRO Dashboard (shuOX59VNOv)

![Screenshot](../images/v0/finbro-dashboard-shuOX59VNOv.png)

## Overview
A dark, high-contrast finance dashboard showing portfolio summary KPIs, a performance chart with time-range toggles, and a holdings table. The look is modern “fintech”—black background, soft-elevated cards, and a warm gradient accent.

## Layout
- **Top bar**
  - Brand mark/wordmark (“FINBRO”).
  - Small icon button(s) in the header.
  - Circular gradient avatar/accent element on the right.
- **KPI summary block (card)**
  - Primary metric: **Current $6,810**.
  - Secondary metrics listed inline:
    - Invested ($5,220)
    - Total Returns (+$1,590)
    - Net Returns (+30.46%)
    - 1 Day Returns (+$142.50)
- **Performance section**
  - Section title: “Performance”.
  - Asset selector / ticker label (e.g., “TSLA”).
  - Time-range segmented controls: **1D / 1M / 3M / 6M / 1Y**.
  - Line chart/graph.
- **Holdings table**
  - Columns: Company, Qty., Mkt. Price, Invested, Current, Returns.
  - Example rows: TSLA, AMD, SKYLINE with small icons/indicators.
- **Footer label**
  - Small status text (“Status”).

## UX patterns
- Dashboard hierarchy: headline metric first, then trend context (chart), then detailed breakdown (table).
- Time-range buttons behave like a filter/segmented control.
- Table uses dense numeric formatting and per-row indicators.

## Visual style
- Near-black canvas with subtle gradients.
- Rounded cards with soft shadows and inner glow.
- White primary type + muted gray secondary labels.
- Accent: warm pink/orange gradient (avatar/accent circle).

## Components
- Header / AppBar
- Stat card (KPI list)
- Segmented control / filter buttons
- Line chart
- Data table

## Framework/stack (inferred)
- **Next.js + React**
- **Tailwind CSS**
- Likely **shadcn/ui** (Button, Card, Table)
- Chart via a lightweight SVG/Canvas chart (or recharts) styled to match.

## Prompt cues to recreate
- “Create a dark fintech portfolio dashboard with a ‘Current’ headline value and several inline return metrics.”
- “Add a ‘Performance’ chart section with time-range filter buttons (1D–1Y) and a holdings table below.”
- “Use black background, rounded elevated cards, muted labels, and a warm gradient accent element.”
