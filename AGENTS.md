# Pensieri in Codice — note per gli agenti AI

Questo è il file di istruzioni del repository. `CLAUDE.md` rimanda qui: si modifica **solo
questo**, così non esistono due copie da tenere allineate.

## Il progetto
Pensieri in Codice è un podcast indipendente portato avanti da **una sola persona**: Valerio Galano.
Usare sempre la seconda persona singolare ("tu", "segui", "sostieni") — mai il plurale ("noi", "seguici", "sosteneteci").

## Lingua
- **Commit, titoli e corpi delle PR: italiano.**
- **Contenuti del sito, README e testi rivolti al pubblico: italiano**, seconda persona singolare.
- La history contiene commit in entrambe le lingue: è un residuo, non un permesso. Per i commit nuovi usa l'italiano.

## Stack tecnico
- **Hugo** (SSG) con tema custom `picnew`
- **Tailwind CSS 3** + PostCSS per gli stili
- Contenuti in `content/` (Markdown + frontmatter TOML)
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
