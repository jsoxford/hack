---
layout: default
---

# Hack guides

A **Hack Guide** will provide you with everything you need to get started with a project, and they'll also be on hand to give you help/tips along the way.  (Also, they're doing this because they're awesome - so be sure to throw some high-fives their way.)

There's a limited number of spots available with each Guide - so make sure you're able to make the most of them!

---

{% for guide in site.guides %}

### {% avatar user=guide.github size=100 %} {{ guide.name }}
{{ guide.technology }}

{% endfor %}
