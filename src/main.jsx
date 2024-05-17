import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './i18n.js';
import Loading from './components/Loading';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <React.Suspense fallback={<Loading />}>
      <App />
    </React.Suspense>
  </React.StrictMode>,
);
