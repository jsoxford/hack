---
name: "Reliable Progressive Images"
members: 
  - Dan-Q
---

Progressive Image Loading (a-la Medium) is great, but if the connection fails before or during the request of the 'full' image, the user's stuck with blurry-o-vision. This project uses a Service Worker to intercept requests for the 'big' images and handles them intelligently if the connection goes down, giving them an 'offline' overlay until the user gets back online when it continues the progressive load upon next IntersectionObserver trigger.

Limitations:

* Right now it's got the filename hard-coded. Yeah, that sucks. But it's easy to fix to bring it in line with your asset store.
* Right now it's super-inefficient: it just keeps on hammering the server until (and even after) it gets what it wants.
* I'd like it to have a "click to attempt to reload" feature. Some day, perhaps.

Repo at: https://github.com/Dan-Q/reliable-progressive-images

Demo (only until 2017-03-2017 22:30) at: https://5b28b383.ngrok.io/
