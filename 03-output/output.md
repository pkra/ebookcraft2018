
# Output formats for equation layout


# Choose your adventure

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

---

# MathML

* RS specific checks necssary

* MathJax-enabled RS
  * you'll have to check how (SVG, HTML)
  * you'll have to adapt (e.g., styling won't affect SVG)
  * what if they only sometimes use it?
  * seems unreliable

---

# HTML-CSS

## To font or not to font

* High-quality is possible but font-dependent
* Medium-quality is possible without font-dependence

* real life issues
  * overflow:scroll not widely supported in RSs
  * automatic reflow/line-breaks are difficult
    * hack content/CSS
    * duplicate content + media-queries
  * RS CSS frequently cause minor glitches

---

# SVG

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

---

# Rendering tools


* Rendering tools for & of the web
      * MathML: <a href="https://www.mathjax.org">MathJax</a>, <a href="https://mathscribe.com/author/jqmath.html">jqmath</a>, <a href="http://www.fmath.info/mathml.jsp">fmath</a>, CSS stylesheets (Don't!)
      * Other: <a href="http://mathquill.com/">MathQuill</a>, <a href="http://mathlive.io/">mathlive</a>, <a href="https://khan.github.io/KaTeX/">KaTeX</a>
      * Proprietary: <a href="http://wiris.com/">WIRIS</a>, <a href="http://sharemath.com/">ShareMath</a>
      * Generic workflows
* Client vs server-side


???

* tools and techniques for rendering mathematics in a web context
* MathML rendering tools
  * MathJax, jqmath, fmath
* CSS stylesheets [Don't!]
  * cf. web platform compatibility
  * http://jkorpela.fi/math/, http://www.zipcon.net/~swhite/docs/math/math.html
  * https://github.com/search?langOverride=&p=1&q=mathml+css&repo=&start_value=1&type=Repositories
* other rendering tools
  * MathQuill, mathlive, KaTeX
* proprietary solutions (WIRIS, sharemath)
* client vs server-side
  * go server for performance
  * add client for enhancements
* a word on web-based print (Antenna House, Prince, Vivliostyle)


---

# Accessible math on the web

* MathML and assistive technology
* (Non-)Interoparability with web accessibility
* <details>
  <summary>Tools for equations+web accessibility</summary>
  Automated: <a href="https://github.com/zorkow/speech-rule-engine">Speech Rule Engine</a> (<a href="https://codepen.io/pkra/full/oWjwNM/">demo</a>) (also: proprietary solutions).<br>
  Manual: ARIA labels
  </details>
* Other authoring formats and accessibility

???
* MathML and accessibility
  * understanding MathML's role
  * state of assistive technology for "plain" MathML
    * JAWS
    * VoiceOver
    * ChromeVox
    * MathPlayer
* no interoperability with other standards (HTML, ARIA etc)
  * :-(
* tools for making math content accessible
  * automated (speech-rule-engine)
    * proprietary: Desmos, Khan Acadeym
  * manual (ARIA)

