# Architettura del progetto — Pensieri in Codice

## Stack tecnico

| Componente | Dettaglio |
|---|---|
| SSG | Hugo |
| Tema | `picnew` (custom, in `themes/picnew/`) |
| CSS | Tailwind CSS 3 + PostCSS, file principale `themes/picnew/assets/css/main.css` |
| Font | Custom, serviti da `/fonts/fonts.css` |
| Navigazione SPA | Turbo (Hotwire) — `turbo.es2017-umd.js` in `/static/js/` |
| Ricerca full-text | Fuse.js — `fuse.min.js` in `/static/js/` |
| PWA | Service Worker in `/static/sw.js` + manifest in `/static/manifest.json` |
| CDN media | `https://cdn.pensieriincodice.it/` (audio senza tracking) |
| CDN audio tracciato | `https://op3.dev/e/cdn.pensieriincodice.it/` (via OP3 per statistiche) |

---

## Struttura delle directory

```
/
├── config.toml              # Configurazione Hugo principale
├── content/                 # Contenuti Markdown + frontmatter TOML
│   ├── _index.md            # Homepage
│   ├── podcast/             # Episodi (1.md … 149.md …)
│   ├── blog/                # Articoli news
│   ├── autore/              # Pagina autore
│   ├── bio.md               # Bio ridotta
│   ├── contatti/            # Pagina contatti
│   ├── fonti/               # Pagina fonti
│   ├── mission/             # Pagina mission
│   ├── piattaforme/         # Dove ascoltare
│   └── sostieni/            # Pagina sostegno economico
├── data/                    # Dati strutturati (JSON / YAML)
│   ├── home.yml             # Dati homepage
│   ├── scripts/             # Trascrizioni/script per episodio (PIC1.json … PIC149.yml)
│   ├── credits/             # Crediti per stagione (season1.json, season2.json)
│   ├── partners/            # Progetti partner
│   └── projects.json        # Altri progetti del podcaster
├── static/                  # Asset statici non processati
│   ├── fonts/               # Font custom
│   ├── js/                  # fuse.min.js, turbo.es2017-umd.js
│   ├── manifest.json        # PWA manifest
│   └── sw.js                # Service Worker
└── themes/picnew/
    ├── assets/css/main.css  # CSS custom (Tailwind + override)
    └── layouts/             # Template Hugo
        ├── _default/        # Template generici
        ├── partials/        # Componenti riutilizzabili
        ├── podcast/         # Template episodi
        ├── blog/            # Template articoli
        ├── index.html       # Homepage
        ├── index.podcast.xml
        ├── index.rss.xml
        └── ...
```

---

## Layout di pagina principale (`baseof.html`)

La struttura HTML di ogni pagina:

```
<body> (flex, overflow-hidden, h-screen)
  <div #sidebar-container>     ← sidebar fissa sinistra (data-turbo-permanent)
  <main #main-content>         ← area scrollabile centrale
    partial header.html
    <div .page-content>        ← contenuto della pagina
  <div #footer-player-container>  ← player fisso in basso (data-turbo-permanent)
  <div #mobile-menu-container>    ← drawer mobile (data-turbo-permanent)
  partial search-modal.html
  <script> nav attiva + tema
```

Gli elementi `data-turbo-permanent` non vengono smontati durante le navigazioni Turbo, quindi il player continua la riproduzione tra le pagine senza interruzioni.

---

## Partials disponibili

| File | Scopo |
|---|---|
| `sidebar.html` | Barra di navigazione laterale (icone + testo su hover) |
| `header.html` | Header di pagina (ricerca, tema, hamburger mobile) |
| `footer-player.html` | Player audio globale (il componente più complesso) |
| `search-modal.html` | Modale di ricerca full-text con Fuse.js |
| `social-meta.html` | Tag Open Graph e Twitter Card |
| `platform-icon.html` | Icona SVG per piattaforma podcast/social |
| `credits.html` | Sezione crediti (usata dalla pagina sostieni) |
| `follow.html` | Link di follow social |
| `partners.html` | Griglia partner |
| `support.html` | Sezione donazioni |
| `sources.html` | Lista fonti episodio |
| `pagination.html` | Paginazione lista episodi |
| `script.html` | Contenitore script/trascrizione episodio |
| `podcast-feed.xml` | Template feed RSS podcast |

---

## Template per tipo di contenuto

| Sezione | Template | Note |
|---|---|---|
| Homepage | `index.html` | Hero ultimo episodio, griglia recenti, news, altri progetti, partner |
| Lista episodi | `podcast/list.html` | Griglia paginata, filtri tag |
| Episodio singolo | `podcast/single.html` | Schema.org JSON-LD, play button, testo, fonti, crediti, script/trascrizione, community, navigazione prev/next |
| Lista blog | `blog/list.html` | Griglia articoli |
| Articolo singolo | `blog/single.html` | |
| Taxonomy (tag) | `_default/taxonomy.html` | Lista episodi/articoli per tag |
| Sostieni | `sostieni/list.html` | Donazioni dirette, bonifico, affiliati, special_thanks |
| Piattaforme | `piattaforme/list.html` | Link a tutte le piattaforme podcast |
| Contatti | `contatti/list.html` | Form / link email |
| Fonti | `fonti/list.html` | Archivio fonti per episodio |
| Linkbio | `page/linkbio.html` | Pagina link-in-bio (Instagram) |

