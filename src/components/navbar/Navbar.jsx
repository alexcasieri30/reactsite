import React from "react";
import { Link } from "react-router-dom";
import Home from "../../Assets/Images/home.png";
import Settings from "../../Assets/Images/settings.png";
import Games from "../../Assets/Images/games.png";
import Shop from "../../Assets/Images/shop.png";
import About from "../../Assets/Images/about.png";
import Blog from "../../Assets/Images/blogging.png";
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
            <Link to="/games" className="navbar-section">
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