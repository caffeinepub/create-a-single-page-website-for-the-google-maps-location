# Specification

## Summary
**Goal:** Add a new circular HND badge chef logo asset and use it everywhere the site logo appears, including the browser favicon.

**Planned changes:**
- Add new generated logo assets under `frontend/public/assets/generated/`: a 512×512 transparent PNG badge logo and a 64×64 transparent PNG favicon variant.
- Update current logo references in `frontend/src/components/SiteHeader.tsx` and the hero logo in `frontend/src/App.tsx` to use the new badge logo asset via the existing `SafeImage` component with appropriate English alt text.
- Update `frontend/index.html` to reference the new favicon PNG via a `<link rel="icon" type="image/png" ...>`.

**User-visible outcome:** The header logo, hero logo, and browser tab favicon display the new circular HND chef badge logo.
