import React from 'react';
import './index.css';
import App from './app/App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

import { Routes, BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root'))

root.render(
  < React.StrictMode >
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode >,
);

