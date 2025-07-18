# Mirror API

Mirror API is a behavioral feedback system that surfaces subtle reflections based on how users move through a page. It tracks scroll tempo, hover linger, and input hesitation, then displays ambient signals through floating overlay bubbles. The system is modular, privacy-conscious, and designed to read behavior without analytics.

## Features

- Lightweight scroll tracking using delta thresholds
- Hover detection with debounce logic to capture intent
- Input hesitation recognition tied to focus and typing delay
- Ghost View mode for tone-shifting visual feedback
- Semantic CSS token support for thematic styling
- Modular scripts and clean separation of logic

## File Structure
mirror-api/
├── index.html
├── style.css
├── tokens.css
├── logic.js
├── state.js
├── overlays.js
├── canvas.js

## Tech Stack

- JavaScript (vanilla)
- Semantic CSS
- Local DOM event listeners
- Computed styles and tokens
- No external dependencies

## How It Works

## How It Works

- `logic.js`: Tracks scroll velocity, hover duration, and input pause
- `state.js`: Handles mode state (Ghost View toggle, reflection timing)
- `overlays.js`: Renders floating feedback bubbles tied to events
- `canvas.js`: Optional heatmap layer for interpreting movement density
- `tokens.css`: Centralized semantic values for theming behaviors

## Setup

Clone the repo and serve locally:

```bash
git clone https://github.com/mwh-max/mirrorapi.git
cd mirrorapi
python3 -m http.server
