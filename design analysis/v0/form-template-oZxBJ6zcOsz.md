# Form Template (oZxBJ6zcOsz)

![Screenshot](../images/v0/form-template-oZxBJ6zcOsz.png)

## Overview
A branded, card-based feedback form with a minimal “ACME” header and a friendly survey prompt. The preview shows a large rounded white card sitting on a pale blue background, presenting a short questionnaire-style flow.

## Layout
- **Background**: soft light-blue canvas.
- **Centered card**
  - Large rounded rectangle with generous padding.
  - Top brand header: “ACME” (high-contrast serif wordmark).
  - Form content area:
    - Section title: “What did you think of our service?”
    - Supporting copy: “Your valuable feedback helps us to do even better next time.”
    - Time estimate: “Takes less than 2 minutes”.
    - A disabled state button: “Incomplete Setup” (suggesting a multi-step form / setup gating).

## UX patterns
- Survey/feedback framing (short, low-friction).
- Strong visual hierarchy: brand → question → reassurance/time estimate → action.
- Disabled CTA communicates incomplete requirements before submission/continuation.

## Visual style
- Clean, editorial feel (serif brand wordmark).
- Rounded card with subtle shadow on a pastel background.
- Minimal controls and plenty of whitespace.

## Components
- Page background
- Card container
- Brand header / wordmark
- Heading + supporting paragraphs
- Primary/disabled Button

## Framework/stack (inferred)
- **Next.js + React**
- **Tailwind CSS**
- Likely **shadcn/ui** (Card, Button, Typography)

## Prompt cues to recreate
- “Create a centered feedback form card on a soft blue background with a large serif brand header (‘ACME’).”
- “Include a question heading, supporting text, and a small ‘takes <2 minutes’ note.”
- “Add a disabled primary button state to indicate an incomplete setup/step.”
