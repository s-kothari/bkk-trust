# BKK Trust

Migrated to Next.js App Router for SEO and performance.

## Development

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm start
```

## Notes

- Routes live under `app/` and render components from `src/`.
- Tailwind config in `tailwind.config.js`; global styles in `app/globals.css`.
- Leaflet map is dynamically imported on `app/impact` to avoid SSR issues.
