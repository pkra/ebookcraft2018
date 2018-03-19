## Kindle

* required reading: [What Kindle does behind the scenes, Jiminy Panoz](https://medium.com/@jiminypan/what-kindle-does-behind-the-scenes-3d1be22efce3)
* HTML+CSS - a dumpster fire
  * fonts are not applied
  * advanced CSS is broken
* SVG
  * broken support for ex units
    * jiminy's analysis, phantomjs bugs
  * no inline SVG possible (thus visual a11y problems in nightmode)
  * no zoom for SVG images (thus scaled down SVG is a real problem)
* Pragmatic: PNG
  * use SVG
    * create high-res PNGs from it
      * e.g., puppeteer
    * resolve transparency
  * watch out for high-res being ignored in web reader (including preview on Amazon)
  * leverage SRE alt-text
  * convert ex to em
  * re-writing links
* Addendum: proprietary formats
  * looks like textbookbuilder allows more
  * but completely inaccessible
* Claims towards MathML support
  * https://blog.aboutamazon.com/introducing-new-accessibility-features-on-kindle-and-fire
  * NVDA does not support MathML without third party software
  * No documentation in Kindle Publishing Guidelines
  * img alttext does not appear to work (though supposedly added in early 2017)
