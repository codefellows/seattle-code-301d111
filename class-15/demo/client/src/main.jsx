import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));

// once you sign up for an Auth0 account, they will provide you with the domain and clientId
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH_DOMAIN}
      clientId={import.meta.env.VITE_AUTH_CLIENT_ID}
      redirectUri={import.meta.env.VITE_AUTH_REDIRECT_URI}
    >
      <App />
    </Auth0Provider>,
  </React.StrictMode>
);

