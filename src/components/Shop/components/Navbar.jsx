import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import "./styles/navbar.scss";

function Navbar(props){
    const [shopHover, setShopHover] = useState(false)
    const [items, setItems] = useState([]);


    const linkStyle = {
        textDecoration:"none",
    }
    function ShopHover(e){
        if (e.currentTarget.classList[0]=="navbar-section-shop"){
            e.currentTarget.parentNode.children[1].classList.remove("navbar-section-hidden");
        }else{

            if (e.currentTarget.id=="home"){
                e.currentTarget.nextSibling.children[1].classList.add("navbar-section-hidden")
            }else if (e.currentTarget.id=="about"){
                console.log(e.currentTarget.previousSibling.children);
                e.currentTarget.previousSibling.children[1].classList.add("navbar-section-hidden")
            }else{
                console.log(e);
                if (e.currentTarget.id=="shop"){
                    e.currentTarget.children[1].classList.add("navbar-section-hidden");
                }else if (e.currentTarget.classList[0]=="navbar"){
                    
                    console.log(e);
                    
                }
            }
        }
    }
    return(
        <div className="navbar">
            <div className="navbar-shop-title">
                ShopSite
            </div>
            <div className="navbar-container">
                
                <div className="navbar-section" id="shop">
                    <div className="navbar-section-shop" onMouseEnter={(e) => ShopHover(e)}>
                        <Link to="/shop" state={{items: []}}>Shop</Link>
                    </div>
                    <div className="navbar-section-shop-categories navbar-section-hidden"  onMouseLeave={(e) => ShopHover(e)}>
                        <div className="navbar-section-shop-categories-section">
                            <Link to="/shop/all" state={{items: []}} className="Link" style={linkStyle}>Categories</Link>
                        </div>
                        <div className="navbar-section-shop-categories-section">
                            <Link to="/shop/latest" className="Link" style={linkStyle}>Latest</Link>
                        </div>
                        <div className="navbar-section-shop-categories-section">
                            <Link to="/shop/popular" className="Link">Popular</Link>
                        </div>
                    </div>
                </div>
                <div className="navbar-section" id="about" onMouseEnter={(e)=>ShopHover(e)}><Link to="/shop/about">About</Link></div>
                <div className="navbar-section" id="contact">Contact</div>
            </div>
        </div>
    )
}

export default Navbar;