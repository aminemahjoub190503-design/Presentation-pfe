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
