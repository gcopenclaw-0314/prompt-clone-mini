# Nano Banana Pro Playground (hkRpZoLOrJC)

![Screenshot](../images/v0/nano-banana-pro-playground-hkRpZoLOrJC.png)

## Overview
An interactive AI image playground powered by **Vercel AI Gateway**. The UI centers on a prompt + multi‑image inputs, with a clear “Run” action and a prominent API‑key requirement gate.

> Note: “Open in new tab” prompts Vercel login in this environment, so the analysis reflects the embedded preview UI (the app itself).

## Layout
- **Brand + title**: v0 logo and “Nano Banana Pro” header with a provider link.
- **API key callout**: dark notice card explaining `AI_GATEWAY_API_KEY` requirement with docs link.
- **Controls row**: model selector + primary prompt input.
- **Input tabs**: Files / URLs toggle.
- **Uploads**: two image upload slots (primary + secondary).
- **Primary action**: wide **Run** button.
- **Status/preview area**: placeholder image area + “Ready to generate” state.
- **History**: section header for prior generations.
- **Footer links**: “Make this app your own,” “How it works,” feedback link.

## UX patterns
- Clear gating via API‑key alert to set expectations.
- Multi‑input design supports image‑to‑image + prompt workflows.
- Large, singular CTA keeps the flow simple.

## Animations
Likely minimal (hover/focus states, subtle transitions); utility‑first UI rather than motion‑heavy.

## Visual style
- Dark workspace card on a light page shell.
- Monospace‑like input feel with high contrast.
- Utility layout prioritizing function over decoration.

## Components
- Prompt textbox + model dropdown
- Tab switch (Files / URLs)
- Upload dropzones (2)
- Alert/notice card
- Primary CTA button
- Status/preview area
- History list

## Framework/stack (inferred)
- **Next.js + React**
- **Tailwind CSS**
- **shadcn/ui** (Button, Tabs, Input, Card)

## Prompt cues to recreate
- “Build an AI image playground with a prompt input, model selector, and two image upload slots.”
- “Add an API‑key requirement notice card with a docs link.”
- “Place a wide primary ‘Run’ button below inputs and a ‘History’ section beneath.”
- “Use a dark workspace panel on a light shell for contrast.”
