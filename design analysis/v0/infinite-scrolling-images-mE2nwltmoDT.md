# Infinite Scrolling Images (mE2nwltmoDT)

![Screenshot](../images/v0/infinite-scrolling-images-mE2nwltmoDT.png)

## Overview
An animation-focused template demonstrating an “infinite scrolling” (looping) image carousel/marquee effect. The preview shows stacked/overlapping image cards on a dark stage, implying continuous horizontal (or vertical) motion.

## Layout
- **v0 template shell**: global nav + breadcrumbs.
- **Header**: title, author + engagement, “Free”, CTA to open in v0.
- **Embedded preview**:
  - Dark background container
  - Layered image/card stack with rounded corners
  - Likely an infinite loop track behind the foremost card

## UX patterns
- Component/demo template: focus is on a single motion pattern.
- Preview-first evaluation.
- Clear CTA to reuse (“Open in v0”).

## Animations
Primary animation is the **infinite loop** scrolling of images/cards (marquee/carousel). Expect CSS keyframes or requestAnimationFrame-driven transform translating a duplicated track; pauses may occur on hover.

## Visual style
- Dark canvas to spotlight the component.
- Rounded, elevated image cards with subtle shadows.
- Overlap/stacking for depth.

## Components
- Breadcrumb, header metadata, action buttons
- Preview frame
- (Inside preview)
  - Carousel/marquee track
  - ImageCard components (rounded, shadow)
  - Possibly gradient masks/fades at edges

## Framework/stack (inferred)
- **Next.js + React** composition.
- **Tailwind CSS** for layout and styling.
- **shadcn/ui** for buttons/cards in the surrounding template; the marquee is custom React/CSS.

## Prompt cues to recreate
- “Build an infinite scrolling image marquee: duplicate the image list to create a seamless loop; animate translateX continuously; add gradient edge masks and pause-on-hover.”
- “Use a dark background stage and layered/stacked image cards with rounded corners and subtle shadows.”
- “Implement in Next.js/React with Tailwind; use shadcn/ui Card/Button for surrounding UI if needed.”
