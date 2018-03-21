class: center, middle, inverse

# Equation rendering in Kindle

ebookcraft 2018

Peter Krautzberger

[krautzource](https://www.krautzource.com)

---

# Required reading

[What Kindle does behind the scenes, Jiminy Panoz](https://medium.com/@jiminypan/what-kindle-does-behind-the-scenes-3d1be22efce3)

---

# Output formats reviewed

* HTML+CSS - a dumpster fire
* SVG - maybe
* PNG - pragmatic
  * [screenshot eink](https://drive.google.com/open?id=1oY_qN94SNeXT6QEacj5nN8yFmDsWmNnQ)
  * [screenshot android](https://drive.google.com/file/d/1L00alxXlQ_muEeNR-LB5roUSD-BahmVe/view?usp=sharing)

???

* HTML+CSS - a dumpster fire
  * fonts are not applied
  * most advanced CSS gets broken
* SVG
  * broken support for `ex` units
    * jiminy's analysis => sounds like an old phantomjs bugs
  * kindlegen moves inline SVG to separate files
    * => visual a11y problems (e.g., nightmode)
    * can't use global SVG paths => larger file sizes
  * pop-out zoom seems broken for SVG images
    * => `max-width:100%` on SVGs can become a problem (no way to get bigger)
    * (might "just" be a temporary kindle bug)
* Pragmatic: PNG
  * use SVG
    * create (high-res) PNGs from it
      * e.g., puppeteer
    * resolve transparency
  * watch out for high-res being ignored in web reader (including preview on Amazon)
  * leverage SRE alt-text
  * keep styles! (vertical alignment!)
    * but convert `ex` to`em`
  * re-write links
  * reduce duplicates

---

# Addendum

* proprietary formats
* Claimed MathML support

???
* Addendum: proprietary formats
  * looks like textbookbuilder might provide some magic
  * but apparently completely inaccessible (PDF reflow)
    * does not even allow the user to switch fonts
* Claims towards MathML support
  * https://blog.aboutamazon.com/introducing-new-accessibility-features-on-kindle-and-fire
  * NVDA does not support MathML without third party software
  * No documentation in Kindle Publishing Guidelines
  * img alttext does not appear to work (though supposedly added in early 2017)
