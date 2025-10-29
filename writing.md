<!-- writing.md at repo root -->
---
layout: page
title: Writing
permalink: /writing/
---

Welcome to my longer-form essays and notes.

{% assign essays = site.writing | sort: "date" | reverse %}
<ul>
  {% for post in essays %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span>— {{ post.date | date: "%b %-d, %Y" }}</span>
      {% if post.excerpt %}
        <p>{{ post.excerpt | strip_html | truncate: 160 }}</p>
      {% endif %}
    </li>
  {% endfor %}
</ul>
