import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { LangProvider } from './helpers/Provider';

ReactDOM.render(
  <LangProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </LangProvider>,
  document.getElementById('root')
);
