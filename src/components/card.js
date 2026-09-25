import { LitElement, html, css } from 'lit';

export class Card extends LitElement {
  static properties = {
    asana: { type: Object },
    showImage: { type: Boolean }
  };

  static styles = css`
    :host {
      display: block;
      position: relative;
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

    /* --- info button ------------------------------------------------- */

    .info {
      position: absolute;
      top: 10px;
      right: 10px;
      z-index: 2;
      width: 28px;
      height: 28px;
      min-height: 0;
      padding: 0;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.25);
      color: white;
      font-family: Georgia, 'Times New Roman', serif;
      font-size: 16px;
      font-style: italic;
      font-weight: bold;
      line-height: 1;
      box-shadow: none;
      transition: background 0.2s, transform 0.2s;
    }

    .info:hover,
    .info:focus-visible {
      background: rgba(255, 255, 255, 0.45);
      transform: scale(1.1);
    }

    /* --- details dialog ----------------------------------------------- */

    dialog {
      width: min(720px, calc(100vw - 32px));
      max-height: calc(100vh - 32px);
      padding: 0;
      border: none;
      border-radius: 12px;
      background: #fffaf5;
      color: #2b2b2b;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);
      overflow: hidden;
    }

    dialog::backdrop {
      background: rgba(0, 0, 0, 0.65);
    }

    dialog[open] {
      animation: pop 0.2s ease-out;
    }

    @keyframes pop {
      from { opacity: 0; transform: scale(0.96); }
      to { opacity: 1; transform: scale(1); }
    }

    .dialog-header {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 18px 20px;
      background: linear-gradient(135deg, #ff9800 0%, #ff5722 100%);
    }

    .dialog-header h2 {
      margin: 0;
      font-size: 18px;
    }

    .dialog-header p {
      margin: 4px 0 0 0;
      font-size: 14px;
    }

    .titles {
      flex: 1;
      min-width: 0;
    }

    .close {
      position: static;
      width: 32px;
      height: 32px;
      min-height: 0;
      flex: none;
      padding: 0;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.25);
      color: white;
      font-size: 18px;
      line-height: 1;
      box-shadow: none;
      transition: background 0.2s;
    }

    .close:hover,
    .close:focus-visible {
      background: rgba(255, 255, 255, 0.45);
    }

    .dialog-body {
      display: grid;
      grid-template-columns: 220px 1fr;
      gap: 20px;
      padding: 20px;
      overflow-y: auto;
      max-height: calc(100vh - 140px);
      text-align: left;
    }

    .figure {
      background: white;
      border: 1px solid #f0e2d6;
      border-radius: 8px;
      padding: 10px;
      align-self: start;
    }

    .figure img {
      display: block;
      width: 100%;
      max-height: none;
      margin: 0;
    }

    section + section {
      margin-top: 18px;
    }

    h3 {
      display: flex;
      align-items: center;
      gap: 8px;
      margin: 0 0 6px 0;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .benefits h3 { color: #2f7d55; }
    .cautions h3 { color: #c62828; }

    .dialog-body p {
      margin: 0;
      color: #3d3d3d;
      opacity: 1;
      font-size: 15px;
      line-height: 1.55;
    }

    @media (max-width: 640px) {
      .dialog-body {
        grid-template-columns: 1fr;
      }

      .figure {
        max-width: 220px;
        margin: 0 auto;
      }
    }
  `;

  constructor() {
    super();
    this.showImage = false;
  }

  openDetails(event) {
    event.stopPropagation();
    this.renderRoot.querySelector('dialog').showModal();
  }

  closeDetails() {
    this.renderRoot.querySelector('dialog').close();
  }

  onDialogClick(event) {
    // clicking the backdrop targets the dialog itself
    if (event.target === event.currentTarget) {
      this.closeDetails();
    }
  }

  render() {
    return html`
      <button class="info"
              aria-label="Więcej o pozycji ${this.asana.name}"
              @click=${this.openDetails}>i</button>

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

      <dialog @click=${this.onDialogClick}>
        <div class="dialog-header">
          <div class="titles">
            <h2>${this.asana.name}</h2>
            <p>${this.asana.polishName}</p>
          </div>
          <button class="close" aria-label="Zamknij" @click=${this.closeDetails}>✕</button>
        </div>
        <div class="dialog-body">
          <div class="figure">
            <img src="${this.asana.image}" alt="${this.asana.name}">
          </div>
          <div>
            <section class="benefits">
              <h3>✓ Korzyści</h3>
              <p>${this.asana.korzysci}</p>
            </section>
            <section class="cautions">
              <h3>⚠ Przeciwwskazania</h3>
              <p>${this.asana.przeciwskazania}</p>
            </section>
          </div>
        </div>
      </dialog>
    `;
  }
}

customElements.define('yoga-card', Card);
