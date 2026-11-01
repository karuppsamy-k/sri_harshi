/**
 * Application entry point.
 * Renders the React app into the DOM.
 * Global styles are imported here.
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app/App';
import './styles/globals.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('[Sri Harshi] Root element #root not found. Check your index.html file.');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
