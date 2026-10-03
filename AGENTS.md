# AGENTS.md

## Project overview
This is a static single-page site ("Happy Mother's Day") — plain `index.html`, `style.css`, and `script.js`. No build step, no backend, no dependencies.

## Running in Base44
- Served by `nginx:alpine` via `docker-compose.base44.yml`, bind-mounting the repo root into the nginx html directory.
- Web entry point is on host port 3000.
- No environment variables or secrets required.
- Edits to `index.html` / `style.css` / `script.js` are picked up by `reload_preview` (nginx serves files live from the mount; no rebuild needed).

## How to verify
- `curl -s http://localhost:3000/` should return the HTML with `<title>Happy Mother's Day</title>`.
