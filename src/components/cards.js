import { LitElement, html, css } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import './card.js';
import { asanas } from '../data/asanas.js';

// ł nie rozkłada się przez NFD, więc podmieniamy je osobno
const normalize = (s) =>
  s.toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/ł/g, 'l');

export class Cards extends LitElement {
  static properties = {
    asanas: { type: Array },
    query: { state: true }
  };

  static styles = css`
    :host {
      width: 100%;
      padding: 20px;
    }

    .search {
      position: relative;
      max-width: 500px;
      margin: 0 auto 20px;
    }

    input {
      width: 100%;
      box-sizing: border-box;
      padding: 12px 40px 12px 16px;
      font: inherit;
      font-size: 16px;
      color: white;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 152, 0, 0.4);
      border-radius: 8px;
      outline: none;
      transition: border-color 0.2s, box-shadow 0.2s;
    }

    input:focus {
      border-color: #ff9800;
      box-shadow: 0 0 0 3px rgba(255, 152, 0, 0.25);
    }

    input::placeholder {
      color: rgba(255, 255, 255, 0.45);
    }

    input::-webkit-search-cancel-button,
    input::-webkit-search-decoration {
      -webkit-appearance: none;
      display: none;
    }

    .clear {
      position: absolute;
      top: 32%;
      right: 8px;
      transform: translateY(-50%);
      width: 28px;
      height: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      line-height: 1;
      color: rgba(255, 255, 255, 0.6);
      background: none;
      border: none;
      border-radius: 50%;
      cursor: pointer;
    }

    .clear:hover {
      color: white;
      background: rgba(255, 255, 255, 0.12);
    }

    .count,
    .empty {
      color: rgba(255, 255, 255, 0.6);
      font-size: 14px;
      text-align: center;
    }

    .count {
      margin-top: 8px;
    }

    .empty {
      padding: 40px 0;
      font-size: 16px;
    }

    .asanas {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
    }

    @media (min-width: 1200px) {
      .asanas {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      }
    }

    @media (min-width: 1600px) {
      .asanas {
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      }
    }
  `;

  constructor() {
    super();
    this.asanas = asanas;
    this.query = '';
  }

  get filteredAsanas() {
    const tokens = normalize(this.query).split(/\s+/).filter(Boolean);
    if (!tokens.length) return this.asanas;

    return this.asanas.filter((asana) => {
      const haystack = normalize(`${asana.name} ${asana.polishName}`);
      return tokens.every((token) => haystack.includes(token));
    });
  }

  _onInput(e) {
    this.query = e.target.value;
  }

  _clear() {
    this.query = '';
    this.renderRoot.querySelector('input')?.focus();
  }

  render() {
    const filtered = this.filteredAsanas;

    return html`
      <div class="search">
        <input
          type="search"
          placeholder="Szukaj asany..."
          aria-label="Szukaj asany"
          .value=${this.query}
          @input=${this._onInput}>
        ${this.query ? html`
          <button class="clear" aria-label="Wyczyść" @click=${this._clear}>×</button>
        ` : ''}
        ${this.query ? html`
          <div class="count">${filtered.length} z ${this.asanas.length}</div>
        ` : ''}
      </div>

      ${filtered.length === 0 ? html`
        <p class="empty">Nie znaleziono asan</p>
      ` : html`
        <div class="asanas">
          ${repeat(filtered, (asana) => asana.name, (asana) => html`
            <yoga-card .asana=${asana}></yoga-card>
          `)}
        </div>
      `}
    `;
  }
}

customElements.define('yoga-cards', Cards);
