import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';
import './index.css';
import './i18n.js';
import Loading from './components/Loading';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <React.Suspense fallback={<Loading />}>
        <App />
      </React.Suspense>
    </HelmetProvider>
  </React.StrictMode>,
);
