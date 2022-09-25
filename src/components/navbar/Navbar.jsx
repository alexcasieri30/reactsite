import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = function(){
    return (
        <div className="main-navbar-container">
            <Link to="/" className="navbar-section">
                <div id="navbar-section-2">
                    Home
                </div>
            </Link>
            <Link to="/about" className="navbar-section">
                <div id="navbar-section-3">
                    About
                </div>
            </Link>
            <Link to="/blog" className="navbar-section">
                <div id="navbar-section4">
                    Blog
                </div>
            </Link>
            <Link to="/shop" className="navbar-section" state={{items: []}}>
                <div id="navbar-section-4">
                    Shop
                </div>
            </Link>
            <Link to="/games" className="navbar-section">
                <div id="navbar-section-5">
                    Games
                </div>
            </Link>
            
        </div>
    )
}

export default Navbar;