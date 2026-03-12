# Where to Place Your Assets

## Logo

**Place your app logo here:**
```
public/logo.png
```

Recommended size: **~120×32 px** (or similar aspect ratio, max height 32px). PNG with transparent background works best.

The header will automatically use your logo when this file exists. If the file is missing, "Alure.ai" text is shown as fallback.

## Product Screenshots

See `public/images/README.md` for hero and demo screenshot placement (replace placeholders in `src/assets/images/`).

## Booking URL

To use your own Calendly or Cal.com link, set the environment variable in Netlify:

- **Variable:** `PUBLIC_BOOKING_URL`
- **Value:** Your full booking URL (e.g. `https://calendly.com/your-username/30min` or `https://app.cal.com/your-username/meeting`)

Or edit the default in `src/config.ts`.
