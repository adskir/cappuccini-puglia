---
layout: article.njk
title: "Rettorie"
description: "Le Rettorie dei Frati Minori Cappuccini di Puglia: chiese e comunità dove continua il servizio liturgico e pastorale."
permalink: /rettorie/
---
Le Rettorie sono chiese e comunità dove i frati non risiedono più stabilmente, ma dove il servizio liturgico e pastorale continua ad essere garantito.

<ul class="list-columns">
{% for c in collections.conventi %}{% if c.data.status == "rettoria" %}
  <li><a href="{{ c.url }}">{{ c.data.title }}</a></li>
{% endif %}{% endfor %}
</ul>
