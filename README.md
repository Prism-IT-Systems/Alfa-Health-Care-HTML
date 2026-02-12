# Alfa Health Care

A responsive healthcare website for Alfa Healthcare, a medical supplies provider in Floral Park, NY. Built with HTML, Tailwind CSS, and vanilla JavaScript.

## Project Structure

```
src/
├── index.html           # Home page
├── about.html           # About us page
├── insurers.html        # Insurance partners page
├── productcategory.html # Product categories page
├── css/
│   ├── input.css       # Tailwind source styles
│   ├── output.css      # Generated Tailwind output
│   └── font.css        # Custom font definitions
├── js/
│   └── custom.js       # Custom JavaScript
├── images/             # Site images & logos
└── fonts/              # Custom font files (Inter, Montserrat, Plus Jakarta Sans)
```

## Tech Stack

- **HTML5** – Semantic markup
- **Tailwind CSS v4** – Utility-first styling
- **Flowbite** – UI components
- **Slick Carousel** – Carousel/slider
- **Hugeicons** – Icon font

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

```bash
npm install
```

### Development

Run Tailwind in watch mode to build CSS on file changes:

```bash
npm run dev
```

This compiles `src/css/input.css` → `src/css/output.css`.

### Viewing the Site

Open the HTML files directly in a browser or serve the `src` folder with a local server:

```bash
npx serve src
```

## Pages

| Page | Description |
|------|-------------|
| Home | Landing page with hero, product categories, insurers, testimonials |
| About | Company introduction, mission, workflow |
| Insurers | Supported insurance plans (Medicare, Medicaid, etc.) |
| Product Category | Medical supplies categories (urinary, orthopedic, OBGYN, etc.) |

## Customization

- **Colors**: Defined in `tailwind.config.js` (deep brown, amber gold, warm taupe, etc.)
- **Fonts**: Inter, Montserrat, Plus Jakarta Sans in `tailwind.config.js` and `font.css`

## License

ISC
