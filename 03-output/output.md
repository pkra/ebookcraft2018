
## Realistic equation layout

### Choose your adventure

* There is no silver bullet
  * and obviously MathML is not it
* main factors
  * platforms
  * content (amount, type)
  * expectations (visua&a11y quality)
  * effort/resources
* real-world solutions:
  * Artisinal equation layout
    * e.g., https://web.archive.org/web/20170904092652/http://lea.verou.me/2013/03/use-mathml-today-with-css-fallback/
    * e.g., https://codepen.io/pkra/pen/OQQVgx
  * HTML+CSS with font dependence
  * HTML+CSS without font dependence
  * SVG
  * binary images
* accessibility
  * visual quality
    * high resolution
    * fit into surroundings
    * accuracy in content
  * non-visual
    * textual alternatives
    * deep labels

## HTML-CSS

### To font or not to font

* High-quality is possible but font-dependent
* Medium-quality is possible without font-dependence

* real life issues
  * overflow:scroll not widely supported in RSs
  * automatic reflow/line-breaks are difficult
    * hack content/CSS
    * duplicate content + media-queries
  * RS CSS frequently cause minor glitches

### Tools

* MathML
  * MathJax
  * jqmath
  * CSS stylesheets [Don't!]
    * cf. web platform compatibility
    * http://jkorpela.fi/math/, http://www.zipcon.net/~swhite/docs/math/math.html
    * https://github.com/search?langOverride=&p=1&q=mathml+css&repo=&start_value=1&type=Repositories
* TeX
  * MathJax
  * MathQuill
  * mathlive
  * KaTeX
* AsciiMath etc
  * AsciiMath
  * jqmath
* Microsoft Office
  * OMML ("ECMA Math")
  * "Unicode Math"


## SVG

* best for most equation content
  * especially traditional / print layout
  * i.e., almost all you'll get paid for)
* always use inline SVGs!
  * `currentColor` critical for visual a11y (darkmode)
  * `title`+`desc` for non-visual a11y
  * deep links to labeled equations
* SVG fixes "fonts"
  * using paths instead of fonts means it cannot be messed up by reading systems
* real life issues
  * epubcheck false positives
    * role='img'
    * focusable
    * aria (-label, -labelledby, hidden)
    * bad as its needed as workaround for many ATs
  * most but not all reading systems scale down automatically
  * moving surrounding non-whitespace (punctuation, hypen) into wrapper to avoid reflow artifacts
  * selection / highlighting
    * browser engines lack support