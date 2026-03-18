# Nithin Sankar Bahunadam — Portfolio

Personal portfolio website built with React, TypeScript, Three.js, and GSAP.

## Tech Stack

- **React 18** + **TypeScript** — UI and type safety
- **Three.js** / **React Three Fiber** — 3D character rendering with Draco-compressed models
- **GSAP** — scroll-based animations, text split effects, and entry transitions
- **Vite** — build tooling
- **Vercel Analytics** — usage tracking

## Sections

- **Landing** — animated intro with interactive 3D character
- **About** — personal introduction
- **What I Do** — skills and services overview
- **Tech Stack** — marquee of technologies
- **Work** — project showcase with images
- **Career** — professional timeline
- **Contact** — contact form / links

## Getting Started

### Prerequisites

> This project uses the standard `gsap` package, which includes all plugins (SplitText, ScrollSmoother, etc.) for free as of April 2025.

### Install & Run

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Character/        # Three.js 3D character scene
│   ├── styles/           # Per-component CSS
│   ├── utils/            # GSAP scroll, text split, initial FX helpers
│   ├── Landing.tsx
│   ├── About.tsx
│   ├── WhatIDo.tsx
│   ├── TechStack.tsx
│   ├── Work.tsx
│   ├── Career.tsx
│   └── Contact.tsx
├── context/
│   └── LoadingProvider.tsx
└── data/
    └── boneData.ts       # 3D character bone/animation data
public/
├── models/               # Encrypted 3D model + HDR environment
├── images/               # Project and tech stack images
└── draco/                # Draco decoder for compressed GLB
```

## License

MIT — see [LICENSE](LICENSE).