---

## Feed / Output alternativi

Configurati in `config.toml`:

```toml
[outputs]
home = ["HTML", "RSS", "JSON", "podcast"]
```

- `RSS` → `/index.xml` (feed RSS standard)
- `JSON` → `/index.json` (indice JSON per Fuse.js)
- `podcast` → `/podcast/index.xml` (feed podcast RSS 2.0 con tag iTunes)

---

## Configurazione chiave (`config.toml`)

| Parametro | Valore / Uso |
|---|---|
| `params.podcast.cdn_base_url` | Base URL per immagini, capitoli, trascrizioni (`cdn.pensieriincodice.it`) |
| `params.podcast.cdn_tracked_base_url` | Base URL per file audio con tracking OP3 |
| `params.podcast.image` | Cover del podcast (usata come favicon e come immagine di default del player) |
| `params.platforms` | Lista piattaforme mostrate nell'header e nella sidebar mobile |
| `params.social` | Link social (Instagram, TikTok) e community (Telegram) |
| `params.support.direct` | Link donazioni dirette (Satispay, Revolut, PayPal) |
| `params.support.wire` | Coordinate bonifico bancario |
| `params.support.affiliate` | Link affiliati |
| `params.support.special_thanks` | Ringraziamenti speciali con nome, URL e nota (es. "Design di questo sito") |
| `pagination.pagerSize` | 8 episodi per pagina |
| `summaryLength` | 20 parole per il riassunto automatico |

---

## Frontmatter episodio (`content/podcast/N.md`)

Campi principali:

```toml
title = "Titolo episodio"
date = 2024-01-01
number = 148              # numero progressivo
season = 2                # numero stagione
audio = "audio/PIC148.mp3"          # percorso relativo al CDN
image = "images/PIC148.jpg"         # cover episodio
audio_duration = 3600               # durata in secondi
chapters = "chapters/PIC148.json"   # file capitoli (opzionale)
transcript = "transcripts/PIC148.srt"  # file SRT trascrizione (opzionale)
tags = ["informatica", "storia"]
sources = [{title = "...", url = "..."}]
supporters = ["Nome sostenitore"]
```

---

## Gestione del tema (light/dark/system)

- Preferenza salvata in `localStorage` con chiave `pic_theme` (valori: `system`, `light`, `dark`)
- Anti-FOUC: script inline in `<head>` applica la classe al `<html>` prima del render
- `window.cycleTheme()` ruota tra i tre stati
- In `main.css`: variabili CSS in `:root` (dark) e `html.light`

Variabili CSS custom:

| Variabile | Dark | Light |
|---|---|---|
| `--pod-black` | `#0a0a0a` | `#faf7f2` (beige caldo) |
| `--pod-card` | `#141414` | `#fffcf8` (bianco caldo) |
| `--pod-gray` | `#a0a0a0` | `#6e645a` (grigio caldo) |
| `pod-orange` | `#E86520` / `#ff6b00` | invariato |

---

## Breakpoint responsivo

Il breakpoint principale è `1024px`, non `768px` (il `md` di Tailwind):

- `>= 1024px` → layout desktop: sidebar visibile, player full con tutti i controlli
- `< 1024px` → layout mobile/tablet: sidebar nascosta, drawer hamburger, player semplificato con collasso
- `< 1024px` + `orientation: landscape` → player ridotto in altezza, layout row

Questo breakpoint personalizzato è definito esclusivamente in `main.css` tramite media query manuali, non tramite le utility di Tailwind.

---

## Playlist JavaScript (`window.__playlist`)

Generata da Hugo in `<head>` del `baseof.html`:

```js
window.__playlist = [
  {
    title: "...",
    audio: "https://op3.dev/e/cdn.../audio/PIC148.mp3",
    image: "https://cdn.../images/PIC148.jpg",
    chapters: "https://cdn.../chapters/PIC148.json",  // o ""
    transcript: "https://cdn.../transcripts/PIC148.srt",  // o ""
    permalink: "/episodes/148/"
  },
  // ... tutti gli episodi in ordine
]
```

Usata dal player per la navigazione prev/next episodio e per il ripristino dello stato al caricamento.

---

## Modulo Hugo esterno

```toml
[module]
  [[module.imports]]
    path = "github.com/valeriogalano/podcast-feed-hugo"
```

Fornisce i template per la generazione del feed podcast RSS (`layouts/` e `archetypes/`).
