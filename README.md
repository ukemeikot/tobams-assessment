# TOBAMS Frontend Intern Assessment

Production-ready static landing page implementation for the TOBAMS Frontend Intern Assessment, built with Next.js App Router and Tailwind CSS.

## Links

- Live URL: https://app.tobams.ukemeikot.online
- Figma Design: https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=qxnAKp4Ael8QtLYz-0
- GitHub Repository: https://github.com/ukemeikot/tobams-assessment

## Stack

- Next.js 16.2.4
- React 19
- TypeScript
- Tailwind CSS 4
- App Router
- `next/image` for image optimization
- `next/font` for typography loading

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm

### Installation

```bash
pnpm install
```

### Run in Development

```bash
pnpm dev
```

Open `http://localhost:3000` in your browser.

### Production Build

```bash
pnpm build
pnpm start
```

## Project Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
  favicon.ico
  icon.png
  apple-icon.png

components/
  layout/
  sections/
  ui/

lib/
  constants.ts

public/
  images/
```

## Features Implemented

- Pixel-focused static implementation based on the provided Figma and reference screenshots
- Responsive layouts for mobile, tablet, and desktop
- Reusable component-based structure under `/components`
- Semantic HTML structure using `header`, `nav`, `main`, `section`, and `footer`
- Optimized local images with `next/image`
- Global font setup using `next/font`
- Footer, testimonial carousel controls, mobile navigation, and CTA sections implemented as reusable UI patterns

## Design Decisions and Technical Notes

- The app uses Tailwind responsive utilities for layout changes across breakpoints.
- The design was split into reusable sections instead of keeping everything in a single page file.
- A square favicon was generated from the TOBAMS logo mark because the original horizontal logo would not read clearly at favicon size.
- Testimonial profile images use remote avatar sources to match the visual direction of the mockup more closely.
- The local development script uses `next dev --webpack` for stability in this environment.

## Accessibility Notes

- Semantic elements are used throughout the page structure.
- Interactive elements are keyboard-focusable.
- Images include descriptive `alt` text.
- Navigation and testimonial controls include accessible labels.

## Known Issues / Assumptions

- Some content and imagery were implemented from provided screenshots where the exact Figma-exported asset or text styling details were not available locally.
- Remote testimonial avatars are placeholders chosen to match the gender presentation shown in the design references.

## AI Disclosure

AI-assisted tooling was used during development for implementation support and iteration. All code, structure, and final project integration were reviewed and adjusted within the project context before submission.
