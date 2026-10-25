import { LitElement, html, css } from 'lit';
import {
  fazy,
  grupy,
  neutralizacja,
  poziomy,
  progresje,
  tadasana,
  uniwersalne,
  wektory
} from '../data/sequencing.js';

const FILTERS = [
  ['all', 'Wszystkie'],
  ['krytyczna', 'Krytyczne'],
  ['ważna', 'Ważne'],
  ['wskazówka', 'Wskazówki']
];
const STORAGE_KEY = 'seq-filter';
const TOTAL_RULES = grupy.reduce((sum, g) => sum + g.reguly.length, 0);

const color = (name) => `--c: var(--c-${name})`;
const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function highlight(text, q) {
  if (!q) return text;
  // split z grupą przechwytującą: nieparzyste indeksy to trafienia
  return text
    .split(new RegExp(`(${escapeRegExp(q)})`, 'gi'))
    .map((part, i) => (i % 2 ? html`<mark>${part}</mark>` : part));
}

function loadSeverity() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    if (saved && FILTERS.some(([k]) => k === saved.sev)) return saved.sev;
  } catch (e) {}
  return 'all';
}

export class Sequencing extends LitElement {
  static properties = {
    severity: { state: true },
    query: { state: true }
  };

  static styles = css`
    /* Layout: jedna kolumna-ściąga; łuk sekwencji jako oś z kropkami w kolorach czakr, reguły w dwóch kolumnach z filtrem wagi. */
    :host {
      --bg: #f4f5f1;
      --surface: #ffffff;
      --ink: #1d2320;
      --muted: #5d665f;
      --line: #d9ddd5;
      --accent: #2f5d50;
      --crit: #b4372b;
      --c-red: #c2412f;
      --c-orange: #d27420;
      --c-yellow: #c49a12;
      --c-green: #3f8a4f;
      --c-indigo: #3f4fa0;
      --c-violet: #7a4a9a;
      --f-display: "Instrument Serif", "Iowan Old Style", Georgia, serif;
      --f-body: "Figtree", system-ui, -apple-system, "Segoe UI", sans-serif;
      --f-mono: "JetBrains Mono", ui-monospace, "SFMono-Regular", Menlo, monospace;

      display: block;
      min-height: 100vh;
      box-sizing: border-box;
      background: var(--bg);
      color: var(--ink);
      font-family: var(--f-body);
      font-size: 15px;
      line-height: 1.55;
      padding-left: max(16px, env(safe-area-inset-left, 0px));
      padding-right: max(16px, env(safe-area-inset-right, 0px));
      padding-block: 32px 64px;
    }
    @media (prefers-color-scheme: dark) {
      :host {
        --bg: #141816; --surface: #1c211e; --ink: #e6e9e3; --muted: #9aa49c; --line: #2f3631;
        --accent: #8cc4b2; --crit: #f07a6c;
        --c-red: #ec7a68; --c-orange: #f0a05a; --c-yellow: #e5c454; --c-green: #7cc68b; --c-indigo: #8e9cf0; --c-violet: #c19ae0;
        color-scheme: dark;
      }
    }
    * { box-sizing: border-box; }
    .wrap { max-width: 1120px; margin: 0 auto; display: grid; grid-template-columns: minmax(0, 1fr); gap: 56px; }
    .wrap > * { min-width: 0; }
    h1, h2, h3 { text-wrap: balance; font-weight: 400; margin: 0; }
    h1 { font-family: var(--f-display); font-size: clamp(2.4rem, 6vw, 3.6rem); line-height: 1.02; letter-spacing: -0.01em; }
    h2 { font-family: var(--f-display); font-size: 2rem; line-height: 1.1; }
    h3 { font-family: var(--f-body); font-weight: 600; font-size: 1.02rem; }
    p { margin: 0; }
    .eyebrow { font-size: 0.72rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); font-weight: 600; }
    .lead { color: var(--muted); max-width: 62ch; font-size: 1.05rem; }
    .sec-head { display: grid; gap: 6px; margin-bottom: 20px; }
    .sec-head p { color: var(--muted); max-width: 65ch; }
    .mono { font-family: var(--f-mono); font-size: 0.74rem; }

    /* header */
    header { display: grid; gap: 14px; }
    .back { justify-self: start; color: var(--muted); font-size: 0.86rem; text-decoration: none; }
    .back:hover { color: var(--ink); }
    .back:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
    .legend { display: flex; flex-wrap: wrap; gap: 8px 20px; margin-top: 6px; font-size: 0.86rem; color: var(--muted); }
    .legend span { display: inline-flex; align-items: center; gap: 8px; }

    /* severity marks */
    .sev { width: 12px; height: 12px; flex: none; display: inline-block; margin-top: 4px; }
    .sev.krytyczna { background: var(--crit); transform: rotate(45deg) scale(0.82); }
    .sev.ważna { border: 2.5px solid var(--ink); border-radius: 50%; }
    .sev.wskazówka { border: 1.5px dashed var(--muted); border-radius: 50%; }

    /* arc / timeline */
    .arc { position: relative; display: grid; grid-template-columns: repeat(8, minmax(0, 1fr)); gap: 0; }
    .arc::before { content: ""; position: absolute; left: 6%; right: 6%; top: 34px; height: 2px;
      background: linear-gradient(90deg, var(--c-violet), var(--c-red), var(--c-orange), var(--c-yellow), var(--c-green), var(--c-yellow), var(--c-indigo), var(--c-violet)); opacity: .55; }
    .phase { position: relative; display: grid; align-content: start; gap: 8px; padding: 0 8px; text-align: center; justify-items: center; }
    .phase .num { font-family: var(--f-mono); font-size: 0.72rem; color: var(--muted); height: 18px; }
    .phase .dot { width: 18px; height: 18px; border-radius: 50%; background: var(--c); box-shadow: 0 0 0 5px var(--bg); position: relative; z-index: 1; }
    .phase h3 { font-size: 0.95rem; line-height: 1.25; margin-top: 4px; }
    .phase .chakra { font-size: 0.72rem; color: var(--c); font-weight: 600; letter-spacing: .02em; }
    .phase p { font-size: 0.82rem; color: var(--muted); line-height: 1.45; }
    .phase .asany { font-size: 0.78rem; font-style: italic; color: var(--ink); opacity: .82; line-height: 1.45; }
    @media (max-width: 900px) {
      .arc { grid-template-columns: 1fr; gap: 18px; }
      .arc::before { left: 8px; right: auto; top: 26px; bottom: 26px; width: 2px; height: auto;
        background: linear-gradient(180deg, var(--c-violet), var(--c-red), var(--c-orange), var(--c-yellow), var(--c-green), var(--c-yellow), var(--c-indigo), var(--c-violet)); }
      .phase { grid-template-columns: 18px 1fr; text-align: left; justify-items: start; column-gap: 16px; row-gap: 3px; padding: 0; }
      .phase .num { display: none; }
      .phase .dot { grid-row: 1 / span 4; margin-top: 3px; }
      .phase h3, .phase .chakra, .phase p, .phase .asany { grid-column: 2; margin: 0; }
    }
    .vectors { margin-top: 28px; display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 10px 28px; }
    .vec { display: grid; gap: 2px; padding-top: 10px; border-top: 1px solid var(--line); }
    .vec b { font-weight: 600; font-size: 0.92rem; }
    .vec b i { font-style: normal; color: var(--accent); padding: 0 6px; }
    .vec span { color: var(--muted); font-size: 0.82rem; }

    /* toolbar */
    .toolbar { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; margin-bottom: 22px; }
    .chips { display: flex; flex-wrap: wrap; gap: 6px; }
    .chip { font: inherit; font-size: 0.85rem; padding: 6px 12px; border-radius: 999px; border: 1px solid var(--line); background: var(--surface); color: var(--ink); cursor: pointer; display: inline-flex; gap: 8px; align-items: center; }
    .chip .sev { margin-top: 0; }
    .chip[aria-pressed="true"] { background: var(--ink); color: var(--bg); border-color: var(--ink); }
    .chip[aria-pressed="true"] .sev.ważna { border-color: var(--bg); }
    .chip:focus-visible, input:focus-visible, .jump a:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
    .search { flex: 1 1 220px; min-width: 0; max-width: 340px; font: inherit; font-size: 0.9rem; padding: 7px 12px; border-radius: 8px; border: 1px solid var(--line); background: var(--surface); color: var(--ink); }
    .count { font-size: 0.82rem; color: var(--muted); margin-left: auto; font-variant-numeric: tabular-nums; }
    .jump { display: flex; flex-wrap: wrap; gap: 4px 14px; font-size: 0.84rem; margin-bottom: 18px; }
    .jump a { color: var(--muted); text-decoration: none; display: inline-flex; gap: 6px; align-items: center; }
    .jump a:hover { color: var(--ink); }
    .jump i { width: 8px; height: 8px; border-radius: 50%; background: var(--c); display: inline-block; }

    /* rule groups */
    .groups { columns: 2 440px; column-gap: 40px; }
    .group { break-inside: avoid; margin-bottom: 36px; display: grid; gap: 4px; }
    .group-head { display: flex; align-items: baseline; gap: 10px; padding-bottom: 8px; border-bottom: 2px solid var(--c); margin-bottom: 6px; }
    .group-head h3 { font-family: var(--f-display); font-weight: 400; font-size: 1.55rem; }
    .group-head .mono { color: var(--c); }
    .rule { display: grid; grid-template-columns: 44px 14px minmax(0, 1fr); gap: 4px 10px; padding: 9px 0; border-bottom: 1px solid var(--line); }
    .rule .mono { color: var(--muted); padding-top: 3px; }
    .rule .txt { font-size: 0.92rem; }
    .rule .ex { grid-column: 3; font-size: 0.84rem; color: var(--muted); font-style: italic; }
    .rule.krytyczna .txt { font-weight: 500; }
    mark { background: color-mix(in srgb, var(--c-yellow) 35%, transparent); color: inherit; border-radius: 2px; }
    .empty { color: var(--muted); padding: 20px 0; }

    /* neutralization table */
    .table-wrap { overflow-x: auto; border: 1px solid var(--line); border-radius: 10px; background: var(--surface); }
    table { border-collapse: collapse; width: 100%; min-width: 640px; font-size: 0.9rem; }
    th, td { text-align: left; vertical-align: top; padding: 11px 14px; border-bottom: 1px solid var(--line); }
    th { font-size: 0.72rem; letter-spacing: .1em; text-transform: uppercase; color: var(--muted); font-weight: 600; }
    tr:last-child td { border-bottom: 0; }
    td:first-child { font-weight: 600; width: 30%; }
    td.nie { color: var(--crit); width: 22%; }
    .universal { margin-top: 18px; display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px 28px; }
    .universal div { display: grid; gap: 2px; }
    .universal b { font-weight: 600; }
    .universal span { color: var(--muted); font-size: 0.85rem; }

    /* progressions */
    .prog { display: grid; gap: 0; }
    .prog-row { display: grid; grid-template-columns: 200px minmax(0, 1fr); gap: 6px 20px; padding: 12px 0; border-bottom: 1px solid var(--line); align-items: baseline; }
    .prog-row b { font-weight: 600; font-size: 0.9rem; }
    .steps { display: flex; flex-wrap: wrap; align-items: center; gap: 6px 4px; font-size: 0.92rem; }
    .steps span:not(.arr) { padding: 2px 10px; border-radius: 6px; background: var(--surface); border: 1px solid var(--line); }
    .steps .arr { color: var(--muted); padding: 0 2px; }
    @media (max-width: 640px) { .prog-row { grid-template-columns: 1fr; } }

    /* two col */
    .two { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; }
    .check { list-style: none; padding: 0; margin: 0; display: grid; gap: 8px; counter-reset: c; }
    .check li { display: grid; grid-template-columns: 26px minmax(0, 1fr); gap: 8px; font-size: 0.92rem; }
    .check li::before { counter-increment: c; content: counter(c, decimal-leading-zero); font-family: var(--f-mono); font-size: 0.72rem; color: var(--c-orange); padding-top: 3px; }
    .levels { display: grid; gap: 18px; }
    .level { background: var(--surface); border: 1px solid var(--line); border-radius: 10px; padding: 16px 18px; display: grid; gap: 8px; }
    .level ul { margin: 0; padding-left: 18px; display: grid; gap: 4px; font-size: 0.9rem; }

    footer { color: var(--muted); font-size: 0.82rem; border-top: 1px solid var(--line); padding-top: 16px; }
    @media (prefers-reduced-motion: no-preference) { .rule { transition: opacity .15s; } }
  `;

