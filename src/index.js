import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './app.js';
import AuthProvider from './context/auth';

ReactDOM.render(
  <AuthProvider>
    <App/>
  </AuthProvider>,
  document.getElementById('root')
);