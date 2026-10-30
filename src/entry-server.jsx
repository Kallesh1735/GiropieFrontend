import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppShell } from './App.jsx';

/**
 * Build-time SSR Pre-render Entry (Tech Fix #5)
 * Renders any route into static HTML so plain HTTP fetches, search engines,
 * WhatsApp/LinkedIn link previews, and Rich Results validators read full body HTML.
 */
export function render(url) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <AppShell />
      </StaticRouter>
    </StrictMode>
  );
}
