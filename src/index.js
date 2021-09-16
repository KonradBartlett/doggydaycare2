import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import { Footer } from './components/footer';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
