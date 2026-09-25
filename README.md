# 🧘 Yoga Asanas - Interactive Reference Guide

A comprehensive web application showcasing yoga asanas (poses) with detailed information in Polish. Built with [Lit](https://lit.dev/) web components and modern JavaScript.

## ✨ Features

- 📚 **Extensive Database**: Over 80 yoga asanas organized by category
- 🖼️ **Visual Reference**: High-quality images for each pose
- 🇵🇱 **Polish Language**: Sanskrit names with Polish translations
- ℹ️ **Detailed Information**: Benefits and contraindications for each asana
- 📱 **Responsive Design**: Adaptive grid layout for all screen sizes
- ⚡ **Fast Performance**: Built with Vite for optimal loading times

## 🎯 Asana Categories

- **Pozycje stojące** (Standing poses)
- **Skłony do przodu** (Forward bends)
- **Wygięcia w tył** (Backbends)
- **Pozycje relaksacyjne** (Relaxation poses)
- **Skręty** (Twists)
- **Pozycje medytacyjne** (Meditation poses)
- **Pozycje dynamiczne** (Dynamic poses)
- **Pozycje równowagi** (Balance poses)
- **Pozycje odwrócone** (Inverted poses)

## 🚀 Getting Started

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

## 📁 Project Structure

```
yoga/
├── public/
│   ├── img/                       # Asana images
│   └── favicon.svg                # Site icon
├── src/
│   ├── components/
│   │   ├── cards.js               # Main component with asanas grid
│   │   └── card.js                # Individual asana card component
│   └── main.js                    # Application entry point
├── index.html                     # HTML entry point
├── package.json                   # Dependencies and scripts
├── vite.config.js                 # Vite configuration
└── README.md                      # This file
```

## 🔧 Technology Stack

- **[Lit 3.x](https://lit.dev/)** - Lightweight web components library
- **[Vite](https://vitejs.dev/)** - Fast build tool and dev server
- **ES Modules** - Modern JavaScript module system
- **CSS Grid** - Responsive layout system

## 📝 Asana Data Structure

Each asana contains:

- `name` - Sanskrit name (e.g., "Tadasana")
- `polishName` - Polish translation (e.g., "Pozycja góry")
- `przeciwskazania` - Contraindications and precautions
- `korzysci` - Benefits and therapeutic effects
- `image` - Path to pose illustration

Optional fields, present where the source material provides them:

- `etymologia` - Meaning of the Sanskrit words in the name
- `uwagi` - Practice notes, duration, sequencing
- `opcje` - Variants and beginner-friendly options
- `wskazowki` - Array of step-by-step instructions
- `oddychanie` - Breathing pattern
- `swiadomosc` - Point of awareness (physical / spiritual)
- `duchoweZnaczenie` - Spiritual and energetic meaning

The module also exports `grupyAsan` - introductions to the asana groups
(standing, forward bends, backbends, twists, vajrasana series, balance,
inverted), each with `nazwa`, `opis` and, where given, `uwagi`,
`duchoweZnaczenie`, `przeciwskazania` and practice rules.

## 🎨 Component Architecture

### `yoga-cards`
Main component that renders the responsive grid of all asanas. Uses Lit's `repeat` directive for efficient rendering.

### `yoga-card`
Individual card component displaying:
- Asana image
- Sanskrit and Polish names
- Benefits
- Contraindications

## 🌐 Browser Support

Modern browsers with ES2020+ support:
- Chrome/Edge 80+
- Firefox 75+
- Safari 13.1+

## 📚 Learn More

- [Lit Documentation](https://lit.dev/docs/)
- [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [Vite Guide](https://vitejs.dev/guide/)

## 🚀 Deployment

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

### Automatic Deployment
- Push to the `main` branch triggers automatic build and deployment
- The site will be available at `https://mirafedas.github.io/yoga/`

### Manual Build
```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📄 License

ISC

