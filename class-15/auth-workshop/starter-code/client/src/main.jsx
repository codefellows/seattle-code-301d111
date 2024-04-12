import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// once you sign up for an Auth0 account, they will provide you with the domain and clientId
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

