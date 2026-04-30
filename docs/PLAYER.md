# Player audio — Documentazione dettagliata

File sorgente: `themes/picnew/layouts/partials/footer-player.html`
(contiene sia l'HTML del player che tutto il JavaScript inline)

---

## Struttura HTML del player

Il player è diviso in due elementi distinti:

1. **`#player-expanded`** — Player espanso full-screen (solo mobile, `< 1024px`). Posizione: `fixed inset-0 z-[55]`. Inizialmente traslato fuori dallo schermo (`translateY(100%)`).
2. **`<footer>`** — Mini-player fisso in fondo alla pagina (`fixed bottom-0 ... z-50`). Sempre visibile.
3. **`#player-shortcuts-modal`** — Modale scorciatoie da tastiera (`fixed z-[60]`).

Entrambi i contenitori sono dentro `#footer-player-container` che porta `data-turbo-permanent`, garantendo persistenza tra le navigazioni Turbo.

---

## 1. Stato e ripristino (localStorage)

### Chiave: `pic_player_state`

Formato JSON salvato ogni 5 secondi:

```json
{
  "url": "https://op3.dev/.../audio/PIC148.mp3",
  "title": "Titolo episodio",
  "image": "https://cdn.../images/PIC148.jpg",
  "currentTime": 1234.56,
  "shouldPlay": true,
  "playbackRate": 1.5,
  "chaptersUrl": "https://cdn.../chapters/PIC148.json",
  "transcriptUrl": "https://cdn.../transcripts/PIC148.srt"
}
```

### Comportamento all'avvio (evento `window load`)

1. Legge `pic_player_state` da localStorage.
2. Se esiste: carica l'episodio, imposta il playback rate, cerca capitoli e trascrizione (prima dallo stato salvato, poi come fallback da `window.__playlist`).
3. Se `shouldPlay: true` tenta l'autoplay. Se il browser blocca l'autoplay e `currentTime > 5`, mostra il resume banner.
4. Se non c'è stato salvato: carica il primo episodio della playlist (`window.__playlist[0]`) in modalità pausa.

### Fallback da `window.__playlist`

Se `chaptersUrl` o `transcriptUrl` sono mancanti nello stato salvato, il player li cerca nell'entry della playlist corrispondente (match per URL audio).

### Edge case

- Se l'audio è già in riproduzione (stessa sorgente, non in pausa), `initPlayer` non reinizializza nulla per evitare click/interruzioni.
- La chiave `pic_player_state` non viene cancellata mai automaticamente; resta finché l'utente non svuota la cache o localStorage.

---

## 2. Resume banner

### Cosa fa

Mostra un banner arancione in cima al player con il messaggio "Riprendi da X:XX" quando si avvia un episodio già ascoltato parzialmente.

### Trigger

- Chiamata `playEpisode(...)`: se `pic_player_state.url === url` e `currentTime > 5`.
- All'avvio: se autoplay bloccato e `state.currentTime > 5`.

### Comportamento atteso

- Il banner appare con il tasto "Riprendi da X:XX" (button `#player-resume-confirm`) e un tasto chiudi (`#player-resume-dismiss`).
- Auto-dismiss dopo 5 secondi (`setTimeout(..., 5000)`).
- Click su "Riprendi da X:XX": imposta `audio.currentTime = pendingResumeTime`, avvia la riproduzione, nasconde il banner.
- Click sul tasto chiudi: nasconde il banner senza modificare la posizione.

### Edge case

- Il banner è soppresso quando si carica una pagina con parametro `?t=`: il `seekFromUrl` sovrascrive qualsiasi resume banner mostrato da `initPlayer`.

---

## 3. Controlli base

### Play/Pausa

- Button `#player-play` (desktop, mini-player espanso)
- Button `#player-mini-play` (mobile, quando il player è collassato)
- Button `#player-expanded-play` (player espanso mobile)
- Chiave `Spazio`

Comportamento: toggle `audio.play()` / `audio.pause()`. Aggiorna icona SVG (triangolo play / doppio rettangolo pausa) su tutti e tre i button contemporaneamente via `updatePlayIcons(svg)`. Lo status label cambia in "Ora in riproduzione" / "In pausa".

Se `window.stopSoundbite` è definito (player soundbite), viene chiamato prima di `audio.play()`.

### Skip -15 / +30 secondi

- Button `#player-prev` (−15s) e `#player-next` (+30s)
- Button equivalenti nel player espanso: `#player-expanded-prev` / `#player-expanded-next`
- Chiavi `←` (−15s) e `→` (+30s)
- Touch gestures: vedi sezione dedicata

Comportamento: clamp al range `[0, audio.duration]`. Attiva `vibrate(10)` su mobile.

### Seekbar

- Elemento `#player-progress-bar` (desktop/mobile)
- Elemento `#player-expanded-progress-bar` (player espanso)

Click sulla barra: calcola percentuale dalla posizione del click, imposta `audio.currentTime`.

Thumb visibile (`#player-seek-thumb`): compare su hover/active via CSS, segue la posizione corrente.

Aggiornamento: nell'evento `timeupdate`, `progress.style.width` viene impostato alla percentuale corrente. Anche `aria-valuenow` viene aggiornato sul `progressBar`.

Navigazione da tastiera (quando `progressBar` è in focus):
- `←` / `↑`: −2% della durata totale
- `→` / `↓`: +2% della durata totale
- `PageUp`: +10%
- `PageDown`: −10%
- `Home`: vai all'inizio
- `End`: vai alla fine

### Volume

- Slider `#player-volume` (range 0-1, step 0.05) — solo desktop (`lg:flex`)
- Button `#player-volume-btn` per muto/riattiva
- Chiave `↑` (+0.1), `↓` (−0.1), `M` (muto toggle)

Icona volume: tre stati SVG (alto, basso, muto). Al muto, il volume precedente è salvato in `prevVolume` per il ripristino.

### Velocità di riproduzione

- Select `#player-speed` (desktop) con opzioni: 0.5x, 0.8x, 1.0x, 1.2x, 1.5x, 2.0x, 2.5x, 3.0x
- Select `#player-expanded-speed` (player espanso, sincronizzato bidirezionalmente)
- Chiavi `+` / `=` (step successivo) e `-` (step precedente)

Comportamento: imposta `audio.playbackRate`. Il valore è salvato in `pic_player_state`.

### Navigazione episodi

- Button `#player-episode-prev` / `#player-episode-next`
- Equivalenti nel player espanso: `#player-expanded-episode-prev` / `#player-expanded-episode-next`

Logica: cerca l'indice corrente in `window.__playlist` tramite match parziale dell'URL audio. Prev: `idx - 1`, wrapping all'ultimo. Next: `idx + 1`, wrapping al primo.

### Navigazione capitoli

- Button `#player-chapter-prev` / `#player-chapter-next` (visibili solo se l'episodio ha capitoli)
- Equivalenti nel player espanso: `#player-expanded-chapter-prev` / `#player-expanded-chapter-next`

Prev: trova il capitolo con `startTime < currentTime - 1s` (1 secondo di tolleranza per non tornare indietro se si è appena all'inizio del capitolo). Next: trova il primo capitolo con `startTime > currentTime`.

### Collasso player (mobile)

- Button `#player-collapse-btn` con chevron animato
- Stato salvato in `localStorage` con chiave `pic_player_collapsed`
- CSS: quando `#footer-player-container` ha classe `.player-collapsed`, `.player-controls-col` e `.player-right-col` sono `display: none`, il chevron è ruotato 180°
- Il mini-play button `#player-mini-play` appare solo quando il player è collassato

---

## 4. Sleep timer

### Dove si trova

Button `#player-sleep-btn` → dropdown `#player-sleep-panel` (solo desktop, `lg:flex`).

### Opzioni

| Opzione | Valore `data-minutes` |
|---|---|
| 15 minuti | `15` |
| 30 minuti | `30` |
| 60 minuti | `60` |
| Fine episodio | `end` |
| Disattiva | `off` |

### Comportamento atteso

- Selezione di un tempo fisso: imposta un `setTimeout` che chiama `audio.pause()`. Un `setInterval` aggiorna ogni secondo il countdown mostrato nel label `#player-sleep-countdown` accanto all'icona orologio.
- Il bottone sleep diventa arancione (`text-pod-orange`) quando attivo.
- "Fine episodio": non usa timer, ma `sleepOnEnd = true`. Quando l'evento `audio ended` si scatta, chiama `clearSleepTimer()` (audio è già fermo).
- "Disattiva": chiama `clearSleepTimer()`, rimuove il countdown.
- Il dropdown si chiude cliccando fuori (event delegation sul `document`).

### Edge case

- Se si avvia un nuovo episodio mentre il sleep timer è attivo, il timer continua a girare indipendentemente dall'episodio.
- `sleepOnEnd` non si autoattiva se si lancia un nuovo episodio; rimane attivo finché non viene disattivato esplicitamente.

---

## 5. Share con timestamp (`?t=`)

### Share button (desktop)

Button `#player-share-btn` → pannello `#player-share-panel` con input `#player-share-url` (readonly) e button "Copia".

### Share button (mobile / player espanso)

Se `navigator.share` è disponibile: usa Web Share API (`navigator.share({title, text, url})`). Non mostra il pannello desktop.

### Formato URL

```
https://pensieriincodice.it/episodes/148/?t=12m34s
```

La funzione `buildShareUrl(permalink, seconds)`:
```js
const m = Math.floor(seconds / 60);
const s = Math.floor(seconds % 60);
url.searchParams.set('t', m + 'm' + (s < 10 ? '0' : '') + s + 's');
```

### Copia URL

`navigator.clipboard.writeText(url)` con fallback a `document.execCommand('copy')`. Mostra il messaggio "✓ Copiato!" per 2 secondi.

### Lettura del parametro `?t=` all'arrivo

All'evento `window load`, prima di `initPlayer()`:

1. Legge `new URLSearchParams(window.location.search).get('t')`
2. Regex: `/^(?:(\d+)m)?(?:(\d+)s)?$/` → calcola `seekFromUrl` in secondi
3. Chiama `initPlayer()` normalmente
4. Chiama `hideResumeBanner()` (sopprime il banner resume)
5. Registra un listener `once` su `loadedmetadata` che imposta `audio.currentTime = seekFromUrl`
6. Se `audio.readyState >= 1` (metadata già disponibili, es. audio cached), imposta immediatamente

**Edge case**: il parametro `?t=` sovrascrive sempre la posizione salvata in localStorage, ma non fa partire automaticamente la riproduzione (autoplay soggetto alle policy del browser).

---

## 6. Bookmarks (segnalibri)

### Storage

Chiave localStorage per episodio: `pic_bookmarks_` + `btoa(audioUrl).replace(/=/g, '')`

Formato JSON: array di oggetti `{time: float, note: string, created: timestamp}`, ordinati per `time`.

### Interfaccia

Button `#toggle-bookmarks` → pannello `#player-bookmarks-container`. Mutua esclusione con capitoli e trascrizione (apertura di uno chiude gli altri).

Button "Aggiungi" (`#player-bookmark-add`): crea un segnalibro al `currentTime` con nota vuota.

Aggiunta da expanded player: button `#player-expanded-bookmark`.

Aggiunta da keyboard: tasto `B`.

Long press sul play button nel player espanso (500ms): aggiunge segnalibro + `vibrate(50)`.

Aggiunta globale: `window.addBookmark(note)` — chiamabile da altri script.

### Renderizzazione

Ogni segnalibro mostra: timestamp arancione + testo nota (o "Segnalibro" se vuoto) + tasto elimina (visibile su hover). Click sul segnalibro: `audio.currentTime = bm.time` + play se in pausa.

### Edge case

- I segnalibri sono legati all'URL audio esatto; se il CDN cambia URL, i segnalibri vengono persi.
- Non c'è limite al numero di segnalibri per episodio.

---

## 7. Capitoli

### Caricamento

Richiesta `fetch(chaptersUrl)` → JSON (formato Podcast Chapters JSON, con campo `.chapters`). Il file è servito dal CDN (`cdn.pensieriincodice.it`). Se il fetch fallisce o il JSON non ha `.chapters`, `hideChapters()` viene chiamata.

### Struttura JSON capitoli

```json
{
  "version": "1.2.0",
  "chapters": [
    { "startTime": 0, "title": "Introduzione", "img": "..." },
    { "startTime": 120, "title": "Capitolo 1" }
  ]
}
```

### Interfaccia

Button `#toggle-chapters` (visibile solo se ci sono capitoli) → pannello `#player-chapters-container` con griglia 1-2 colonne. Mutua esclusione con trascrizione e bookmarks.

### Evidenziazione capitolo corrente

In `timeupdate`: cerca l'ultimo capitolo con `startTime <= currentTime`. Se l'indice cambia, aggiorna le classi CSS del capitolo attivo (`bg-pod-orange/20`, `border-pod-orange/40`) e chiama `updateMediaSession` con il titolo del capitolo.

### Barre di progresso per capitolo

Ogni riga capitolo ha una mini-barra di progresso (attributo `data-chapter-progress="N"`). Aggiornata in `timeupdate` via `updateChapterProgressBars()`: calcola la percentuale di completamento di ogni capitolo rispetto alla sua durata.

### Marker sulla seekbar

`renderChapterMarks()` crea elementi `.ch-mark` sovrapposti alla seekbar, posizionati tramite `left: X%`. Quelli "past" (già passati) diventano arancioni via classe `.ch-mark.past`.

### Player espanso

`syncExpandedChapters()` duplica la lista capitoli nel pannello `#player-expanded-chapters`. Click: stessa logica di seek + play.

Evidenziazione nel pannello espanso: aggiornata in `timeupdate` quando il player espanso è aperto, tramite `data-exp-ch-index`.

---

## 8. Trascrizione

### Formato

SRT (SubRip Text). Parser `parseSRT(text)`:
- Divide per blocchi vuoti (`\n\n+`)
- Regex per timecode: `HH:MM:SS,mmm --> HH:MM:SS,mmm`
- Produce array `{start: float, end: float, text: string}`

### Caricamento

Richiesta `fetch(transcriptUrl)` → testo SRT.

### Interfaccia

Button `#toggle-transcript` → pannello `#player-transcript-container` con search input e lista scrollabile (max-h: 40, con scrollbar thin arancione). Mutua esclusione con capitoli e bookmarks.

Click su un segmento: `audio.currentTime = seg.start` + play.

### Sync in tempo reale

In `timeupdate`: trova il segmento con `start <= currentTime` più recente. Se l'indice cambia:
- Rimuove highlight dal precedente
- Aggiunge `bg-pod-orange/20 text-white` al corrente
- Se il pannello è visibile e il segmento non è nascosto (filtro ricerca), chiama `scrollIntoView({block: 'center', behavior: 'smooth'})`

### Ricerca nella trascrizione

Input `#player-transcript-search`: su `input`, chiama `filterTranscript(query)`. Segmenti non corrispondenti: `display: none`. Quelli corrispondenti: testo con `<mark>` per le occorrenze (highlight arancione). L'evento `keydown` sul campo di ricerca chiama `e.stopPropagation()` per evitare conflitti con le keyboard shortcut del player.

### Player espanso

`syncExpandedTranscript()` duplica la lista nel pannello `#player-expanded-transcript`. Evidenziazione aggiornata in `timeupdate` tramite `data-exp-tr-index`. Non ha il campo di ricerca.

---

## 9. Player espanso (mobile full-screen)

### Apertura

- Click sull'immagine `#player-image-container` (solo se `window.innerWidth < 1024`)
- Swipe UP sul footer mini-player (delta Y > 40px)

### Chiusura

- Button `#player-expanded-close` (chevron giù)
- Click sull'handle bar `#player-expanded-handle`

### Animazione

CSS transform: `translateY(100%)` ↔ `translateY(0)`, transizione `0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)`.

### Contenuto

- Handle bar (drag indicator)
- Header: tasto chiudi + label "In riproduzione"
- Cover 192×192px con bordo arancione
- Titolo episodio
- Seekbar con marker capitoli + timestamp corrente/totale
- Controlli: prev episodio | prev capitolo | −15s | ▶/⏸ (grande) | +30s | next capitolo | next episodio
- Speed select + tasto bookmark + tasto share
- Tab Capitoli / Trascrizione (con area scrollabile)

### Sincronizzazione

`syncExpandedPlayer()` viene chiamata all'apertura e sincronizza: titolo, immagine, speed select, icona play, capitoli, trascrizione.

Aggiornamenti in tempo reale: seekbar (`timeupdate`), icona play (`play`/`pause`), titolo capitolo corrente (via `updateMediaSession`).

---

## 10. Touch gestures (Pointer Events API)

Attivate solo se `window.innerWidth < 1024`.

### 1. Swipe UP sul mini-player footer → apre player espanso

Threshold: delta Y > 40px sull'elemento footer.

### 2. Swipe orizzontale sul player espanso → skip

Threshold: `|dx| > 60px` e durata < 300ms.
- Swipe destra: +30s
- Swipe sinistra: −15s

Mostra feedback visivo: elemento overlay temporaneo "+30s" / "-15s" angolo in basso (scompare dopo 600ms con fade).

### 3. Double tap sul player espanso → skip

Due tap entro 300ms:
- Tap nel lato sinistro dello schermo: −15s
- Tap nel lato destro: +30s

### 4. Long press sul play button espanso → bookmark

Durata > 500ms: aggiunge segnalibro al momento corrente + `vibrate(50)`.

### 5. Drag verticale sullo speed select → cambia velocità

Ogni 10px di movimento verticale: ±0.1× di velocità (range 0.5–3.0, step 0.1).

### 6. Fine scrubbing sulla seekbar espansa

Pointer capture attivo durante il drag. La sensibilità diminuisce in base allo spostamento verticale: `sensitivity = 1 / (1 + dy * 0.05)`. Permette un posizionamento preciso trascinando obliquamente.

---

## 11. Keyboard shortcuts

Attive solo se il focus non è su `input`, `textarea`, `select`, né su un elemento `contenteditable`.

| Tasto | Azione |
|---|---|
| `Spazio` | Play / Pausa |
| `←` | −15 secondi |
| `→` | +30 secondi |
| `↑` | Volume +0.1 |
| `↓` | Volume −0.1 |
| `M` | Toggle muto |
| `+` / `=` | Velocità: step successivo |
| `-` | Velocità: step precedente |
| `0` | Torna all'inizio |
| `B` | Aggiungi segnalibro |
| `S` | Apri/chiudi sleep timer panel |
| `?` | Apri modale scorciatoie |
| `Escape` | Chiudi modale scorciatoie |

Note: `←` e `→` non agiscono se il focus è sulla seekbar (gestite dal keyboard handler dedicato della seekbar). Non agiscono se `altKey` o `metaKey` sono premuti (per non interferire con browser nav).

Modale scorciatoie: `#player-shortcuts-modal` (z-index 60), aperta da button `#player-shortcuts-btn` (icona `?`, visibile solo desktop).

---

## 12. Media Session API

Inizializzata da `updateMediaSession(title, image, chapterTitle)` alla chiamata di `playEpisode` e ad ogni cambio di capitolo.

### Metadati impostati

```js
navigator.mediaSession.metadata = new MediaMetadata({
    title: chapterTitle || episodeTitle,
    artist: "Pensieri in codice",
    album: "Pensieri in codice",
    artwork: [{src: image, sizes: '512x512', type: 'image/jpeg'}, ...]
});
```

Quando un capitolo è attivo, il campo `title` diventa il titolo del capitolo (non dell'episodio).

### Action handlers registrati

| Handler | Azione |
|---|---|
| `play` | `audio.play()` |
| `pause` | `audio.pause()` |
| `seekbackward` | −15s |
| `seekforward` | +30s |
| `previoustrack` | `prevEpisode()` se definita |
| `nexttrack` | `nextEpisode()` se definita |
| `seekto` | `audio.currentTime = details.seekTime` (try/catch per compatibilità) |

### Stato di riproduzione

Aggiornato sugli eventi `play` e `pause`:
```js
navigator.mediaSession.playbackState = 'playing' | 'paused';
```

In `timeupdate`, aggiornato `setPositionState({duration, playbackRate, position})`.

---

## 13. Listened badges (episodi ascoltati)

### Storage

Chiave `pic_listened_episodes` → array di URL audio.

Un episodio viene marcato come ascoltato quando:
- L'audio emette l'evento `ended`
- Oppure `audio.currentTime / audio.duration >= 0.9` (90% completato)

### Badge visivo

`applyListenedBadges()` scorre tutti gli elementi `[data-audio]` nella pagina. Se l'URL è nella lista, aggiunge un badge verde "✓ Ascoltato" posizionato `absolute top-3 left-3` (la card contenitore deve avere `position: relative`).

Chiamata: al `window load` e ad ogni `turbo:load`.

---

## 14. PWA / Service Worker

Il Service Worker si trova in `/static/sw.js` e viene registrato in `<head>`:

```js
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').catch(function(){});
    });
}
```

Il Web App Manifest è in `/static/manifest.json`.

---

## Funzione globale `playEpisode`

```js
window.playEpisode(url, title, image, chaptersUrl, transcriptUrl, permalink)
```

Esposta su `window` ed è il punto di ingresso per avviare la riproduzione da qualsiasi pagina. Usata dai button nei layout `index.html`, `podcast/single.html`, `podcast/list.html`.

Passi eseguiti:
1. Ferma eventuali soundbite in riproduzione (`window.stopSoundbite`)
2. Rimuove eventuali virgolette dal titolo (artefatto di `jsonify`)
3. Aggiorna titolo, immagine, link nel player (footer e espanso)
4. Chiama `updateMediaSession`
5. Se nuovo episodio: imposta `audio.src`, chiama `audio.load()`
6. Mostra il resume banner se c'è uno stato salvato con `currentTime > 5`
7. Avvia la riproduzione con `audio.play()` (promise-based, gestisce il fallback autoplay)
8. Aggiorna immagine nella UI
9. Fetch asincrono di capitoli e trascrizione
10. `updateEpisodeButtons()` (abilita/disabilita navigazione)
11. Salva immediatamente lo stato in localStorage

---

## Aggiornamenti periodici

Ogni 5 secondi (`setInterval`): salva lo stato corrente in `pic_player_state` (URL, titolo, immagine, currentTime, shouldPlay, playbackRate, chaptersUrl, transcriptUrl).

---

## Interazione con Turbo

- Il player `#footer-player-container` è `data-turbo-permanent`: non viene mai smontato durante la navigazione.
- `applyListenedBadges()` è chiamata ad ogni `turbo:load` per aggiungere badge alle card episodio nelle nuove pagine caricate.
- La sincronizzazione della nav attiva (`updateActiveNav`) è su `turbo:load`.
- Il menu mobile si chiude ad ogni `turbo:load`.

---

## Note anti-regression critiche

1. **`data-turbo-permanent`**: rimuovere questo attributo dal container del player interromperebbe la riproduzione ad ogni navigazione.
2. **`window.__playlist`**: l'oggetto deve essere generato in `<head>` prima del caricamento del player. Se manca, la navigazione prev/next episodio non funziona e il ripristino dello stato all'avvio fallisce silenziosamente.
3. **`?t=` handling**: il seek deve avvenire dopo `initPlayer()` e dopo `loadedmetadata`. Il banner resume deve essere soppresso esplicitamente via `hideResumeBanner()`.
4. **Chapters JSON**: il fetch è asincrono; i marker sulla seekbar (`renderChapterMarks`) vengono renderizzati solo quando `audio.duration` è disponibile — potenzialmente dopo il fetch dei capitoli. Esiste una chiamata a `renderChapterMarks()` anche nell'evento `loadedmetadata`.
5. **Transcript search keydown**: senza `e.stopPropagation()` nel campo di ricerca, le lettere come `B`, `S`, `M` triggereranno le keyboard shortcut del player mentre si digita.
6. **`pic_player_collapsed` localStorage**: lo stato di collasso viene riapplicato immediatamente alla pagina (riga `if (localStorage.getItem('pic_player_collapsed') === 'true')`). Modificare questa logica potrebbe causare layout shift visibile.
7. **`updateVolumeIcon`**: deve essere chiamata ogni volta che `audio.volume` o `audio.muted` cambiano per mantenere coerente l'icona.
8. **Volume e muto**: `audio.muted` e `audio.volume` sono due stati indipendenti. Il muto imposta `audio.volume = 0` ma salva il valore precedente in `prevVolume`. Il riattivo ripristina `audio.volume = prevVolume || 1`.
