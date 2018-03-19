

### epub Reading systems

- Readium JS
  - Chrome App: all ok
- Adobe Digital Edition
  - Windows: HTML ok, SVG ok, NVDA ok
  - Android: SVG both, CHTML ok, Talkback OK, PHTML crashes (also: sideloading trouble)
  - iOS: SVG ok, VO fails on SVG, C/PHTML crashes app
- Bluefire Cloudshelf
  - Android: SVG ok (NOTE sets `width:100%`, so `width: auto!important` to fix), C/PHTML ok, talkback ok
- Bluefire Reader (old)
  - Android: SVG ok, C/PHTML crash the app (even OS), a11y failure (entire app)
  - iOS
    - both SVG ok. No a11y
    - C/PHTML both crash the app
- iBooks
  - SVG ok but VO ignores (cf. notes on aria-labelledby ), CHTML ok but VO ignores aria-label, PHTML ok
- Kobo
  - Android: SVG ok, CHTML no fonts, PHTML ok, Talkback CHTML ok, SVG skipped
  - iOS: SVG ok, CHTML glitches, PHTML ok, VO fails on svgs, skips blockCHTML
- Nook
  - Android: SVG ok, C/PHTML crashes, talkback+a11ysetting skips SVG
- Google Play books
  - Android: SVGs ok (but no longer uploads), CHTML glitches, PHTML ok, talkback ok
  - Web: a mess.
- Tolino
  - iOS: SVG ok (despite warning "can't do epub3"), C/PHTML crashes
  - Android: SVG ok (despite warning "multimedia"), C/PHTML crashes, talkback: can't enter webview
- random
  - Lithium
    - Android: SVG ok, PHTML ok, CHTML CSS screwed up, talkback ok
  - Aldiko, Gitden, Helicon etc
    - old data: works
