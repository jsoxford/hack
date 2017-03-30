---
name: "Reliable Progressive Images"
members: 
  - Dan-Q
---

Progressive Image Loading (a-la Medium) is great, but if the connection fails before or during the request of the 'full' image, the user's stuck with blurry-o-vision. Can we use a Service Worker to intercept requests for 'full' images, detect download failures, and schedule re-attempts? An experimental hack idea to find out and produce a template implementation.
