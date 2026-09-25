import { LitElement, html, css } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import './card.js';
import { asanas } from '../data/asanas.js';

export class Cards extends LitElement {
  static properties = {
    asanas: { type: Array }
  };

  static styles = css`
    :host {
      width: 100%;
      padding: 20px;
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
  }

  render() {
    return html`
      <div class="asanas">
        ${repeat(this.asanas, (asana) => asana.name, (asana) => html`
          <yoga-card .asana=${asana}></yoga-card>
        `)}
      </div>
    `;
  }
}

customElements.define('yoga-cards', Cards);

