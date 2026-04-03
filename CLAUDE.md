# Pensieri in Codice — note per Claude

## Il progetto
Pensieri in Codice è un podcast indipendente portato avanti da **una sola persona**: Valerio Galano.
Usare sempre la seconda persona singolare ("tu", "segui", "sostieni") — mai il plurale ("noi", "seguici", "sosteneteci").

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