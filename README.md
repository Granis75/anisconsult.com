# AnisConsult — French / English

Personal reference site presenting Anis Allouache's professional activity in operations coordination, process improvement and business tools.

- **French:** https://anisconsult.com/ (default)
- **English:** https://anisconsult.com/en

Both languages provide the home, expertise, selected work, approach, contact and two operational case studies. The header's FR / EN switch preserves the current page. No machine translation is used at runtime.

## Architecture

Next.js App Router uses two route groups with separate root layouts:

- `app/(fr)/` — French routes and `<html lang="fr">`
- `app/(en)/en/` — English routes and `<html lang="en">`

Both share the visual system in `app/globals.css` and the navigation, footer and contact components. Canonical and hreflang metadata are included per language and in the sitemap. Legacy French paths are retained through the French route group.

## Separation of roles

- **AnisConsult:** professional activity, methodology and concrete operational case studies.
- **Lyan Studio:** software products, prototypes and implementation work.

## Verification

```sh
npm install
npm run build
```

Ensure both languages compile; verify links on mobile; inspect `/sitemap.xml`, `/en`, `/en/work`, and case-study equivalents.
