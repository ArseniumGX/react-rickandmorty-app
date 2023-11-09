import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ApolloProvider } from '@apollo/client';
import { client } from './service/api.ts';
import './styles/_globals.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
