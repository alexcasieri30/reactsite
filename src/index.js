import React from 'react';
import ReactDOM from 'react-dom/client';
import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import "./index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from './Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <div className="container">
      <BrowserRouter>
      <div className="header">
        <Navbar/>
      </div>
      <div className="middle">
        <div className="left">
          
        </div>
        <div className="mid">
          <Routes>
            {routes}
          </Routes>
        </div>
        <div className="right">

        </div>
      </div>
      <div className="footer">

      </div>
      
        
      </BrowserRouter>
    </div>
  </React.StrictMode>
);