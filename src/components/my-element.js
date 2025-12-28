import { LitElement, html, css } from 'lit';

/**
 * A simple example Lit component with counter functionality
 */
export class MyElement extends LitElement {
  static properties = {
    count: { type: Number }
  };

  static styles = css`
    :host {
      display: block;
      padding: 20px;
      margin: 20px 0;
      background: #f5f5f5;
      border-radius: 8px;
    }

    .counter {
      font-size: 2rem;
      font-weight: bold;
      color: #667eea;
      margin: 20px 0;
    }

    button {
      background: #667eea;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 6px;
      font-size: 1rem;
      cursor: pointer;
      margin: 0 5px;
      transition: background 0.3s ease;
    }

    button:hover {
      background: #5568d3;
    }

    button:active {
      transform: scale(0.98);
    }

    h2 {
      margin-top: 0;
      color: #333;
    }
  `;

  constructor() {
    super();
    this.count = 0;
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }

  render() {
    return html`
      <h2>Counter Component</h2>
      <div class="counter">Count: ${this.count}</div>
      <div>
        <button @click=${this.decrement}>-</button>
        <button @click=${this.reset}>Reset</button>
        <button @click=${this.increment}>+</button>
      </div>
    `;
  }
}

customElements.define('my-element', MyElement);

