# Render Clone (Static UI Replica)

## Project Overview
This project is a high-fidelity, fully responsive static replica of the Render.com homepage. It perfectly clones the layout, dynamic hero animations, Lottie animations, and micro-interactions of the original site without altering the core branding or messaging.

The project features a dual-architecture:
1. **Static Presentation Layer:** A meticulously extracted `index.html` file serves as the production entry point, rendering the identical HTML payload and hydrating original Next.js JavaScript chunks.
2. **React Scaffold Layer:** A dormant `src/` directory containing a modern TanStack Start, React, and `shadcn/ui` foundation. This allows for a future seamless migration into a fully component-driven architecture.

## Technologies Used
* **Vite** (Build tooling and development server)
* **React 19 & TypeScript** (Scaffolded foundation)
* **TanStack Router / Start** (Scaffolded routing)
* **Tailwind CSS v4** (Utility-first styling)
* **Framer Motion** (Animation primitives)
* **Radix UI** (Unstyled, accessible UI components)

## Installation Instructions

1. Ensure you have Node.js (v18+) installed.
2. Clone the repository:
   ```bash
   git clone https://github.com/sahaya-savari/render.web.git
   cd render.web
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```

## Development Instructions

To spin up the local development server and view the static clone:
```bash
npm run dev
```
Navigate to `http://localhost:5173/` in your browser. 

*Note: The current configuration serves `index.html` as a standalone static file, bypassing the `src/` directory routing to preserve the 1:1 original Render.com experience.*

## Build Instructions

To build the static assets for production deployment:
```bash
npm run build
```
This will compile and output the optimized, minified files into the `dist/` directory, ready to be served by any static host (such as GitHub Pages, Netlify, or Render).

---
*Disclaimer: This repository is an educational clone and is not affiliated with, endorsed by, or sponsored by Render.*
