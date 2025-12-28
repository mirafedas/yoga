# Lit JavaScript Project

A modern web components project built with [Lit](https://lit.dev/) and JavaScript.

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

Run the development server with hot module replacement:

```bash
npm run dev
```

Then open your browser to `http://localhost:5173` (or the URL shown in the terminal).

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
yoga/
├── src/
│   ├── components/
│   │   ├── my-element.js          # Counter component example
│   │   └── simple-greeting.js     # Greeting component example
│   └── main.js                    # Main entry point
├── index.html                     # HTML entry point
├── package.json                   # Dependencies and scripts
├── vite.config.js                 # Vite configuration
└── README.md                      # This file
```

## Creating New Components

To create a new Lit component:

1. Create a new file in `src/components/`
2. Import Lit and define your component:

```javascript
import { LitElement, html, css } from 'lit';

export class MyComponent extends LitElement {
  static properties = {
    // Define reactive properties here
  };

  static styles = css`
    /* Component styles here */
  `;

  render() {
    return html`
      <!-- Component template here -->
    `;
  }
}

customElements.define('my-component', MyComponent);
```

3. Import the component in `src/main.js`
4. Use it in your HTML: `<my-component></my-component>`

## Learn More

- [Lit Documentation](https://lit.dev/docs/)
- [Lit Playground](https://lit.dev/playground/)
- [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)

## Features Included

- ✅ Lit 3.x for building web components
- ✅ Vite for fast development and optimized builds
- ✅ ES Modules support
- ✅ Example components with reactive properties
- ✅ Scoped styling with CSS
- ✅ Hot module replacement in development

