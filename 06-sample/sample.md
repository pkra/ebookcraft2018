class: center, middle, inverse

# Equations in ebooks: a sample

Peter Krautzberger

[krautzource](https://www.krautzource.com)

---


# Workflow

* install npm dependencies `mathjax-node-sre`, `puppeteer`
* install an epub3 editor (e.g. Sigil)
* build your own small sample
  * use https://codepen.io/pkra/pen/oWjwNM to generate some outputs
* OR fetch a Wikipedia article with math in it (e.g. Determinant)
  * e.g., dotepub.com's bookmarklet creates a cleaned-up epub2 file with MathML
  * or full fletched with `wp.js` (requires a ton of clean-up)
* run `main-svg.js` on an xhtml file to convert MathML to SVG
* OR run `main-chtml.js` on an xhtml file to convert MathML to HTML+CSS (with font dependence)
  * grab fonts and CSS from here
* create an epub3 with the output (or grab one of the samples and dump it in)
* give it a spin
* OR tweak the CSS in the PHTML sample
  * e.g., disable `no-wrap` to get reflow
* OR post-process `determinant-svg.xhtml` using `main-png.js` to generate PNGs

# What can we learn from "Determinant" (Wikipedia)

* simple HTML math is terrible (e.g., inconsistent layout, a11y)
* authors are terrible (e.g., first display is a one-line table)
* forget about line-breaking (matrices, )
