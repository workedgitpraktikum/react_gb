import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const USER = "Vlad";

ReactDOM.render(
  <React.StrictMode>
    <App user={USER}/>
  </React.StrictMode>,
  document.getElementById('root')
);

