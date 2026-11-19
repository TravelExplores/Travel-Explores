# Travel Explores Update Plan

## Design direction
Retain the existing Travel Explores editorial travel style: dark navy, coral CTA accents, large destination photography, rounded cards and mobile-first layouts. The new destinations use the same visual language rather than introducing a separate brand system.

## Outcomes
- Remove USA from homepage background rotation and add Singapore, Vietnam and Bali destination visuals.
- Add international fallback packages for Singapore, Vietnam and Bali.
- Add Uttarakhand, Himachal Pradesh and Andaman domestic fallback packages.
- Add editable trek data for Uttarakhand and Himachal Pradesh package details.
- Add Contact Us navigation and page with existing phone/email plus validated inquiry form.
- Protect package mutations behind JWT authentication and the allowlisted admin email.
- Extend admin package editor for highlights, attractions, prices, publishing and trek JSON.
- Preserve `.env` and existing secrets; no credentials are added to client code.

## Project structure
`components/` owns navigation, cards, forms and shared sections; `src/app/` owns routes, API handlers, auth and package detail pages; `public/` owns destination imagery; `data/` owns safe fallback package content.
