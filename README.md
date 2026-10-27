# AURELIS ONE — luxury smartwatch launch site

React + Vite + Tailwind + GSAP/ScrollTrigger + React Three Fiber + Framer Motion + Lucide.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build && npm run preview
```

Notes
- The watch is a procedural Three.js model (superellipse case, chamfers, polished bezel, curved glass, knurled crown, ribbed strap) lit by a Lightformer studio environment — no external model or network assets are required. Case/strap/face options change colour and display only; the geometry is identical.
- All health, battery and sensor content is concept / sample data. Specifications are bracketed placeholders.
- Reservation flow is a client-side demo (nothing is sent; stored in localStorage only).
- Add `?nolag` to the URL when testing on slow/software GL so GSAP timelines run on wall-clock time.
- `prefers-reduced-motion` skips the intro, pinned scenes and reveals.

## Mobile / app-like layer
- Bottom tab bar (Home · Design · Features · Customise · Specs) with safe-area support, plus a header that hides on scroll-down and returns on scroll-up.
- Reservation form becomes a swipe-down bottom sheet on phones; form fields are 16px so iOS never zooms.
- Installable PWA: `public/manifest.webmanifest`, icons in `public/icons/`, and a small offline cache in `public/sw.js` (registered in production builds only).
- `--tabbar` CSS variable keeps hero, pinned scenes and footer clear of the tab bar.

---
Crafted with precision by [Mohm'd Nafees](https://nafeesahmed.tech)
