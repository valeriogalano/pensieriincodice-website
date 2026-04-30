# Funzionalità del sito — Panoramica generale

Pensieri in Codice è un sito Hugo per il podcast omonimo gestito da Valerio Galano. Questa pagina documenta tutte le funzionalità lato front-end come riferimento anti-regression.

---

## Navigazione e layout

### Sidebar desktop (`sidebar.html`)

- Presente solo su schermi `>= 1024px` (`#sidebar-container` è `display: none` su mobile via CSS)
- Larghezza collassata: 80px (solo icone). Su hover: espansione a 264px con label testuali (transizione CSS 300ms)
- Logo in alto: su hover del gruppo, l'immagine del logo si ingrandisce da 40px a 80px
- Voci di menu: Home, Episodi, Soundbites, News, Fonti, Mission, Autore, Sostieni (in arancione), Piattaforme, Contatti
- Link "Sostieni" sempre arancione (`text-pod-orange`), non grigio
- Voce attiva: classe `active-link` con bordo sinistro arancione e testo bianco; calcolata server-side (Hugo) tramite confronto del percorso
- Overflow verticale: nascosto di default, visibile automaticamente su hover (`.glass-sidebar:hover nav { overflow-y: auto }`)

### Header di pagina (`header.html`)

Presente su tutte le pagine. Contiene:
- Desktop: barra di ricerca (click apre modal), icone tema/social/piattaforme
- Mobile: logo brand + icona ricerca + hamburger menu

**Cambio tema**: ciclo `system → light → dark` via `window.cycleTheme()`. Stato in localStorage `pic_theme`.

### Menu mobile (`baseof.html`)

Drawer da sinistra (`#mobile-menu-drawer`), z-index 70, overlay scuro z-60. Aperto dall'hamburger (`#mobile-menu-toggle`) via event delegation. Si chiude cliccando l'overlay, il tasto X, o navigando su un link. Si chiude automaticamente su `turbo:load`.

### Navigazione con Turbo

Tutte le navigazioni interne sono gestite da Turbo (SPA-like): solo il `<main>` viene sostituito. Sidebar, player e menu mobile sono `data-turbo-permanent` e non vengono mai smontati.

---

## Homepage (`index.html`)

### Hero — Ultimo episodio

- Card grande con immagine cover, numero episodio, data, titolo, tags (max 3), riassunto, durata audio e button "Ascolta Ora"
- Badge "Ultima Uscita" in alto a destra (scompare su mobile: `position: static`)
- Glow arancione animato al hover sul bordo della card
- Il button "Ascolta Ora" chiama `playEpisode(...)` con tutti i parametri (audio URL, titolo, immagine, capitoli, trascrizione, permalink)

### Episodi recenti

