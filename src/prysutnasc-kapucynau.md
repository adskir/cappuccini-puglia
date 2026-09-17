---
layout: article.njk
title: Presenza dei Cappuccini
image: /images/uploads/img_9290.jpeg
permalink: /presenza-cappuccini/
back_link: false
---
[TODO — TESTO DA COMPLETARE CON DATI REALI DELLA PROVINCIA]

I Frati Minori Cappuccini sono presenti in Puglia da [TODO: anno]. [TODO: breve cenno storico sulla fondazione e sviluppo della presenza cappuccina nella regione.]

Questa comunità di frati costituisce la Provincia di Puglia "San Lorenzo da Brindisi" dell'Ordine dei Frati Minori Cappuccini, con conventi in Puglia e in Basilicata.

<h2 id="puglia" style="font-family:var(--font-display); margin-top:40px;">Puglia</h2>

<ul>
{% for c in collections.conventi %}{% if c.data.region == "Puglia" %}
  <li><a href="{{ c.url }}">{{ c.data.title }}</a></li>
{% endif %}{% endfor %}
</ul>

<h2 id="basilicata" style="font-family:var(--font-display); margin-top:40px;">Basilicata</h2>

<ul>
{% for c in collections.conventi %}{% if c.data.region == "Basilicata" %}
  <li><a href="{{ c.url }}">{{ c.data.title }}</a></li>
{% endif %}{% endfor %}
</ul>
