import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';


ReactDOM.render(
  <BrowserRouter>
    <App className="App content-container d-flex flex-column h-100"/>
  </BrowserRouter>,
  document.getElementById('root')
);

