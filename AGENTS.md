# Pensieri in Codice — note per gli agenti AI

Questo è il file di istruzioni del repository. `CLAUDE.md` rimanda qui: si modifica **solo
questo**, così non esistono due copie da tenere allineate.

## Il progetto
Pensieri in Codice è un podcast indipendente portato avanti da **una sola persona**: Valerio Galano.
Usare sempre la seconda persona singolare ("tu", "segui", "sostieni") — mai il plurale ("noi", "seguici", "sosteneteci").

## Lingua
- **Commit, titoli e corpi delle PR: inglese.** È un progetto personale, non il repository di un cliente.
- **Contenuti del sito, README e testi rivolti al pubblico: italiano**, seconda persona singolare.
- La history contiene commit e PR in entrambe le lingue: è un residuo, non un precedente, e non si riscrive.

## Stack tecnico
- **Hugo** (SSG) con tema custom `picnew`
- **Tailwind CSS 3** + PostCSS per gli stili
- Contenuti in `content/` (Markdown + frontmatter YAML)
- Dati strutturati in `data/` (JSON / YAML)
- Configurazione principale: `config.toml`
- CSS custom: `themes/picnew/assets/css/main.css`
- Layout: `themes/picnew/layouts/`

## Convenzioni importanti
- Il breakpoint mobile/tablet è `< 1024px` (CSS custom), non il `md` di Tailwind (768px)
- Gli stili mobile-specifici vanno in `main.css` dentro `@media (max-width: 1023px)`
- I "Ringraziamenti speciali" nella pagina Sostieni sono pilotati da `params.support.special_thanks` in `config.toml`
- Le URL dei media (audio, cover, trascrizioni) sono servite dal CDN configurato in `params.podcast.cdn_base_url`

## Il feed podcast: modulo *e* fork locale

`config.toml` importa il modulo `github.com/valeriogalano/podcast-feed-hugo`, che monta i
propri `layouts`. Ma `themes/picnew/layouts/partials/podcast-feed.xml` è un **fork completo**
che lo ombreggia: **il feed di produzione esce da lì**, non dal modulo.

Prima di modificare qualcosa nel modulo aspettandoti un effetto sul feed pubblicato,
verifica quale dei due template stia realmente generando l'output. È già costato una diagnosi
sbagliata.

I contenuti usano `audio_file` / `audio_duration` / `audio_size` nel frontmatter, dopo la
migrazione a podcast-feed-hugo v0.3.0 (prima era `audio`).

## Nuova pagina episodio

La pagina di un episodio è `content/podcast/NNN.md`. Non c'è uno script che la genera: la
crei tu seguendo questa sezione. Prendi come modello l'episodio pubblicato più recente e
copiane la struttura del frontmatter, campo per campo.

**Da dove vengono i dati**

| Campo | Fonte |
| --- | --- |
| `number`, `aliases`, percorsi | Il numero dell'episodio. `audio_file: "episodes/PICNNN.mp3"`, `transcript: transcripts/PICNNN.srt`, `image: "covers/PICNNN.png"`, `chapters: "chapters/PICNNN.json"` |
| `date` | La domenica successiva alle 04:00 ora italiana, formato `2026-06-21T04:00:00+02:00` (`+01:00` con l'ora solare) |
| `audio_duration` | Secondi interi, dal file sul CDN: `ffprobe -v error -show_entries format=duration -of csv=p=0 https://cdn.pensieriincodice.it/episodes/PICNNN.mp3` |
| `audio_size` | Byte, dal file sul CDN: il `Content-Length` di `curl -sI` sullo stesso URL |
| `supporters`, `sources` | Il blocco YAML `# Sostenitori e fonti` della nota dell'episodio in Obsidian, copiato così com'è |
| Titolo, descrizione | La sezione `# Descrizione` della nota dell'episodio, se c'è. Altrimenti una bozza dallo script |
| `equipment` | L'attrezzatura usata per registrare, voce per voce con `title` e `url` (link affiliato). Copiala dall'episodio precedente e chiedi se è cambiata |
| `tags` | Scegli tra i tag già usati in `content/podcast/`, non inventarne di nuovi senza chiedere |
| `url` | `/episodes/NNN-` seguito dallo slug del titolo |
| Soundbite | Non nel frontmatter: vanno in `assets/soundbites/NNN.txt`, una riga per soundbite con inizio, fine e titolo separati da tab (l'export `startEnd` di AudioPills). Il feed li legge da lì |

> [!warning] Mai stimare durata e dimensione
> Vanno misurate sul file. Si misurano sul file servito dal CDN e non su una copia locale,
> perché il tagging ID3 cambia la dimensione dopo l'export: il valore nel feed deve essere
> quello del file che scarica chi ascolta. Se l'audio non è ancora sul CDN, fermati e dillo.

Lo script dell'episodio sta in `data/scripts/PICNNN.yml`; se manca, chiedilo invece di
lavorare senza.

L'articolo dell'episodio (`content/blog/episodio-NNN.md`, con `episode: NNN` nel frontmatter)
non si scrive qui e non nasce da solo: si scrive dallo script a fine montaggio, in una sessione
Claude Code con i token dell'abbonamento, e dispatch lo porta qui con una PR (`publish=N`, dopo
`article.py --export-prompt` e `--import-text`). Quando esiste, la pagina
episodio mostra la card «Leggi l'articolo» al posto dell'accordion con lo script; quando manca,
resta l'accordion.

La descrizione è un paragrafo di 2-4 frasi in seconda persona singolare. Subito dopo il paragrafo
va la riga `[Pensieri in codice](https://pensieriincodice.it/NNN)`, che deve restare il primo link
della descrizione: i link dell'ospite vanno sotto. Fonti, sostenitori, attrezzatura e canali del
podcast **non si scrivono nel corpo**: le fonti vanno in `sources` (con `title`), i sostenitori in
`supporters`, l'attrezzatura in `equipment`, e i canali li aggiunge il partial `follow.html`. Pagina e feed li generano da lì.

L'ultima riga del corpo, dopo gli eventuali link dell'ospite, è sempre
`Post-produzione e montaggio realizzati con Claude Opus.` Vale dall'episodio 151.

Il corpo si scrive in **Markdown vero**: elenchi con `- ` preceduti da una riga vuota, link
`[testo](url)` o `<url>`. Mai pallini `•`, `<br />`, HTML incollato, spazi non separabili o altri
residui di Word e degli editor: un testo che arriva da lì va ripulito prima del commit. Controlla
nell'HTML generato che un elenco esca come `<ul><li>` e non come un paragrafo unico.

Titolo, descrizione e tag sono
una **bozza**: li rivede Valerio prima della pubblicazione.

Prima di consegnare, fai girare `hugo` e verifica che la pagina e la voce nel feed escano
senza errori.

## Verificare prima di affermare

Su questo repo si sono accumulati tre errori di fila dovuti ad affermazioni su Hugo date a
memoria: una issue dichiarata infondata guardando il modulo invece del template embedded che
la causava; `audio` descritto come "campo riservato" di Hugo quando è un param qualunque; il
feed attribuito al modulo quando veniva dal fork nel tema.

Per capire quale layer genera davvero un output, **guarda l'output** e cerca stringhe che
distinguono le varianti — non dedurlo dalla struttura delle directory. Un sito Hugo minimo di
riproduzione costa pochi secondi e chiude la questione.

## Igiene del repo

`.gitignore` non copre `.DS_Store` e il working tree ne accumula parecchi, insieme ad appunti
sciolti nella root (`*.txt`, bozze `.md`). Non aggiungerli ai commit; se ti servono file di
lavoro, tienili fuori dal repo.
