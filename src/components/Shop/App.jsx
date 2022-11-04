import "./App.scss";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";


function App() {

  useEffect(()=>{
    let navbar_background = document.querySelector(".navbar");
    navbar_background.style.backgroundColor="white";
    let container = document.querySelector(".container");
    container.style.backgroundColor="white";
  })

  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;
