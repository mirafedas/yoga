import { LitElement, html, css } from 'lit';

export class Card extends LitElement {
  static properties = {
    asana: { type: Object },
    showImage: { type: Boolean }
  };

  static styles = css`
    :host {
      display: block;
      padding: 20px;
      margin: 20px 0;
      background: linear-gradient(135deg, #ff9800 0%, #ff5722 100%);
      color: white;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    button {
      width: 100%;
      height: 100%;
      background: white;
      border: 1px solid black;
      border-radius: 8px;
      padding: 10px;
      cursor: pointer;
      font-size: 1rem;
      color: black;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 1px;
      transition: all 0.3s ease;
    }

    h2 {
      margin: 0 0 10px 0;
      font-size: 1.5rem;
    }

    p {
      margin: 0;
      font-size: 1rem;
      opacity: 0.9;
    }
  `;

  constructor() {
    super();
    this.showImage = false;
  }

  render() {
    return this.showImage ? 
    html`<img @click=${() => this.showImage = !this.showImage} src="${this.asana.image}" alt="${this.asana.name}">` 
    : html`
      <button @click=${() => this.showImage = !this.showImage}>
        <h2>${this.asana.name}</h2>
        <p>${this.asana.polishName}</p>
      </button>
    `;
  }
}

customElements.define('yoga-card', Card);

