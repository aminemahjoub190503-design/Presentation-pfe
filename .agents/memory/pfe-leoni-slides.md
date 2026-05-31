---
name: PFE Leoni slides — footer page numbers
description: Why footer page numbers must be re-synced after adding/removing/reordering slides in artifacts/pfe-leoni
---

# Footer page numbers are hardcoded per slide

Each slide component in `artifacts/pfe-leoni/src/pages/slides/*.tsx` ends with
`<SlideFooter n={X} />` where `X` is hardcoded. `SlideFooter` shows `n / TOTAL`,
where `TOTAL = manifest.length` (auto), but `n` is NOT derived from the manifest.

**Why:** The uploaded deck hardcodes `n`. The displayed slide order is the manifest
`position` order (via slideLoader), so any add/remove/reorder of slides desyncs the
hardcoded `n` from the real position (e.g. removing the duplicate OPEX slide shifted
every later slide, and the original deck even had Terrain/GroupeLeoni swapped).

**How to apply:** After any change to slide count/order, re-sync every footer `n` to
its manifest `position`: iterate the manifest, regex-replace `<SlideFooter n={\d+} />`
in each `filepath` with the entry's `position`. Then run `validate-slides` + `typecheck`.

# vite.config must not hard-require PORT/BASE_PATH at load time

`artifacts/pfe-leoni/vite.config.ts` reads `PORT` and `BASE_PATH` at module load.
They must have defaults (`PORT ?? "5000"`, `BASE_PATH ?? "/"`), NOT throw when absent.

**Why:** External CI (e.g. Vercel) runs `vite build` without Replit's workflow env,
so a hard `throw` on missing PORT/BASE_PATH fails the build at config-load time —
even though `build` never uses the dev-server port. Replit's workflow still injects
real values, so defaults don't change local behavior.

**How to apply:** For Vercel deploy of this pnpm-monorepo artifact: Root Directory =
repo root (so `catalog:` deps resolve), Build = `pnpm --filter @workspace/pfe-leoni
run build`, Output Directory = `artifacts/pfe-leoni/dist/public` (note: outDir is
`dist/public`, not `dist`).
