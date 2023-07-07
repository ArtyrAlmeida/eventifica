import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App';
import { EventContextProvider } from './context/EventContext';
import { AuthProvider } from 'react-auth-kit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider
      authType='localstorage'
      authName='autenticacao'
    >
      <EventContextProvider>

        <App />
      </EventContextProvider>
    </AuthProvider>
  </React.StrictMode>
);
