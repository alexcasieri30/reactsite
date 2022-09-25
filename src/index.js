import React from 'react';
import ReactDOM from 'react-dom/client';
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import "./index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from './Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container">
      <BrowserRouter>
      <div className="left">
        <Navbar/>
      </div>
      <div className="mid">
        <Routes>
          {routes}
        </Routes>
      </div>
      <div className="right">

      </div>
        
      </BrowserRouter>
    </div>
  </React.StrictMode>
);