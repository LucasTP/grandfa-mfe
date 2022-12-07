import * as React from 'react';
import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const mount = (element: any) => {
  if (element) {
    const root = createRoot(element!);

    root.render(
      <StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StrictMode>,
    );
  }
};

if (process.env.NODE_ENV === 'development') {
  const container = document.getElementById('grandfa-mfe-dashboard');

  if (container) {
    mount(container);
  }
}

export { mount };
