import React from 'react';
import ReactDOM from 'react-dom';
import './core/imports.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import NotFound404 from './app/views/NotFound404.view';
import Home from './app/views/Home.view';
import GlobalStyles from './core/globalStyles';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route  element={<NotFound404 />}/>
    </Routes>
    
    </BrowserRouter>

    <GlobalStyles />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
