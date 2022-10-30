import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'bootstrap';

import '../assets/scss/theme.scss';

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(
  <App />,
);
