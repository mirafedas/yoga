import { LitElement, html, css } from 'lit';

export class Card extends LitElement {
  static properties = {
    asana: { type: Object },
    showImage: { type: Boolean }
  };

  static styles = css`
    :host {
      display: block;
      perspective: 1000px;
    }

    .card-container {
      position: relative;
      width: 100%;
      min-height: 350px;
      transition: transform 0.6s;
      transform-style: preserve-3d;
      cursor: pointer;
    }

    .card-container.flipped {
      transform: rotateY(180deg);
    }

    button {
      position: absolute;
      width: 100%;
      height: 100%;
      min-height: 350px;
      background: linear-gradient(135deg, #ff9800 0%, #ff5722 100%);
      border: none;
      border-radius: 8px;
      padding: 20px;
      cursor: pointer;
      backface-visibility: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .card-front {
      transform: rotateY(0deg);
    }

    .card-back {
      transform: rotateY(180deg);
      background: linear-gradient(135deg, #ff9800 0%, #ff5722 100%);
    }

    h2 {
      margin: 0 0 10px 0;
      font-size: 16px;
      color: white;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    p {
      margin: 0;
      font-size: 1rem;
      color: white;
      opacity: 0.9;
      font-size: 14px;
    }

    img {
      max-width: 100%;
      max-height: 250px;
      margin-top: 15px;
      border-radius: 4px;
      object-fit: contain;
    }
  `;

  constructor() {
    super();
    this.showImage = false;
  }

  render() {
    return html`
      <div class="card-container ${this.showImage ? 'flipped' : ''}" 
           @click=${() => this.showImage = !this.showImage}>
        <button class="card-front">
          <h2>${this.asana.name}</h2>
          <p>${this.asana.polishName}</p>
        </button>
        <button class="card-back">
          <h2>${this.asana.name}</h2>
          <p>${this.asana.polishName}</p>
          <img src="${this.asana.image}" alt="${this.asana.name}">
        </button>
      </div>
    `;
  }
}

customElements.define('yoga-card', Card);

