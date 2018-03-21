class: center, middle, inverse

# Equations in ebooks: building samples

Peter Krautzberger

[krautzource](https://www.krautzource.com)

---


# Getting started

* install npm dependencies `mathjax-node-sre`, `puppeteer`
* install an epub3 editor (e.g. Sigil)

---

# Things to do (1 of 2)

* grab one of the sample epub files and play around with it
* build your own (small) sample manually
  * use https://codepen.io/pkra/pen/oWjwNM to generate some outputs
  * OR fetch a Wikipedia article with math in it (e.g. Determinant)
    * e.g., dotepub.com's bookmarklet creates a cleaned-up epub file with MathML
    * you can also grab a full article using `wp.js` (Note: probalby requires a ton of clean-up)
* Try `main-svg.js` on an xhtml file to convert MathML to SVG (with or without a global SVG)
* Try `main-chtml.js` on an xhtml file to convert MathML to HTML+CSS (with font dependence)
  * grab the fonts and CSS from this folder

---
# Things to do (2 of 2)

* Create an epub3 with the output
  * or modify one of the sample epub files
* give it a test spin in your favorite system
* Other ideas
  * tweak the CSS in the PHTML sample
    * e.g., disable `no-wrap` to get reflow
  * post-process `determinant-svg.xhtml` using `main-png.js` to generate PNGs

---

# Observations on "Determinant"

* simple HTML math is both awesome and pretty terrible (e.g., layout inconsistencies, a11y)
* authors are terrible (e.g., first display equation is a one-line table!)
* the trouble with line-breaking (matrices/tables, manual breaks)

