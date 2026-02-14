# Specification

## Summary
**Goal:** Fix menu category banner images so Salad/Soup categories show appropriate visuals, and ensure Drinks visuals contain no beer imagery.

**Planned changes:**
- Update `frontend/src/content/business.ts` category image mappings (`image` fields and/or `categoryBannerImages`) so:
  - “Lawazmat (Salads)” and “Salad” use a salad banner image.
  - “Soup” uses a soup banner image.
  - “Hot & Cold Bar” and “Fresh Juice Seasonal” use a drinks banner image representing juice/cold drinks with no beer imagery.
- Add new static banner image assets under `frontend/public/assets/generated/` for Salad and Soup, and ensure all referenced banner filenames exist at runtime.
- Update existing drinks visuals to remove any beer imagery while keeping references intact and avoiding broken images.

**User-visible outcome:** In the Menu UI, Salad and Soup categories display correct salad/soup banners, and Drinks-related categories display juice/cold-drink imagery with no beer visuals, without changing any menu item names or prices.
