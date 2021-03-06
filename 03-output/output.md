class: center, middle, inverse

# Output Formats for equation layout

ebookcraft 2018

Peter Krautzberger

[krautzource](https://www.krautzource.com)

---

# Choose your adventure

* There is no silver bullet (but)
  * platforms
  * content
  * expectations
  * effort/resources
* real-world solutions
  * Artisinal equation layout
  * HTML+CSS with(out) font dependence
  * SVG
  * binary images
  * MathML
* accessibility
  * visual quality
  * non-visual

???
* There is no silver bullet (and obviously MathML is not it)
* main factors: platforms (which?), content (amount, type), expectations (visua&a11y quality), effort/resources
* real-world solutions
  * Artisinal equation layout (e.g., [Lea Verou](https://web.archive.org/web/20170904092652/http://lea.verou.me/2013/03/use-mathml-today-with-css-fallback/), [case study](https://codepen.io/pkra/pen/OQQVgx))
  * HTML+CSS with/out font dependence
  * SVG
  * binary images
  * native MathML
* accessibility
  * visual quality
    * high resolution
    * fit into surroundings
    * accuracy in content
  * non-visual
    * textual alternatives
    * deep labels

---

# Native MathML

* Platform specific RS
* MathJax-enabled RS

???
* Platform specific
  * iBooks
  * Azardi (Gecko-based desktop app)
  * specialized QC required
* MathJax-enabled RS
  * you'll have to check how (SVG, HTML-CSS, CommmonHTML, PreviewHTML)
  * you'll have to adapt (e.g., styling won't affect SVG)
  * some RSs will only sometimes use MathJax (E.g., Readium SDK on iOS using native)

---

# HTML-CSS

* High-quality is possible but font-dependent ([sample](../../06-sample/determinant-chtml.xhtml))
* Medium-quality is possible without font-dependence ([sample](../../06-sample/determinant-phtml.xhtml))
* Difficulties
  * overflow
  * reflow
  * RS CSS frequently cause minor glitches

???

* High-quality is possible but font-dependent
  * e.g., MathJax "CommonHTML", mathlive, KaTeX
* Medium-quality is possible without font-dependence
  * e.g., MathJax "PreviewHTML", jqmath, mathquill
* on a "collision" course
* Difficulties
  * overflow -- scroll not well supported in RSs
  * reflow
    * line-breaks in equations are difficult due to authoring (print-focus, tables, manual breaks)
    * options:
      * media-queries +  duplicate content
      * modify content/CSS (artisinal)
  * RS CSS frequently cause minor glitches
    * but maybe blame the rendering system here for lack of isolation/resets

---

# SVG

* best for most equation content ([sample](../../06-sample/determinant-svg.xhtml))
* **always** use inline SVGs
* SVG can fix "fonts"
* Difficulties
  * epubcheck false positives
  * scaling
  * surrounding non-whitespace
  * highlighting


???
* best for most equation content, especially traditional / print layout (i.e., almost all you'll get paid for)
* **always** use inline SVGs
  * `currentColor` critical for visual a11y (darkmode)
  * `title`+`desc` for non-visual a11y
  * deep links to labeled equations
* SVG fixes "fonts"
  * using paths instead of fonts means it cannot be messed up by reading systems
* Difficulties
  * epubcheck false positives: role='img', focusable, aria (-label, -labelledby, hidden)
    * bad as those workaround many AT issues
  * most but not all reading systems scale down automatically but can be quirky
  * moving surrounding non-whitespace (punctuation, hypen) into wrapper to avoid reflow artifacts
  * selection / highlighting: SVG/browsers lack the concept

---

# Rendering tools

* Rendering tools for & of the web
* By Output
  * HTML+CSS: MathJax, jqmath, mathlive, KaTeX, MathQuill
  * SVG: MathJax, WIRIS, Generic workflows
  * Canvas: fmath
* By Input
  * MathML: <a href="https://www.mathjax.org">MathJax</a>, <a href="https://mathscribe.com/author/jqmath.html">jqmath</a>, <a href="http://www.fmath.info/mathml.jsp">fmath</a>, CSS stylesheets (Don't!)
  * Other: <a href="http://mathquill.com/">MathQuill</a>, <a href="http://mathlive.io/">mathlive</a>, <a href="https://khan.github.io/KaTeX/">KaTeX</a>
  * Proprietary: <a href="http://wiris.com/">WIRIS</a>, <a href="http://sharemath.com/">ShareMath</a>

???

* tools and techniques for rendering mathematics in a web context
* MathML rendering tools
  * MathJax, jqmath, fmath
* CSS stylesheets [Don't!]
  * cf. web platform incompatibilities MathML vs CSS
  * http://jkorpela.fi/math/, http://www.zipcon.net/~swhite/docs/math/math.html
  * https://github.com/search?langOverride=&p=1&q=mathml+css&repo=&start_value=1&type=Repositories
* other rendering tools
  * MathQuill, mathlive, KaTeX
* proprietary solutions (WIRIS, sharemath)
* Generic workflows (TeX2image)

---

# Accessible equation layout

* native MathML and assistive technology
* (Non-)Interoparability with web accessibility
* Pragmatic: flat labels
* Bold: deep labels
* Tools for equations+web accessibility
  * textual alternatives
  * Manual or Automated (<a href="https://github.com/zorkow/speech-rule-engine">Speech Rule Engine</a>, <a href="https://codepen.io/pkra/full/oWjwNM/">demo</a>) (also: proprietary solutions).<br>
  * Input formats
* Samples [Android talkback + epub3](https://drive.google.com/open?id=1SqlPsX4z4OGLInPmI9XRL6p-dCRjkUF2), [Google Play Books read-aloud](https://drive.google.com/open?id=1RUZUx7WXyL5TchZab1VbKxuVgDlfF7Oe)

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
* flat labels: criticism "unnavigatable" but really just like text
* deep labels: full exploration (standards and AT limits)
* tools for making math content accessible
  * automated (speech-rule-engine)
    * proprietary: Desmos, Khan Academy
  * manual (ARIA)
* input formats can provide decent and even a11y
  * e.g. higher ed and German non-visual students learn LaTeX early on, that's what they want/need


---

# Notes on RSs (1 of 3)

- Readium JS / Chrome App
  - all ok, user font setting is not applied to math but perhaps not intentional
- Adobe Digital Edition
  - Windows: C/PHTML ok, SVG ok, a11y: NVDA ok
  - Android: SVG both, CHTML ok, Talkback OK, PHTML crashes (also: sideloading trouble)
  - iOS: SVG ok, VO fails on SVG, C/PHTML crashes app
- Bluefire Cloudshelf
  - Android: SVG ok (NOTE sets `width:100%`, so `width: auto!important` to fix), C/PHTML ok, talkback ok

<!-- - Bluefire Reader (old)
  - Android: SVG ok, C/PHTML crash the app (even OS), a11y failure (entire app)
  - iOS
    - both SVG ok. No a11y
    - C/PHTML both crash the app -->

---

# Notes on RSs (2 of 3)
- iBooks
  - SVG ok but VO ignores it (cf. notes on aria-labelledby but might also a temporary regression), CHTML ok but VO ignores aria-label, PHTML ok
- Kobo
  - Android: SVG ok, CHTML no fonts, PHTML ok, Talkback CHTML ok, SVG skipped
  - iOS: SVG ok, CHTML glitches, PHTML ok, VO fails on svgs, skips blockCHTML
- Nook
  - Android: SVG ok, C/PHTML crashes, talkback+a11ysetting skips SVG
- Google Play books
  - Android: SVGs ok (but no longer uploads), CHTML glitches, PHTML ok, talkback ok
  - Web: a mess.

---

# Notes on RSs (3 of 3)

- Tolino
  - iOS: SVG ok (despite warning "can't do epub3"), C/PHTML crashes
  - Android: SVG ok (despite warning "multimedia"), C/PHTML crashes, talkback: can't enter webview
- random
  - Edge: all ok. known a11y problems
      - inline SVGs with pop-out!
  - Lithium
      - Android: SVG ok, PHTML ok, CHTML CSS screwed up, talkback ok
  - Aldiko, Gitden, Helicon etc
      - old data: works
