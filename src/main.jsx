import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { initAnalytics } from './utils/analytics.js';

initAnalytics();

const rootElement = document.getElementById('root');
const currentPath = (window.location.pathname || '/').replace(/\/+$/, '') || '/';
const prerenderedRoute = rootElement?.getAttribute('data-prerendered-route');

const appNode = (
  <StrictMode>
    <App />
  </StrictMode>
);

if (rootElement && rootElement.hasChildNodes() && prerenderedRoute === currentPath) {
  hydrateRoot(rootElement, appNode);
} else if (rootElement) {
  rootElement.innerHTML = '';
  createRoot(rootElement).render(appNode);
}
