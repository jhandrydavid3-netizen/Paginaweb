import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"

import RouterPages from './routes/Router.jsx'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterPages />
  </React.StrictMode>
);