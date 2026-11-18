# React Project - Fixed Blog

## Run frontend
```bash
npm install
npm run dev
```

## Run JSON Server
Open a second terminal:
```bash
npm run server
```

The Blog page fetches `/Blogcard` from JSON Server and renders the returned cards.
The Blog images are included locally in `public/blog`, so the cards do not depend on the previous external SVG URLs.
