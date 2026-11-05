/* Cookie consent — Google Analytics and external embeds (Google Maps, YouTube)
   load only after the visitor's consent. Choice is stored for 6 months. */
(function () {
  var KEY = 'cp_cookie_consent';
  var MAX_AGE = 1000 * 60 * 60 * 24 * 182; // ~6 months
  var GA_ID = 'G-9Y5PHCNXP6';

  function readChoice() {
    try {
      var c = JSON.parse(localStorage.getItem(KEY));
      if (c && c.v && Date.now() - c.t < MAX_AGE) return c.v;
    } catch (e) {}
    return null;
  }
  function saveChoice(v) {
    try { localStorage.setItem(KEY, JSON.stringify({ v: v, t: Date.now() })); } catch (e) {}
  }

  var gaLoaded = false;
  function loadAnalytics() {
    if (gaLoaded) return;
    gaLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', GA_ID);
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
  }

  function deleteAnalyticsCookies() {
    document.cookie.split(';').forEach(function (c) {
      var name = c.split('=')[0].trim();
      if (name.indexOf('_ga') === 0) {
        var host = location.hostname;
        var domains = ['', host, '.' + host, '.' + host.replace(/^www\./, '')];
        domains.forEach(function (d) {
          document.cookie = name + '=; Max-Age=0; path=/' + (d ? '; domain=' + d : '');
        });
      }
    });
  }

  /* --- External embeds --- */
  function loadEmbed(frame) {
    var src = frame.getAttribute('data-consent-src');
    if (!src) return;
    frame.setAttribute('src', src);
    frame.removeAttribute('data-consent-src');
    frame.style.display = '';
    var ph = frame.previousElementSibling;
    if (ph && ph.classList.contains('consent-ph')) ph.remove();
  }
  function loadAllEmbeds() {
    document.querySelectorAll('iframe[data-consent-src]').forEach(loadEmbed);
  }
  function addPlaceholders() {
    document.querySelectorAll('iframe[data-consent-src]').forEach(function (frame) {
      var src = frame.getAttribute('data-consent-src');
      var isVideo = /youtube/.test(src);
      var h = frame.offsetHeight || parseInt(frame.getAttribute('height'), 10) || 320;
      var ph = document.createElement('div');
      ph.className = 'consent-ph';
      ph.style.minHeight = h + 'px';
      ph.innerHTML =
        '<p>' + (isVideo
          ? 'Questo video è fornito da YouTube (Google), che può installare cookie.'
          : 'Questa mappa è fornita da Google Maps, che può installare cookie.') +
        ' <a href="/cookie-policy/">Cookie Policy</a></p>' +
        '<button type="button" class="consent-btn consent-btn--accept">' +
        (isVideo ? 'Mostra il video' : 'Mostra la mappa') + '</button>';
      ph.querySelector('button').addEventListener('click', function () { loadEmbed(frame); });
      frame.style.display = 'none';
      frame.parentNode.insertBefore(ph, frame);
    });
  }

  /* --- Banner --- */
  var banner;
  function showBanner() {
    if (banner) { banner.hidden = false; return; }
    banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Preferenze cookie');
    banner.innerHTML =
      '<button type="button" class="cookie-banner__close" aria-label="Chiudi e rifiuta">×</button>' +
      '<p>Questo sito usa cookie tecnici e, solo con il tuo consenso, cookie di <strong>Google Analytics</strong> ' +
      'per statistiche sulle visite e contenuti di <strong>Google Maps</strong> e <strong>YouTube</strong>. ' +
      'Puoi cambiare idea in qualsiasi momento dal link «preferenze cookie» in fondo alla pagina. ' +
      '<a href="/cookie-policy/">Cookie Policy</a></p>' +
      '<div class="cookie-banner__actions">' +
      '<button type="button" class="consent-btn" data-choice="denied">Rifiuta</button>' +
      '<button type="button" class="consent-btn consent-btn--accept" data-choice="granted">Accetta</button>' +
      '</div>';
    banner.addEventListener('click', function (e) {
      var choice = e.target.getAttribute('data-choice') ||
        (e.target.classList.contains('cookie-banner__close') ? 'denied' : null);
      if (!choice) return;
      var previous = readChoice();
      saveChoice(choice);
      banner.hidden = true;
      if (choice === 'granted') { loadAnalytics(); loadAllEmbeds(); }
      else if (previous === 'granted') { deleteAnalyticsCookies(); location.reload(); }
    });
    document.body.appendChild(banner);
  }

  function init() {
    var choice = readChoice();
    if (choice === 'granted') { loadAnalytics(); loadAllEmbeds(); }
    else { addPlaceholders(); if (!choice) showBanner(); }
    document.querySelectorAll('[data-cookie-settings]').forEach(function (a) {
      a.addEventListener('click', function (e) { e.preventDefault(); showBanner(); });
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
