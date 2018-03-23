---
name: "Headless Automated Chromiddleware (HAC)"
members: 
  - Dan-Q
---

A programmable middleware interface, powered by Headless Chrome, to produce standard machine-readable output (e.g. RSS) from SPAs.

----

As a fan of the free, open, standards-compliant Web/that whole hippyish Indieweb movement, it drives me nuts when I can't get a sensible machine readable RSS feed (or other machine-readable API) of a website, especially on JS-heavy single-page apps. Headless Chrome can fix this.

I want to implement a framework for expressing 'feeds' in terms of JS code and CSS selectors, such that Headless Chrome can scrape the necessary parts of the application and expose a feed of the appropriate type. In other words, it's a way of adding an API to a site that doesn't have one.
