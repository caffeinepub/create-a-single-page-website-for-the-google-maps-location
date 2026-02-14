# Specification

## Summary
**Goal:** Fix the deployment “System configuration error” so the project builds and deploys successfully in the target platform environment without breaking existing UI behavior.

**Planned changes:**
- Identify the root cause of the build/deployment failure that reports “System configuration error” and correct the project build configuration to match the platform toolchain.
- Update Tailwind configuration to avoid module-format mismatches that can break Tailwind/Vite processing during deployment (while keeping existing dark theme tokens/utilities working).
- Ensure no edits are made in any immutable frontend paths (including `frontend/src/components/ui`) and verify existing features continue to work (menu rendering, image fallback loading, reveal-then-scroll navigation, WhatsApp ordering links).

**User-visible outcome:** The site deploys cleanly and loads the existing single-page UI (Hero, Contact, Location, and revealable sections) without runtime errors, with all current functionality intact.