  constructor() {
    super();
    this.severity = loadSeverity();
    this.query = '';
  }

  setSeverity(sev) {
    this.severity = sev;
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ sev })); } catch (e) {}
  }

  // kotwice #g-… nie sięgają do shadow DOM, więc przewijamy ręcznie
  jumpTo(e, id) {
    e.preventDefault();
    this.renderRoot.getElementById(`g-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  filteredGroups() {
    const q = this.query.trim().toLowerCase();
    return grupy
      .map((g) => ({
        ...g,
        reguly: g.reguly.filter((r) => {
          const okSev = this.severity === 'all' || r.waga === this.severity;
          const okQ = !q || `${r.id} ${r.tekst} ${r.przyklad || ''}`.toLowerCase().includes(q);
          return okSev && okQ;
        })
      }))
      .filter((g) => g.reguly.length);
  }

  renderArc() {
    return html`
      <div class="arc">
        ${fazy.map((f) => html`
          <div class="phase" style=${color(f.kolor)}>
            <span class="num">${String(f.n).padStart(2, '0')}</span>
            <span class="dot"></span>
            <h3>${f.nazwa}</h3>
            <span class="chakra">${f.czakra}</span>
            <p>${f.opis}</p>
            ${f.asany.length ? html`<span class="asany">${f.asany.join(', ')}</span>` : ''}
          </div>
        `)}
      </div>
      <div class="vectors">
        ${wektory.map(([a, b, c]) => html`
          <div class="vec"><b>${a}<i>→</i>${b}</b><span>${c}</span></div>
        `)}
      </div>
    `;
  }

  renderRules() {
    const q = this.query.trim();
    const groups = this.filteredGroups();
    const shown = groups.reduce((sum, g) => sum + g.reguly.length, 0);

    return html`
      <div class="toolbar">
        <div class="chips" role="group" aria-label="Filtr wagi">
          ${FILTERS.map(([k, label]) => html`
            <button
              class="chip"
              type="button"
              aria-pressed=${this.severity === k}
              @click=${() => this.setSeverity(k)}
            >${k !== 'all' ? html`<i class="sev ${k}"></i>` : ''}${label}</button>
          `)}
        </div>
        <input
          class="search"
          type="search"
          placeholder="Szukaj asany lub słowa…"
          aria-label="Szukaj w regułach"
          .value=${this.query}
          @input=${(e) => { this.query = e.target.value; }}
        >
        <span class="count">${shown} z ${TOTAL_RULES} reguł</span>
      </div>
      <nav class="jump" aria-label="Grupy reguł">
        ${grupy.map((g) => html`
          <a href="#g-${g.id}" style=${color(g.kolor)} @click=${(e) => this.jumpTo(e, g.id)}><i></i>${g.nazwa}</a>
        `)}
      </nav>
      <div class="groups">
        ${groups.length
          ? groups.map((g) => html`
            <div class="group" id="g-${g.id}" style=${color(g.kolor)}>
              <div class="group-head"><h3>${g.nazwa}</h3><span class="mono">${g.id}</span></div>
              ${g.reguly.map((r) => html`
                <div class="rule ${r.waga}">
                  <span class="mono">${r.id}</span><i class="sev ${r.waga}" title=${r.waga}></i>
                  <span class="txt">${highlight(r.tekst, q)}</span>
                  ${r.przyklad ? html`<span class="ex">${highlight(r.przyklad, q)}</span>` : ''}
                </div>
              `)}
            </div>
          `)
          : html`<p class="empty">Brak reguł dla tego filtra. Zmień wagę albo wyszukiwane słowo.</p>`}
      </div>
    `;
  }

  render() {
    return html`
      <div class="wrap">
        <header>
          <a class="back" href=${import.meta.env.BASE_URL}>← Asany</a>
          <div class="eyebrow">Hatha joga · szkoła Bihar · ściąga nauczycielska</div>
          <h1>Reguły sekwencjonowania</h1>
          <p class="lead">Uporządkowane notatki: w jakiej kolejności układać asany, czym je przygotować i neutralizować oraz czego unikać. Każda reguła ma kod, którego używa też skill do oceny sekwencji.</p>
          <div class="legend">
            <span><i class="sev krytyczna"></i>krytyczna: bezpieczeństwo</span>
            <span><i class="sev ważna"></i>ważna: struktura sekwencji</span>
            <span><i class="sev wskazówka"></i>wskazówka: jakość praktyki</span>
          </div>
        </header>

        <section>
          <div class="sec-head">
            <div class="eyebrow">Szkielet</div>
            <h2>Łuk sekwencji</h2>
            <p>Przygotuj ciało, rozwijaj, integruj, zrównoważ. Kolor fazy to czakra, na którą faza głównie działa.</p>
          </div>
          ${this.renderArc()}
        </section>

        <section>
          <div class="sec-head">
            <div class="eyebrow">Reguły</div>
            <h2>Co, kiedy i po czym</h2>
          </div>
          ${this.renderRules()}
        </section>

        <section>
          <div class="sec-head">
            <div class="eyebrow">Przejścia</div>
            <h2>Neutralizacja</h2>
            <p>Po intensywnym bloku, zanim zmienisz kierunek pracy kręgosłupa.</p>
          </div>
          <div class="table-wrap"><table>
            <thead><tr><th>Po czym</th><th>Czym neutralizować</th><th>Nie od razu</th></tr></thead>
            <tbody>
              ${neutralizacja.map((n) => html`
                <tr><td>${n.po}</td><td>${n.czym}</td><td class="nie">${n.nie || '–'}</td></tr>
              `)}
            </tbody>
          </table></div>
          <div class="universal">
            ${uniwersalne.map(([a, b]) => html`<div><b>${a}</b><span>${b}</span></div>`)}
          </div>
        </section>

        <section>
          <div class="sec-head">
            <div class="eyebrow">Stopniowanie</div>
            <h2>Ścieżki trudności</h2>
            <p>Od najłagodniejszej do najtrudniejszej. W sekwencji idź w prawo, nie przeskakuj kroków u początkujących.</p>
          </div>
          <div class="prog">
            ${progresje.map((p) => html`
              <div class="prog-row">
                <b>${p.nazwa}</b>
                <div class="steps">
                  ${p.kroki.map((k, i) => html`${i ? html`<span class="arr">→</span>` : ''}<span>${k}</span>`)}
                </div>
              </div>
            `)}
          </div>
        </section>

        <section class="two">
          <div>
            <div class="sec-head">
              <div class="eyebrow">Na start bloku stojącego</div>
              <h2>Tadasana</h2>
            </div>
            <ol class="check">
              ${tadasana.map((t) => html`<li>${t}</li>`)}
            </ol>
          </div>
          <div>
            <div class="sec-head">
              <div class="eyebrow">Skalowanie</div>
              <h2>Poziom grupy</h2>
            </div>
            <div class="levels">
              ${poziomy.map((l) => html`
                <div class="level">
                  <h3>${l.nazwa}</h3>
                  <ul>${l.punkty.map((p) => html`<li>${p}</li>`)}</ul>
                </div>
              `)}
            </div>
          </div>
        </section>

        <footer>Źródło: sekwencjonowanie.txt i asanas.js. Nazwy asan według nazewnictwa z asanas.js (Bihar).</footer>
      </div>
    `;
  }
}

customElements.define('yoga-sequencing', Sequencing);
