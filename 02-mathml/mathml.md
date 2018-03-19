## MathML

### MathML is not usable on the web

* MathML is not maintained
  * MathML 3 2010
  * MathML 3 second edition 2014
  * MathWG expired in 2016
  * no activity on lists
  * IDFP => W3C merger
* MathML is not used on the web
  * All available crawler data (and anecdotal evidence from search engine) indicates that MathML is not used significantly.
  * Almost all MathML is rendered with MathJax, thus native browser rendering is essentially never used.
* MathML is not supported by browsers
  * MathML implementations in Gecko and WebKit are volunteer implementations, effectively unmaintained  (~1 minor change per year)
    * it's down to just 1 volunteer developer
    * No indication that Mozilla and Apple do know, follow or care the state of the implementations (despite public statements to the contrary)
    * Google and Microsoft have shown no indication that they will seriously consider it
  * https://bugs.webkit.org/buglist.cgi?component=MathML&product=WebKit&resolution=---
    * e.g., https://bugs.webkit.org/buglist.cgi?quicksearch=voiceover%20mathml
    * e.g., https://bugs.webkit.org/buglist.cgi?component=MathML&order=changeddate%20DESC%2Cresolution%2Ccomponent%2Cbug_status%2Cpriority%2Cassigned_to%2Cbug_id&product=WebKit&query_format=advanced&resolution=FIXED
  * https://bugzilla.mozilla.org/buglist.cgi?quicksearch=mathml
    * e.g., https://bugzilla.mozilla.org/buglist.cgi?short_desc=mathml&resolution=FIXED&query_format=advanced&short_desc_type=allwordssubstr&component=MathML
* Limitations of "native" implementations
  * MathML's limitations
    * does not specify layout sufficiently
        * accurately represent the visual intentions of the author
        * faithful layout
        * appropriate glyphs
        * the question you should be asking: what's the basis of this?
    * designed to capture print layout
    * not integrated well into web platform
      * adapt to context
      * reflow
      * CSS (e.g. user stylesheets, RS stylesheets, reading modes, nightmode)
  * implementations are highly partial
    * poorly documented
    * not standardized behavior but personal preferences of a single developer
    * no constructive exchange in the community
  * big gaps in existing implementations
    * mtable
    * elementary math
  * still require specialized fonts (just like HTML+CSS)
    * OpenType Math Tables
    * a Microsoft extension for Word suddenly standardized after 10 years
    * about 10(!) fonts available
    * native implementations need it but OS & browsers do not ship such fonts
    * (and eboooks have no way of ensuring them)
 * In Real Life: innumerable nasty little bugs, e.g.,
  * CSS applied/reset inconsistently
  * properties partially supported (negative lspace in webkit)
  * paint issues
  * DOM modifications break rendering
  * mrow's affecting rendering (shrinkwrap)
  * overflow lost
  * OL>LI lost in WebKit,
  * webkit didn't draw fraction-lines reliably for a year

<p data-height="265" data-theme-id="dark" data-slug-hash="MVeYvY" data-default-tab="html,result" data-user="pkra" data-embed-version="2" data-pen-title="MML vs CSS" class="codepen">See the Pen <a href="https://codepen.io/pkra/pen/MVeYvY/">MML vs CSS</a> by Peter Krautzberger (<a href="https://codepen.io/pkra">@pkra</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

* my conclusion:
  * 1) either native MathML implementations are not used
  * 2) or web developers do not care (they don't test their content, they don't report bugs or care if bugs get fixed)
  * which seems more likely?

### MathML is not accessible

* approaches to accessibility
  * visual
    * reading layout: many non-visual users ask only for the same input as visual users
    * i.e. they expect AT to "just" give the visual
  * semantic
    * provide semantic information that adequately represents the concepts in the equational content
    * Presentation MathML is void of it

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
    * very basic bugs which
    * at times poor heuristics
    * at tim
<p data-height="265" data-theme-id="dark" data-slug-hash="YayXWX" data-default-tab="html,result" data-user="pkra" data-embed-version="2" data-pen-title="MathML samples for AT" class="codepen">See the Pen <a href="https://codepen.io/pkra/pen/YayXWX/">MathML samples for AT</a> by Peter Krautzberger (<a href="https://codepen.io/pkra">@pkra</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>


* speech-rule-engine
  * actively developed
  * active research funding for serious innovation
  * open-source
  * company available for contract work
  * client or server-side
  *

### in real life ebooks

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
    * Anecdotal evidence: every time I'm asked to look at content, I find a new bug
  * unstable implementations
    * fraction line lost
    * OL+LI+MATHBLOCK
  * iBooks Author format
    * iBooks uses Pages layout engine not WebKit/Safari
    * yet more differences
