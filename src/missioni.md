---
layout: article.njk
title: Missioni
image: ""
permalink: /missioni/
back_link: false
---
[TODO — TESTO DA COMPLETARE CON DATI REALI]

La Provincia di Puglia dei Frati Minori Cappuccini è presente anche fuori dai confini italiani, con missioni in Albania e in Mozambico. I frati vivono in piccole fraternità, condividendo la vita quotidiana delle comunità locali e portando avanti un cammino di evangelizzazione e servizio.

<h2 id="albania" style="font-family:var(--font-display); margin-top:40px;">Albania</h2>

<ul>
{% for m in collections.missioni %}{% if m.data.region == "Albania" %}
  <li><a href="{{ m.url }}">{{ m.data.title }}</a></li>
{% endif %}{% endfor %}
</ul>

<h2 id="mozambico" style="font-family:var(--font-display); margin-top:40px;">Mozambico</h2>

<ul>
{% for m in collections.missioni %}{% if m.data.region == "Mozambico" %}
  <li><a href="{{ m.url }}">{{ m.data.title }}</a></li>
{% endif %}{% endfor %}
</ul>

<div style="text-align:center; margin-top:40px;">
  <div style="max-width:420px; margin:0 auto;">
    {% image "/images/uploads/banner1.jpg", "Dona il 5x1000 - Segretariato Missioni Estere Cappuccini Puglia", "420px" %}
  </div>
</div>
