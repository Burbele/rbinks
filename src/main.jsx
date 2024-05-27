import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';
import './index.css';
import './i18n.js';
import Loading from './components/Loading';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider> {/* Provides context for managing the document head */}
      <React.Suspense fallback={<Loading />}> {/* Shows a loading component while waiting for lazy-loaded components */}
        <App />
      </React.Suspense>
    </HelmetProvider>
  </React.StrictMode>,
);
