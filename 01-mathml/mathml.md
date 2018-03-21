class: center, middle, inverse

# MathML and equation layout

ebookcraft 2018

Peter Krautzberger

[krautzource](https://www.krautzource.com)

---

# MathML and today's web

* MathML is dead. Long live MathML?
* Similarities and differences to sucessful web technologies.
* Making more out of MathML on the web

???
* MathML is not maintained: MathML 3 2010/14, MathWG ended 2016, no activity on public lists
* IDFP => W3C merger brings publishers' interest; but understanding?
* browser development by volunteers only and dead
* similarities and differences
  * "same" xml-ish
  * "meh" MathML is like HTML 3 not HTML 5 - no semantics, layout via markup (cf table/font/blink)
  * "diff" content in attributes, operator dictionary
* MathML still a good basis for rendering for the web
  * like print: choose an engine and go!
  * rendering: HTML+CSS, SVG, even canvas
  * still: good vehicle for creating web content
    * converters to HTML or SVG grow continuously and become simpler
  * additional information can be passed from MathML to web output due to structural similarities (eg a11y)

---

# MathML is not used natively

* MathML is not used natively
* MathML is not supported by browser vendors
* Limitations of "native" implementations
  * MathML's limitations
  * implementations are partial
  * gaps in existing implementations
  * require specialized fonts
  * Innumerable nasty little bugs (maintenance?)

Either native MathML implementations are not used or web developers do not care.


???
* MathML is not used on the web: crawler data (+ anecdotal SE evidence): not significant, almost all MathML converted with MathJax
* MathML is not supported by browser vendors
  * Google and Microsoft: no hints at interest - Mozilla and Apple: no real indication that they know, follow or care state of it
  * Gecko, WebKit: volunteer work, effectively unmaintained:  (~1 bug fix pa), 1 volunteer developer left
  * [webkit bugs](https://bugs.webkit.org/buglist.cgi?component=MathML&product=WebKit&resolution=---), [VO bugs](https://bugs.webkit.org/buglist.cgi?quicksearch=voiceover%20mathml), [webkit fixed bugs](https://bugs.webkit.org/buglist.cgi?component=MathML&order=changeddate%20DESC%2Cresolution%2Ccomponent%2Cbug_status%2Cpriority%2Cassigned_to%2Cbug_id&product=WebKit&query_format=advanced&resolution=FIXED)
  * [gecko bugs](https://bugzilla.mozilla.org/buglist.cgi?quicksearch=mathml), [gecko fixed bugs](https://bugzilla.mozilla.org/buglist.cgi?short_desc=mathml&resolution=FIXED&query_format=advanced&short_desc_type=allwordssubstr&component=MathML)
* MathML's limitations [MDN elements](https://developer.mozilla.org/en-US/docs/Web/MathML/Element), [MDN attributes](https://developer.mozilla.org/en-US/docs/Web/MathML/Attribute)
  * does not specify layout sufficiently (to accurately represent the visual intentions of the author, to ensure appropriate glyphs)
  * designed to capture print layout
  * not integrated well into web platform (adapt to context, reflow, CSS e.g. user stylesheets, RS stylesheets, reading modes, nightmode)
* implementations are highly partial, poorly documented, not standardized behavior but personal preferences of a single developer, no constructive exchange in the community
* big gaps in existing implementations (mtable, elementary math)
* require specialized fonts (OpenType Math Tables, about 10(!) fonts available, OS & browsers do not ship such fonts, and eboooks have no way of ensuring them)
* In Real Life: innumerable nasty little bugs, e.g., CSS applied/reset inconsistently, properties partially supported (negative lspace in webkit), paint issues, DOM modifications break rendering, mrow's affecting rendering (shrinkwrap), overflow lost, OL>LI lost in WebKit, webkit didn't draw fraction-lines reliably for a year


---

# MathML and accessibility

* approaches to accessibility
  * visual
  * semantic
* both don't really work ([pen](https://codepen.io/pkra/pen/YayXWX))
* (non)integration with web platform
* Assistive Technology support is weird
* [speech-rule-engine](https://github.com/zorkow/speech-rule-engine/issues) ([mathjax intro](https://www.youtube.com/watch?v=6GSgTjorewQ&index=7&list=PL1ATLkPgTEBoIBkY6Ee9rdgAJaJtISOE8))

???
* approaches to accessibility
  * visual
    * reading layout: many non-visual users ask only for the same input as visual users
    * i.e. they expect AT to "just" give the visual
  * semantic
    * provide semantic information that adequately represents the concepts in the equational content
    * Presentation MathML is void of it, ContentMathML is not around
* Visual a11y fails, e.g.,
  * mfrac bevelled
  * stretchy fences
  * moveable limits
* semantic fails
  * Presentation MathML has no semantics, Content MathML does not exist (and not supported by epub3)
  * all but mroot and mn
  * e.g., mfrac
  * e.g., hard-coded behavior msup 2, mfrac+linewidth=0
* integration with web platform
  * no modifications possible
  * MathML alttext ignored
  * MathML with aria-label
    * inconsistent support on math element
    * no support within math
* AT support
  * NVDA: only with MathPlayer, only on some browsers, only sometimes working
    * plans for integrating SRE
  * JAWS: hacks the DOM (frequently fails), undocumented level of support, easy to accidentally break with content or context
  * VoiceOver:
    * undocumented support level (don't seem to know whether their bugs are fixed)
    * lots of unknown bugs
    * very basic bugs
    * at times poor heuristics
* speech-rule-engine
  * actively developed
  * active research funding for serious innovation
  * open-source
  * company available for contract work
  * client or server-side

---

# (Raw) MathML in ebooks

* [MathJax-enabled Reading Systems](https://docs.mathjax.org/en/latest/misc/epub.html) (e.g. Readium)
* iBooks

???

* MathJax-enabled RSs (e.g. Readium)
  * this is not always clearly documented by RSs
  * MathJax has clear documentation on MathML support
    * continuous development for 7 years
    * business model
  * on iOS many Readium-based RSs skip MathJax
    * inconsistencies ensue
* iBooks
  * all problems wrt to native implementations apply
  * requires detailed testing
    * Anecdotal evidence: every time I'm asked to look at native MML, I find a new bug
  * unstable implementations
    * fraction line unstable -- no bug filed, accidentally fixed over a year later
    * current example: OL+LI+MATHBLOCK => LI is dropped
  * iBooks Author format
    * iBooks uses Pages layout engine not WebKit/Safari
    * yet more differences

---

# The MathML question

* 1998: MathML 1, 2003: MathML 2, 2010: MathML 3, 2014: MathML 3rev2, 2016: MathWG closed
* MathML is a high-level spec and browser vendors are focused on low-level APIs
* Both CSS and SVG can provide what MathML provides
* Tools can enrich MathML to provide textual descriptions and more leveraging ARIA
* The state of CSS and SVG (in ebooks) needs improvements
* The state of web accessibility (in ebooks) needs improvements

**Is MathML helping or hindering?**
