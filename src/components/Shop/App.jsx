import "./App.scss";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";


function App() {

  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;
