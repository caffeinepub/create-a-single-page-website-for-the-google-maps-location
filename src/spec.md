# Specification

## Summary
**Goal:** Update the premium dark theme menu presentation by removing menu item photos/watermarks, fixing HND logo transparency, and improving text readability with lighter text colors.

**Planned changes:**
- Hide/remove the food photo thumbnail area from all Menu item cards while keeping the existing text (name, optional description/note, prices) and WhatsApp ordering + variant-selection behavior unchanged.
- Remove the HND watermark/logo overlay previously shown on top of Menu item photos and ensure no leftover spacing/visual artifacts remain in Menu card layout.
- Update the header and hero to use HND logo assets that have clean, fully transparent backgrounds (and adjust any filename references if changed).
- Adjust global/theme text color tokens/styles to make muted/secondary text noticeably lighter and more readable on the premium dark theme without changing any displayed text content.

**User-visible outcome:** Menu items appear as clean text-only cards with ordering working as before, the HND logo displays without any visible background box on dark UI, and site text (especially muted/secondary text) is brighter and easier to read.
