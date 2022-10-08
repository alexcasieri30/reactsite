import React from "react";
import { Link } from "react-router-dom";
import Home from "./images/home.png";
import Settings from "./images/settings.png";
import Games from "./images/games.png";
import Shop from "./images/shop.png";
import About from "./images/about.png";
import Blog from "./images/blogging.png";
import "./navbar.scss";

const Navbar = function(){
    return (
        <div className="main-navbar-container">
            <Link to="/about" className="navbar-section">
                <div id="navbar-section-2">
                    <img src={About} style={{'height':'1.5em', 'width':'auto'}} className="navbar-icon" alt="" />
                </div>
            </Link>
            <Link to="/blog" className="navbar-section">
                <div id="navbar-section-3">
                    <img src={Blog} style={{'height':'1.5em', 'width':'auto'}} className="navbar-icon" alt="" />
                </div>
            </Link>
            <Link to="/" className="navbar-section">
                <div id="navbar-section-1">
                    <img src={Home} style={{'height':'2.5em', 'width':'auto'}} className="navbar-icon" alt="" />
                </div>
            </Link>
            <Link to="/chooseGameType" className="navbar-section">
                <div id="navbar-section-5">
                    <img src={Games} style={{'height':'2.5em', 'width':'auto'}} className="navbar-icon" alt="" />
                </div>
            </Link>
            <Link to="/shop" className="navbar-section" state={{items: []}}>
                <div id="navbar-section-4">
                    <img src={Shop} style={{'height':'1.5em', 'width':'auto'}} className="navbar-icon" alt="" />
                </div>
            </Link>
            <Link to="/settings" className="navbar-section">
                <div id="navbar-section-6">
                    <img src={Settings} style={{'height':'1.5em', 'width':'auto'}} className="navbar-icon" alt="" />
                </div>
            </Link>
        </div>
    )
}

export default Navbar;