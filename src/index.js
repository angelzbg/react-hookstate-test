import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { fetchSomeData } from './api/api';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

setTimeout(() => fetchSomeData(), 5000);
