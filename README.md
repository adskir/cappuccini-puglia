# Cappuccini di Puglia — bozza del sito

Sito statico su **11ty (Eleventy)** con pannello di amministrazione **Decap CMS**, pensato per l'hosting su **Netlify**. Progetto adattato dal sito dei Cappuccini di Bielorussia (stessa struttura tecnica, contenuti tradotti/adattati in italiano).

## Cosa c'è dentro

- `src/` — tutto il codice sorgente e i contenuti del sito
  - `src/conventi/` — pagine dei conventi (al momento 3 esempi placeholder: Bari, Lecce, Foggia — da sostituire/espandere con i conventi reali)
  - `src/notizie/` — notizie (vuota, pronta per i primi contenuti)
  - `src/biblioteca/` — testi della biblioteca (preghiere, Regola, Testamento, ecc.)
  - `src/_data/settings.yml` — contatti, social (unico punto da modificare per tutto il sito)
  - `src/_data/frati.yml` — elenco dei frati che servono in Puglia
  - `src/css/style.css` — tutto il design system (ereditato dal sito bielorusso, stessa identità visiva)
- `admin/` — pannello di amministrazione (Decap CMS), interamente in italiano
- `netlify.toml` — configurazione di build e sicurezza

## Cosa è stato tradotto/adattato

- Navigazione, homepage, pagine generali dell'Ordine (San Francesco, Frati Cappuccini, Essere cappuccino, Come diventare cappuccino) — tradotte in italiano, contenuto generico non specifico alla Bielorussia
- Il Cantico di Frate Sole e la Preghiera davanti al Crocifisso sono i testi originali italiani di San Francesco (non traduzioni)
- Pagina conventi (`convento.njk`): stessa struttura di prima, con **mappa integrata** (Leaflet + OpenStreetMap, nessuna chiave API richiesta) se si inseriscono latitudine/longitudine
- Pagina Contatti: **mappa generale con tutti i conventi**, generata automaticamente dai dati inseriti in ciascuna scheda convento

## Cosa manca — TODO prima della presentazione

- [ ] **Elenco reale dei conventi** — sostituire i 3 placeholder (Bari, Lecce, Foggia) con l'elenco completo fornito dalla Provincia; per ciascuno: indirizzo, telefono, foto, coordinate (lat/lng)
- [ ] **Presenza dei Cappuccini** (`/presenza-cappuccini/`) — inserire dati reali: anno di fondazione, numero di frati, storia della Provincia
- [ ] **Patrono della Provincia** — sostituire il placeholder (era dedicato al patrono della Bielorussia)
- [ ] **Elenco dei frati** (`src/_data/frati.yml`) — nomi reali
- [ ] **Contatti della curia provinciale** (`src/_data/settings.yml`) — indirizzo, telefono, email reali
- [ ] **Logo** — sostituire `src/images/uploads/logo-capucyny.png` con il logo della Provincia
- [ ] **Foto** — tutte le immagini sono ancora quelle bielorusse o placeholder; da sostituire tramite CMS
- [ ] **Testi ufficiali della biblioteca** — Regola, Regola OFS, Testamento sono lasciati come placeholder: da inserire il testo ufficiale italiano (fonte: Fonti Francescane / ofmcap.org)
- [ ] **Link utili** — inserire i link reali (diocesi, altre province, social)

## Come deployare (stessi passaggi del sito bielorusso)

1. Crea un nuovo repository su GitHub e carica questo progetto
2. Netlify → **Add new site → Import an existing project** → collega il repository
3. Netlify → **Site configuration → Identity → Enable Identity**, poi **Invite only**
4. **Identity → Services → Git Gateway → Enable**
5. **Identity → Invite users** → invita l'email del frate responsabile dell'aggiornamento contenuti
6. Il pannello sarà su `https://tuo-sito.netlify.app/admin/`

## Sviluppo locale

```
npm install
npx @11ty/eleventy --serve
```

Il sito sarà disponibile su `http://localhost:8080`.
