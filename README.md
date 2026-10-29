# WebFundamentals

An interactive, French-language introduction to HTML, CSS, JavaScript, and HTTP.

[Open the demo](https://devweb-lilac.vercel.app) · [Browse the code](https://github.com/hamzaxbella/devweb)

## Learn by changing things

- Explore semantic HTML, forms, media, and tables.
- Visualize the box model, positioning, Flexbox, Grid, and typography.
- Learn DOM events and the HTTP request/response cycle.
- Edit HTML and CSS in the playground and see a debounced iframe preview.

| Route | Content |
| --- | --- |
| `/html` | Structure and semantic elements |
| `/css` | Layout and styling |
| `/js` | DOM and events |
| `/http` | Methods, responses, and status codes |
| `/playground` | Live HTML/CSS editor |

## Stack

React · TypeScript · Vite · Tailwind CSS · React Router · Framer Motion

## Run locally

```bash
git clone https://github.com/hamzaxbella/devweb.git
cd devweb
npm ci
npm run dev
```

Open <http://localhost:5173> (or the address printed in the terminal).

```bash
npm run build
```

Use the build script to generate production output.

## Code map

`src/pages/` holds the learning modules. `src/components/` groups examples by subject. `src/layout/` contains shared navigation and layout.

This is a browser-based learning resource. The current app does not provide accounts, a grading backend, or saved course progress. For hosting, configure an SPA fallback to `index.html` so direct visits to lesson routes work.

## License

MIT.
