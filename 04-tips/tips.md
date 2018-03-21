class: center, middle, inverse

# Tips & Challenges

ebookcraft 2018

Peter Krautzberger

[krautzource](https://www.krautzource.com)

---

# Tips & Challenges

* reflow
  * "optimal" reflow
  * media-queries
  * optimize space and rhythm
* overflow
  * most content is monolithic
  * `overflow:scroll` = sad puppy https://twitter.com/JiminyPan/status/973497340093960192
  * shrink SVG to fit
  * watch out for negative margins
    * especially when authors think about centered content, they may add negative spacing
    * consider stripping them systematically
* mixed content
  * text and math
  * graphics and math
* SVG a11y
  * landscape can be iffy
  * beware epubcheck false positives
  * beware role="math"
  * handling surrounding non-whitespace

???
* reflow
  * "optimal" reflow: still manual
    * font-less CSS has best chance
    * active research into new approaches for breaking expressions up
  * media-queries + duplicate content works
    * multiple versions using automatic line-breaks
    * add media-queries
    * rare in the wild (e.g., Hindawi)
  * to optimize space and rhythm
    * left-align
    * labels on left
    * handle hardest cases manually (i.e., rewrite input or output)
* overflow
  * most equation content will have "monolithic" design
    * often print-first
    * full of tables (equation arrays, matrices, manual line-breaks)
    * full of manual line-breaks and positioning (to fit print)
  * `overflow:scroll` is a sad puppy https://twitter.com/JiminyPan/status/973497340093960192
  * shrink SVG to fit (like other images)
    * most RS will
    * some will have pop-out functionality
    * but often issues with inline SVG
    * for all others `svg { max-width: 100%}` should do the trick
  * some RS force SVG `width: 100%` (eg. Bluefire Cloudshelf)
    * try `width:auto!important`
  * watch out for negative margins
    * especially when authors think about centered content, they may add negative spacing
    * consider stripping them systematically
* mixed content
  * text and math
    * e.g., LaTeX \intertext
    * e.g., braced equation-ish numbering
    * e.g., the PLOS example with similar braces around labeled equations
  * graphics and math
    * elementary; e.g., explanatory diagrams for addition/multiplication
    * research: commutative diagrams etc
    * diagrams (tikz)
  * => you're usually better off modifying the output than e.g., MathML
* SVG a11y
  * landscape can be iffy
  * but getting better
  * beware epubcheck false positives
  * beware role="math"
    * derived from role="img"
    * spec only recently gave a valid example
    * often leads to AT ignoring everything
  * surrounding text
    * move surrounding text into a wrapping element to avoid odd line-breaks (especially inline)

---

# Legacy approaches and their drawbacks

* most popular approach: mix&match
* Issues
  * visual inconsistencies
  * accessibility

???
* most popular approach: mix&match
  * HTML-math for easy / inline
  * binary images for display
    * but sometimes mixed with text/CSS (e.g., equation labels)
* Issues
  * visual inconsistencies
    * different visual quality
    * different fonts (inline does not match block)
    * bad alignment when mixing
  * accessibility
    * absence of image descriptions
    * HTML-math fails since AT ignores punctuation
    * inconsistent voicing of mixed representations


