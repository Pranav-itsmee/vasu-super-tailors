# VST thread-spool logo

Replace the plain "Vasu." wordmark in the sticky nav with a small icon-lockup that ties to the chalk-precision direction.

## What gets built

A new component `src/components/brand-mark.tsx` exporting `<BrandMark />`:

- Inline SVG (~28px) of a stylized thread spool / bobbin — two thin horizontal caps with vertical thread lines wrapped around the body, drawn in `currentColor` so it inherits text color and flips to `text-primary` on hover.
- "VST" letters in Playfair Display italic, sitting inside or just beside the spool body, tight tracking.
- Beside the icon: a small two-line wordmark — "Vasu Super" on top, "Tailors" italic below — in Inter/Playfair at ~10–11px uppercase tracking, hidden on `sm:` down so mobile shows only the icon.
- Whole thing wrapped in an `<a href="#top">` with `aria-label="Vasu Super Tailors — home"`.

## Where it goes

- `src/routes/index.tsx` nav: replace the existing `<a href="#top" className="font-display italic ...">Vasu.</a>` with `<BrandMark />`.
- Footer: leave as-is (italic tagline already serves that role).

## Out of scope

- No favicon change, no generated raster logo, no other pages affected (single-page site).
