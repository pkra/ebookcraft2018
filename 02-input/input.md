class: center, middle, inverse

# Input formats for equation layout

ebookcraft 2018

Peter Krautzberger

[krautzource](https://www.krautzource.com)

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
* Microsoft Office ([OOML](https://blogs.msdn.microsoft.com/murrays/2006/10/06/mathml-and-ecma-math-omml/) "ECMA Math", "Unicode Math")
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
* LaTeX (subsets)
  * e.g., <a href="https://www.mathjax.org">MathJax</a>
  * e.g., <a href="https://www.mediawiki.org/wiki/Texvc">texvc</a>

???
* MathML
  * why it  dominates
    * early editing tool adoption (e.g., MathType)
    * enough vendor traction
    * success in XML-to-print
    * eternal promise of the web
  * how is it integrated?
    * most formats integrate it directly (e.g. JATS/BITS)
    * in XML, many features are handled separately despite features in MathML (e.g., mlabeldtr, annotation system)
    * binary image rendering history still plays big role
* LaTeX subsets
  * very common suggestion even in XML, e.g., JATS4Reuse
  * fixed subsets and/or grammars helped solve many problems (e.g., texvc for MediaWiki,, MathJax)
  * main issue: general macro resolution is hard, mixed content is hard
    * still many vendors seem to have found decent proprietary solutions
* Always keep the Source!
  * keep sources whenever you can, it always adds value
---

# Common Challenges

* QA & rendering issues
* math variants vs Unicode
* markup vs font engines
* Equation labels
* storing alternative formats
* general limitations


???
* Common Problems and Challenges
  * QA problems
    * usually QA means print output
    * => QA is **always** engine specific
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
      * e.g., LaTeX: store full documents or just a (math mode?) snippet
    * alttext
    * altimages
  * integrating rendering information in XML workflows
    * SVG
    * HTML+CSS never quite fits
  * limitations of both MathML and Unicode
    * mathcal
    * non-standard glyphs (e.g., Wiley Chem)
      * PUA-heavy fonts
      * TeX legacy (e.g., St Mary Road)
  * limitations of MathML
    * commutative diagrams, graphs etc
    * multi-equation alignment
    * mixed content: entry points for XML/HTML

---
