import "./App.scss";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";


function App() {

  useEffect(()=>{
    let container = document.querySelector('.container');
    container.style.backgroundColor = "white";
    console.log("going to shop")
    let body = document.querySelector('body');
    body.style.backgroundColor="lightblue";
  })

  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;
