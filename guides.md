---
layout: default
title: Hack Guides
---

A **Hack Guide** will provide you with everything you need to get started with a project, and they'll also be on hand to give you help/tips along the way. (Also, they're doing this because they're awesome - so be sure to throw some high-fives their way.)

---

{% assign guides = site.guides | sort: 'name' %}
{% for guide in guides %}

<section class="guide">
  {% avatar user=guide.github size=100 %}

  <div class="details">
    <span class="name">{{ guide.name }}</span>
    <span class="github">(<a href="https://github.com/{{ guide.github }}">@{{ guide.github }}</a>)</span>
    <span class="technology"><strong>Technology:</strong> {{ guide.technology }}</span>
    <span class="content">{{ guide.content }}</span>
  </div>

</section>


{% endfor %}
