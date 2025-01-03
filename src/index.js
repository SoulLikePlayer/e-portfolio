/* This code snippet is written in JavaScript and is using React library for building user interfaces.
Here's a breakdown of what the code is doing: */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import "./styles/reset-tool.css"
import "./styles/style.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

