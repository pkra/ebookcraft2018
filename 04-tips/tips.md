class: center, middle, inverse

# Tips & Challenges

ebookcraft 2018

Peter Krautzberger

[krautzource](https://www.krautzource.com)

---

# Tips & Challenges

* reflow
  * no reliable way except manual
    * font-less CSS has best chance
    * active research into new approaches for breaking expressions up
  * left-align with labels on left to optimize space and rhythm
* overflow
  * most content will have monolithic design
    * equation layout is full of tables (equation arrays, matrices, manual line-breaks)
  * overflow:scroll - sad puppy => https://twitter.com/JiminyPan/status/973497340093960192
  * most RS will shrink SVG to fit (like other images)
    * some will have pop-out functionality
    * but often issues with inline SVG
  * for all others `svg { max-width: 100%}` should do the trick
  * some RS force SVG `width: 100%` (eg. Bluefire Cloudshelf)
    * try `width:auto!important`
  * negative margins
* mixed content
  * text and math
    * LaTeX \intertext
    * the braced equation numbering
    * the PLOS example with similar braces around labeled equations
  * graphics and math
    * diagrams (tikz)
  * => you're often better off modifying the output than the MathML
* SVG a11y
  * landscape can be iffy
  * but getting better
* beware role="math"
  * derived from role="img"
  * spec only recently gave a valid example
  * often leads to AT ignoring everything
* surrounding text
  * move surrounding text into a wrapping element to avoid odd line-breaks (especially inline)


---

# Legacy approaches and their drawbacks

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


