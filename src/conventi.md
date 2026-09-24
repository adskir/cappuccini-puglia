---
layout: article.njk
title: Conventi
image: /images/uploads/conventi-santa-fara.jpg
permalink: /conventi/
back_link: false
---
I Frati Minori Cappuccini sono presenti in Puglia da secoli, con una [storia di fraternità](/storia-di-fraternita/) dedicata alla preghiera e al servizio del territorio.

Questa comunità di frati costituisce la Provincia di Puglia "San Lorenzo da Brindisi" dell'Ordine dei Frati Minori Cappuccini, con conventi in Puglia, Basilicata e Albania.

<h2 id="puglia" style="font-family:var(--font-display); margin-top:40px;">Puglia</h2>

<ul class="list-columns">
{% for c in collections.conventi %}{% if c.data.region == "Puglia" %}
  <li><a href="{{ c.url }}">{{ c.data.title }}{% if c.data.status == "rettoria" %} (Rettoria){% elif c.data.status == "soppresso" %} (Convento soppresso){% endif %}</a></li>
{% endif %}{% endfor %}
</ul>

<h2 id="basilicata" style="font-family:var(--font-display); margin-top:40px;">Basilicata</h2>

<ul class="list-columns">
{% for c in collections.conventi %}{% if c.data.region == "Basilicata" %}
  <li><a href="{{ c.url }}">{{ c.data.title }}</a></li>
{% endif %}{% endfor %}
</ul>
