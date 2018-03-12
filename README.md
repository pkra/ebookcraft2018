# ebookcraft 2018: Equations in ebooks

Materials for a workshop.

* input formats
* output formats
*

## MathML is not usable on the web

* MathML is not used on the web
  * All available crawler data (and anecdotal evidence from search engine) indicates that MathML is not used significantly.
  * Almost all MathML is loaded alongside MathJax, thus native browser rendering is essentially never used.
* repeat 10 times: "MathML is not supported by browsers"
  * MathML implementations in Gecko and WebKit are unmaintained volunteer implementations
    * Mozilla and Apple do not know, follow or care the state of their implementations (despite public statements to the contrary)
    * Google and Microsoft have shown no indication that they will seriously consider it (despite volunteers claiming differently)
  * https://bugs.webkit.org/buglist.cgi?component=MathML&product=WebKit&resolution=---
    * e.g., https://bugs.webkit.org/buglist.cgi?quicksearch=voiceover%20mathml
    * e.g., https://bugs.webkit.org/buglist.cgi?component=MathML&order=changeddate%20DESC%2Cresolution%2Ccomponent%2Cbug_status%2Cpriority%2Cassigned_to%2Cbug_id&product=WebKit&query_format=advanced&resolution=FIXED
  * https://bugzilla.mozilla.org/buglist.cgi?quicksearch=mathml
    * e.g., https://bugzilla.mozilla.org/buglist.cgi?short_desc=mathml&resolution=FIXED&query_format=advanced&short_desc_type=allwordssubstr&component=MathML
* serious limitations
  * MathML's limitations
    * does not specify layout
    * captures print layout
    * not integrated well into web platform
  * implementations are not standardized but the personal preferences of a single developer
    * no constructive exchange in the community
  * mtable
  * elementary math
  * require specialized fonts
    * questionable opentype spec addition
    * but OS & browsers do not ship them (and eboooks have no way of suppo)
 * most importantly: innumerable nasty little bugs
  * e.g., CSS applied/reset inconsistently, negative lspace not supported in webkit, paint issues on selection, DOM modifications break rendering, mrow's affecting rendering (shrinkwrap), overflow lost

* my conclusion:
  * 1) either native MathML implementations are not used
  * 2) or web developers do not care (they don't test their content, they don't report bugs or care if bugs get fixed)
  * 1) seems more likely

## MathML is not accessible

* what accessibility could mean?
  * visual accessibility
  * semantic accessibility

* Visual fails:
  * mfrac bevelled
  * stretchy fences
  * moveable limits
