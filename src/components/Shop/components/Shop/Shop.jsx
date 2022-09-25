import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import "./styles/shop.scss";


export default function Shop(){
    const data = useLocation().state;
    console.log(data);
    return(
        <div id="shop-main-container">
            <Navbar/>
            <div className="shop-all-container">
                <div className="shop-all-section" id="featured">
                    <div className="shop-all-section-title">
                        Featured
                    </div>
                    <div className="shop-all-section-content">
                        <div className="shop-all-section-content-container">
                            <Link to="/shop/item/1" state={{items: data.items}}>
                                <div className="shop-all-section-content-items">
                                    Tote bag 1
                                </div>
                            </Link>
                            <Link to="/shop/item/7" state={{items: data.items}}>
                                <div className="shop-all-section-content-items">
                                    Print 1
                                </div>
                            </Link>
                            <Link to="/shop/item/13" state={{items: data.items}}>
                                <div className="shop-all-section-content-items">
                                    Sticker 1
                                </div>
                            </Link>
                            <Link to="/shop/item/19" state={{items: data.items}}>
                                <div className="shop-all-section-content-items">
                                    Clothing item 1
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="shop-all-section" id="latest">
                    <div className="shop-all-section-title">
                        Latest
                    </div>
                    <div className="shop-all-section-content">
                        <div className="shop-all-section-content-container">
                            <Link to="/shop/item/17" state={{items: data.items}}>
                                <div className="shop-all-section-content-items">
                                    Latest sticker
                                </div>
                            </Link>
                            <Link to="/shop/item/9" state={{items: data.items}}>
                                <div className="shop-all-section-content-items">
                                    Latest print
                                </div>
                            </Link>
                            <Link to="/shop/item/14" state={{items: data.items}}>
                                <div className="shop-all-section-content-items">
                                    Another sticker
                                </div>
                            </Link>
                            <Link to="/shop/item/21" state={{items: data.items}}>
                                <div className="shop-all-section-content-items">
                                    Latest sweatshirt
                                </div>
                            </Link>
                            
                        </div>
                    </div>
                </div>
                <div className="shop-all-section" id="popular">
                    <div className="shop-all-section-title">
                        Popular
                    </div>
                    <div className="shop-all-section-content">
                        <div className="shop-all-section-content-container">
                            <Link state={{items: data.items}}>
                                <div className="shop-all-section-content-items">
                                    Bags
                                </div>
                            </Link>
                            <Link state={{items: data.items}}>
                                <div className="shop-all-section-content-items">
                                    Stickers
                                </div>
                            </Link>
                            <Link state={{items: data.items}}>
                                <div className="shop-all-section-content-items">
                                    Prints
                                </div>
                            </Link>
                            <Link state={{items: data.items}}>
                                <div className="shop-all-section-content-items">
                                    Clothes
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


