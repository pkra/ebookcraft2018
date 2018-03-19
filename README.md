# ebookcraft 2018: Equations in ebooks

Materials for a workshop.

## Summary

Handling equations in ebooks continues to be a paint point when dealing with STEM content on any level. Luckily, there are a growing number of open-source tools that try to pragmatically solve this problem for the web. Even more luckily, many of these tools can be used in ebook production. Still,  there is no silver bullet and it remains tricky to identify the best possible technique for your content.

We will dive into pragmatic approaches to solving the most common production problems. This includes both visually appealing and accessible rendering for scenarios ranging from manual hand-wrangling to large-scale automation, from optimized solutions for particular platforms to solutions that work across many platforms. In particular, we will tackle:

* How to convert common equation input formats (e.g., TeX, AsciiMath, MathML) using open source tools
* Considerations for equations that are authored for print (e.g., manual line-breaks, tabular layout)
* Pros&Cons of equation rendering formats (HTML+CSS vs SVG vs binary images)
* How to identify the best technology given...
  * specific content
  * specific ebook platforms (e.g., Kindle, ADE, iBooks, Kobo, Google Play Books, Tolino, Bluefire)
  * across ebook platforms
* How to provide both visual and accessible rendering
* How to handle equations at scale

The workshop will combine practical advice from several years of R&D, introduce you to open-source tools that help you handle equational content and get you started on integrating these tools with your own production workflow. The techniques we apply will build on well-established and open-source software so as to remain flexible as your tool chain (and ebook platforms) evolve.

Some knowledge of the command line and NodeJS will be useful but not strictly necessary.
