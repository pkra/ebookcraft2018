class: center, middle, inverse

# Equations in ebooks

Peter Krautzberger

[krautzource](https://www.krautzource.com)

---

# Equations ≠ Math

<img style="width: auto; max-width:95%; height: auto; max-height:30vh" width="658.01306" height="420.36343" src="./img/eqn-math-diagram.svg" alt="venn diagram: mathematics and equations with an intersection but neither encompassing the other">

???
* words are important
* math is not equations
* neither includes the other
* equations are layout but also beyond math
* I do mostly math, so title is fitting
* still most of this talk will be about equations
* equations are layout

---


# Authoring: Common formats


* <details>
  <summary>TeX/LaTeX</summary>
   <code>x = {-b \pm \sqrt{b^2-4ac} \over 2a}</code>
  </details>
* <details>
    <summary>(Presentation) MathML</summary>
     <code>&amp;lt;math&amp;gt; &amp;lt;mi&amp;gt;x&amp;lt;/mi&amp;gt; &amp;lt;mo&amp;gt;=&amp;lt;/mo&amp;gt; &amp;lt;mrow&amp;gt; &amp;lt;mfrac&amp;gt; &amp;lt;mrow&amp;gt; &amp;lt;mo&amp;gt;&amp;#x2212;&amp;lt;/mo&amp;gt; &amp;lt;mi&amp;gt;b&amp;lt;/mi&amp;gt; &amp;lt;mo&amp;gt;&amp;#x00B1;&amp;lt;/mo&amp;gt; &amp;lt;msqrt&amp;gt; &amp;lt;msup&amp;gt;&amp;lt;mi&amp;gt;b&amp;lt;/mi&amp;gt;&amp;lt;mn&amp;gt;2&amp;lt;/mn&amp;gt;&amp;lt;/msup&amp;gt; &amp;lt;mo&amp;gt;&amp;#x2212;&amp;lt;/mo&amp;gt; &amp;lt;mn&amp;gt;4&amp;lt;/mn&amp;gt;&amp;lt;mi&amp;gt;a&amp;lt;/mi&amp;gt;&amp;lt;mi&amp;gt;c&amp;lt;/mi&amp;gt; &amp;lt;/msqrt&amp;gt; &amp;lt;/mrow&amp;gt; &amp;lt;mrow&amp;gt; &amp;lt;mn&amp;gt;2&amp;lt;/mn&amp;gt;&amp;lt;mi&amp;gt;a&amp;lt;/mi&amp;gt; &amp;lt;/mrow&amp;gt; &amp;lt;/mfrac&amp;gt; &amp;lt;/mrow&amp;gt;&amp;lt;/math&amp;gt;</code>
    </details>
* <details>
    <summary>AsciiMath etc</summary>
     <code>x = (-b +- sqrt(b^2-4ac))/(2a)</code>
    </details>
* [OOML](https://blogs.msdn.microsoft.com/murrays/2006/10/06/mathml-and-ecma-math-omml/)
* Programming languages, CAS etc


???
* From linked data: There's no agreed upon data model for equations let alone math
* we have to start outside the web:
  * where do people author / what do vendors create
* TeX/LaTeX
  * history
  * strengths: canonical rendering, stable subsets (texvc, mathjax, jats4Reuse), made for human authoring, accessible for proficient users
  * weaknesses: TeX vs LaTeX, layout language, no semantics & not generally accessible, baroque syntax, print-focus, Chomsky Type 0, incompatible half-breeds for the web
* (Presentation) MathML
  * history
  * strengths: XML language, W3C and ISO standard
  * weaknesses: does not specify layout (only abstraction thereof), not supported by browser vendors, not made for humans, no semantics / Content MathML is  mess, not accessible
    * state of MathML Editors - a mess
    * vendors quality - a mess
* [reduce] OMML / unicodeMath
  * history, example code, https://blogs.msdn.microsoft.com/murrays/2006/10/06/mathml-and-ecma-math-omml/
  * strengths: part of Microsoft Office XML, canonical rendering, isomorphic XML and plain text format, can be converted to MathML
  * weaknesses: no semantics, limited to Office, poorly documented, licensing issues for tools
* [reduce] AsciiMath
  * history, example code
  * strengths: made for tiny humans, easy to convert to MathML or TeX, limited expressivity makes it somewhat accessible
  * weakness: limited expressivity, not well established, not standardized
* [reduce] programming language syntaxes
  * CAS (maple, mathematica), scientific computing (sciPy, R, Julia), general purpose languages (java)
    * example code, e.g. https://reference.wolfram.com/language/guide/MathematicalTypesetting.html
  * strengths: computational ability, perfectly semantic, made for programmers, easily converted to other formats
  * weaknesses: limited expressivity, only procedural / not conceptual, barebones syntax, not made for humans, not actually leveraged for anything (e.g., accessibility)

---

# Authoring: Tools


* Raw text
* <details>
    <summary>Specialist Editors</summary>
    e.g., WIRIS, MathMagic, MathQuill, MathLive, MathType, MathFlow, HostMath
    </details>
* <details>
    <summary>Built-in editors</summary>
    e.g., MS Word & LibreOffice, Maple & Mathematica & MathWorks
    </details>


???
* raw text (TeX etc)
* Specialist Editors (MathType, MathFlow, MathMagic, WIRIS, MathQuill, HostMath, MathLive)
  * almost all editors can produce more than one format
  * many have custom/proprietary internal format, often used for more functionality (e.g., accessibility features)
* Built-in editors (MS Word & LibreOffice, Maple & Mathematica & MathWorks)
  * like specialists but focused on integrating into their host apps

---

# Equations in XML workflows

* [MathML, MathML, and MathML](https://www.w3.org/TR/MathML/)
* <details>
    <summary>LaTeX (subsets)</summary>
    e.g., <a href="https://www.mathjax.org">MathJax</a>, <a href="https://www.mediawiki.org/wiki/Texvc">texvc</a>
    </details>
* Really, use the Source, Luke!



???
* 10min
* MathML
  * why it  dominates
    * early editing tool adoption (e.g., MathType)
    * enough vendor traction
    * success in XML-to-print
    * eternal promise of the web
  * how is it integrated?
    * most formats integrate it directly (e.g. JATS/BITS)
    * in XML, many features are handled separately desipte features in MathML (e.g., mlabeldtr, annotation system)
    * binary image rendering history still plays big role
* LaTeX subsets
  * very common suggestion even in XML, e.g., MathJax in JATS4Reuse
  * fixed grammars are straight forward (e.g., texvc for MediaWiki)
  * main issue: general macro resolution is hard
    * still many vendors seem to have found decent proprietary solutions
* Use the Source!
  * keep sources whenever you can, it always adds value
* Common Problems and Challenges
  * QA problems
    * usually QA means print output
    * QA is always engine specific
      * leading to problems when using different engines (e.g., print and web)
  * rendering problems (e.g, wrong stretchy rules, confusion about unclear display style rules)
  * mathvariants vs (non-BMP) Unicode
    * Unicode math alphabets come out of print, dubious elsewhere
  * markup vs font engines
    * combining characters (e.g., accents)
    * in markup or via font/unicode renderin?
  * the equation label conundrum
    * document-level information (especially when auto-numbering)
    * where to keep them in an XML workflow
  * storing alternative formats
    * in XML (e.g. JATS <alternatives>) vs MathML <annotation>
    * source formats
      * e.g., LaTeX: store full documents or just (math mode?) snippet
    * alttext
    * altimages
  * integrating rendering information in XML workflows
    * SVG
    * HTML+CSS doesn't quite fit
  * limitations of both MathML and Unicode
    * mathcal
    * non-standard glyphs (Wiley Chem)
      * PUA-heavy fonts
      * TeX legacy (St Mary Road)
  * limitations of MathML
    * commutative diagrams, graphs etc
    * multi-equation alignment
    * entry points for XML/HTML

---

    # XML workflows: Common Challenges


* QA & rendering issues
* math variants vs Unicode
* markup vs font engines
* Equation labels
* storing alternative formats
* general limitations


???
* 5min
* Common Problems and Challenges
  * QA problems
    * usually QA means print output
    * QA is always engine specific
      * leading to problems when using different engines (e.g., print and web)
  * rendering problems (e.g, wrong stretchy rules, confusion about unclear display style rules)
  * mathvariants vs (non-BMP) Unicode
    * Unicode math alphabets come out of print, dubious elsewhere
  * markup vs font engines
    * combining characters (e.g., accents)
    * in markup or via font/unicode renderin?
  * the equation label conundrum
    * document-level information (especially when auto-numbering)
    * where to keep them in an XML workflow
  * storing alternative formats
    * in XML (e.g. JATS <alternatives>) vs MathML <annotation>
    * source formats
      * e.g., LaTeX: store full documents or just (math mode?) snippet
    * alttext
    * altimages
  * integrating rendering information in XML workflows
    * SVG
    * HTML+CSS doesn't quite fit
  * limitations of both MathML and Unicode
    * mathcal
    * non-standard glyphs (Wiley Chem)
      * PUA-heavy fonts
      * TeX legacy (St Mary Road)
  * limitations of MathML
    * commutative diagrams, graphs etc
    * multi-equation alignment
    * entry points for XML/HTML

---

# MathML and today's web


* MathML is dead. Long live MathML!
* Similarities and differences to sucessful web technologies.
* Making more out of MathML on the web

???

* 10 min
* MathML is effectively dead
  * Math WG dead
  * browser development by volunteers only and dead
  * MathML is used on the web only in combination with JS rendering engine
    * at most as accessibility alternative, with non-MathML visual rendering
  * => standard frozen. Bad for everyone.
    * eternal hope for the web is preventing the XML success of MathML to move forward
* similarities and differences
  * same: xml-ish
  * meh: MathML is like HTML 3 not HTML 5
    * no semantics
    * layout in markup (table/font/blink)
  * diff: content in attributes, operator dictionary
* make more of it on the web!
  * MathML a good basis for rendering for the web
    * much like print: choose an engine and go
  * HTML+CSS, SVG, even canvas
  * but MathML still provides a good vehicle for creating web content
    * converters to HTML or SVG grow continuously and become simpler
  * additional information can be passed from MathML to web output due to structural similarities
    * see a11y below


---

# Rendering equations on the web


* Rendering tools for & of the web
      * MathML: <a href="https://www.mathjax.org">MathJax</a>, <a href="https://mathscribe.com/author/jqmath.html">jqmath</a>, <a href="http://www.fmath.info/mathml.jsp">fmath</a>
      * Other: <a href="http://mathquill.com/">MathQuill</a>, <a href="http://mathlive.io/">mathlive</a>, <a href="https://khan.github.io/KaTeX/">KaTeX</a>
      * Proprietary: <a href="http://wiris.com/">WIRIS</a>, <a href="http://sharemath.com/">ShareMath</a>
* Client vs server-side

> I'd just as soon kiss a Printer!

???

* tools and techniques for rendering mathematics in a web context
* 15 min
* MathML rendering tools
  * MathJax, jqmath, fmath
* other rendering tools
  * MathQuill, mathlive, KaTeX
* proprietary solutions (WIRIS, sharemath, )
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

* 10 min
* MathML and accessibility
  * understanding MathML's role
  * state of assistive technology for "plain" MathML
    * JAWS
    * VoiceOver
    * ChromeVox
    * MathPlayer
* interoperability with other standards (HTML, ARIA etc)
  * :-(
* tools for making math content accessible
  * automated (speech-rule-engine)
    * proprietary: Desmos, Khan Acadeym
  * manual (ARIA)

---

# Future(s) of math on the web


* Future of MathML
* Future of visual equation rendering
* Future of accessible equation rendering
* Future of mathematical content

???
* 10 min
* future of MathML
  * Part ways; deprecate from the web
  * Save it for XML and print - extend, clarify, fix
  * learn from what happens on the web
* future of equation rendering
  * CSS (variable fonts, grid, container queries)
  * Houdini (maybe)
  * web components (maybe)
* future of accessible rendering
  * ARIA all the things
  * AOM