- Griglia 3 colonne (1 su mobile, 2 su tablet). Mostra episodi 2-4 (il primo è nell'hero)
- Ogni card: immagine con overlay play su hover, numero, data, titolo (link), riassunto, 2 tag, button play piccolo
- Link "Vedi tutto →" → `/episodes/` (nascosto su mobile nella sezione header, visibile come `mobile-see-all` sotto la griglia)

### News recenti

- Griglia 3 colonne degli ultimi 3 articoli blog
- Ogni card: immagine feature (opzionale), data, titolo, riassunto, link "Scopri →"

### Altri progetti (`data/projects.json`)

- Griglia di card per altri podcast/progetti di Valerio
- Ogni card: immagine quadrata, network, titolo, descrizione, link esterno

### Progetti amici (`data/partners/partners.json`)

- Fila di loghi circolari con nome, semi-trasparenti (opacity-70), diventano opachi su hover
- Se l'entry ha un campo `image`: mostra l'immagine; altrimenti il nome testuale

---

## Lista episodi (`podcast/list.html`)

- URL: `/episodes/`
- Griglia paginata (8 episodi per pagina, definito in `config.toml`)
- Ogni card analoga alle card episodi della homepage (immagine, numero, data, titolo, riassunto, tags, play button)
- Badge "Ascoltato" verde: appare dopo che l'episodio è stato completato almeno al 90% (gestito dal player via `applyListenedBadges()`)

---

## Pagina episodio singolo (`podcast/single.html`)

URL: `/episodes/{numero}/` (permalink configurato in `config.toml`)

### Header episodio

- Numero, data, stagione (se presente), titolo H1, tag cliccabili, button "Ascolta l'episodio"
- Il button chiama `playEpisode(...)` con audio, capitoli, trascrizione

### Immagine cover

Mostrata solo se `image` è nel frontmatter.

### Contenuto

Testo Markdown renderizzato con `prose prose-invert` (Tailwind Typography).

### Sostenitori dell'episodio

Se `supporters` è nel frontmatter: lista di badge con i nomi.

### Sostieni il progetto

Links diretti a Satispay, Revolut, PayPal + links affiliati.

### Fonti dell'episodio

Se `sources` è nel frontmatter: lista di link con titolo.

### Partner (`data/partners/partners.json`)

Lista partner con link.

### Crediti (`data/credits/season{N}.json`)

Caricati in base al campo `season` del frontmatter.

### Script / Trascrizione (`data/scripts/PIC{N}.yml`)

Sezione collassabile (default: nascosta). Se il dato ha campo `segments`: etichetta "Trascrizione dell'episodio", altrimenti "Script dell'episodio". Il testo viene renderizzato come Markdown.

### Community

Link a Canale Telegram e Gruppo Telegram.

### Navigazione prev/next

`.PrevInSection` / `.NextInSection` di Hugo.

### Schema.org JSON-LD

In `<head>`: tipo `PodcastEpisode` con url, name, datePublished, description, timeRequired, associatedMedia, image, partOfSeries.

---

## Pagine tag (`_default/taxonomy.html`)

- URL: `/tags/{slug}/`
- Lista di episodi e articoli con quel tag

---

## Pagina Sostieni (`sostieni/list.html`)

Sezioni:
1. **Donazioni dirette**: link a Satispay, Revolut, PayPal (con nota "applica commissioni" per PayPal)
2. **Bonifico bancario**: dati da `params.support.wire` (beneficiario, IBAN, BIC, banca)
3. **Link affiliati**: da `params.support.affiliate`
4. **Ringraziamenti speciali**: da `params.support.special_thanks` — ogni entry ha nome, URL e nota (ruolo)

I "Ringraziamenti speciali" sono pilotati esclusivamente da `config.toml`, parametro `[[params.support.special_thanks]]`.

---

## Ricerca (`search-modal.html`)

- Trigger: icona lente nell'header desktop, o icona lente mobile
- Indice JSON: `/index.json` (generato da `_default/index.json`)
- Libreria: Fuse.js (ricerca fuzzy)
- Modale: overlay scuro + input centrato. Risultati mostrati in lista mentre si digita.

---

## Soundbites

- URL: `/soundbites/`
- Brevi clip audio separate dall'archivio episodi principale
- Il player soundbite e il player principale sono mutuamente esclusivi: `window.stopSoundbite` viene chiamata dal player principale, `window.stopSoundbite` può essere definita dal player soundbite

---

## Pagina Piattaforme (`piattaforme/list.html`)

Elenco completo di tutte le piattaforme podcast da `params.platforms` (RSS, Spotify, Apple Podcasts, YouTube Music, Amazon Music, Podcast Addict).

---

## Feed RSS e Podcast

| URL | Formato |
|---|---|
| `/index.xml` | RSS standard (blog + episodi) |
| `/podcast/index.xml` | Feed podcast RSS 2.0 con tag iTunes/Podcast |
| `/blog/rss.xml` | Feed RSS solo blog |

---

## PWA (Progressive Web App)

- Manifest: `/static/manifest.json`
- Service Worker: `/static/sw.js` (registrato all'evento `load`)
- Touch icon: immagine podcast come `apple-touch-icon`
- Installabile su iOS/Android

---

## Tema light/dark

**Valori chiave in CSS (`:root` / `html.dark`):**

| Variabile | Dark | Light |
|---|---|---|
| `--pod-black` | `#0a0a0a` | `#faf7f2` |
| `--pod-card` | `#141414` | `#fffcf8` |
| `--pod-gray` | `#a0a0a0` | `#6e645a` |
| `pod-orange` | `#E86520` / `#ff6b00` | invariato |

Override light theme notabili:
- Testo `text-white` → `rgb(26 21 16)` (quasi nero)
- Bordi `border-white/5` → `rgba(0,0,0,0.08)`
- Sfondi `bg-white/5` → `rgba(0,0,0,0.04)`
- Play button del player: background nero su sfondo chiaro
- `.prose-invert` ridefinito completamente per il light theme
- `.glass-sidebar`: background `rgba(250,247,242,0.92)` + blur

---

## Accessibilità

- Link "Salta al contenuto principale" (`.skip-link`), visibile solo su focus
- Tutti i button interattivi hanno `aria-label`
- Seekbar: `role="slider"`, `aria-valuemin/max/now`
- Resume banner: `role="status"`, `aria-live="polite"`
- Player footer: `role="region"`, `aria-label`
- Player espanso: `role="dialog"`, `aria-modal`, `aria-hidden` gestito dinamicamente
- Modale scorciatoie: `role="dialog"`, `aria-modal`
- Capitoli, trascrizione, bookmarks container: `aria-live="polite"`
- Mobile: touch target minimi 44×44px su tutti i button del player (CSS `@media (max-width: 1023px)`)
- Font mono: JetBrains Mono per timestamp e label tecnici

---

## Classi CSS custom rilevanti

| Classe | Scopo |
|---|---|
| `.glass-sidebar` | Sidebar con blur e bordo arancione semitrasparente |
| `.active-link` | Link di navigazione attivo: bordo sinistro arancione |
| `.orange-glow` | Card con glow arancione su hover |
| `.player-collapsed` | Player compresso (mobile): nasconde i controlli |
| `.ch-mark` | Marker capitolo sulla seekbar |
| `.ch-mark.past` | Marker capitolo già passato (arancione) |
| `.seek-thumb` | Thumb bianco sulla seekbar (visibile su hover) |
| `.sb-card-active` | Card soundbite in riproduzione |
| `.pic-listened-badge` | Badge "Ascoltato" verde sulle card episodio |
| `.mobile-see-all` | Link "Vedi tutto" sotto le griglie (visibile solo mobile) |
| `.skip-link` | Link accessibilità "Salta al contenuto" |

---

## LocalStorage — chiavi usate dal sito

| Chiave | Contenuto |
|---|---|
| `pic_player_state` | Stato completo del player (URL, tempo, velocità, …) |
| `pic_player_collapsed` | `"true"` se il player mobile è collassato |
| `pic_theme` | Preferenza tema: `system`, `light`, `dark` |
| `pic_listened_episodes` | Array di URL audio degli episodi ascoltati |
| `pic_bookmarks_{base64url}` | Array di segnalibri per uno specifico episodio |
