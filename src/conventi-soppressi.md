---
layout: article.njk
title: "Conventi soppressi"
permalink: /conventi-soppressi/
---
I Conventi soppressi sono comunità storiche della Provincia non più attive.

<ul class="list-columns">
{% for c in collections.conventi %}{% if c.data.status == "soppresso" %}
  <li><a href="{{ c.url }}">{{ c.data.title }}</a></li>
{% endif %}{% endfor %}
</ul>
