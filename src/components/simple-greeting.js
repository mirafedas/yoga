import { LitElement, html, css } from 'lit';

/**
 * A simple greeting component that displays a personalized message
 */
export class SimpleGreeting extends LitElement {
  static properties = {
    name: { type: String }
  };

  static styles = css`
    :host {
      display: block;
      padding: 20px;
      margin: 20px 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
    this.name = 'World';
  }

  render() {
    return html`
      <h2>Hello, ${this.name}! 👋</h2>
      <p>This is a simple Lit component built with JavaScript.</p>
    `;
  }
}

customElements.define('simple-greeting', SimpleGreeting);

