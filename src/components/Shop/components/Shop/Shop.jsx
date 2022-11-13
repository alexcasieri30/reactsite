import React, { useEffect } from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import "./styles/shop.scss";


//featured
import TB2 from "../images/Ava/SpiralTote$35.jpeg";
import P2 from "../images/Ava/StarFacePrint$45.jpeg";
import S3 from "../images/Ava/OGSticker$15.png";
import C3 from "../images/Ava/SpiralTee$50.jpeg";

//latest
import TB1 from "../images/Ava/StarGirlTote$35.jpeg";
import P1 from "../images/Ava/StarGirlPrint$45.jpeg";
import S1 from "../images/Ava/WeenSticker$15.png";
import C1 from "../images/Ava/BlueSpiralShirt$60.jpeg";

//popular
import TB6 from "../images/Ava/BlueFacesTote$35.jpeg";
import P3 from "../images/Ava/OverlapPrint$45.jpeg";
import C4 from "../images/Ava/StarGirlTank$65.jpeg";
//s3

export default function Shop(){
    const data = useLocation().state;
    console.log(data);
    useEffect(()=>{
        let body = document.querySelector("body");
        body.style.backgroundColor = "rgba(100,100,250,0.2)";
        let container = document.querySelector('.container');
        container.style.backgroundColor="lightblue";
    })

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
                            <Link to="/shop/item/1" className="shop-all-item-link" state={{items: data.items, img_link:TB2}}>
                                <div className="shop-all-section-content-items">
                                    <img src={TB2} className="shop-all-image" alt="" />
                                    <div className="item-caption">Star Girl Tote</div>
                                    <div className="item-caption-price">$35.00</div>
                                </div>
                            </Link>
                            <Link to="/shop/item/7" className="shop-all-item-link" state={{items: data.items}}>
                                <div className="shop-all-section-content-items">
                                    <img src={P2} className="shop-all-image" alt="" />
                                </div>
                            </Link>
                            <Link to="/shop/item/13" className="shop-all-item-link" state={{items: data.items}}>
                                <div className="shop-all-section-content-items">
                                    <img src={S3} className="shop-all-image" alt="" />
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
                            <Link to="/shop/item/17" className="shop-all-item-link" state={{items: data.items}}>
                                <div className="shop-all-section-content-items">
                                    <img src={TB1} className="shop-all-image" alt="" />
                                </div>
                            </Link>
                            <Link to="/shop/item/9" className="shop-all-item-link" state={{items: data.items}}>
                                <div className="shop-all-section-content-items">
                                    <img src={P1} className="shop-all-image" alt="" />
                                </div>
                            </Link>
                            <Link to="/shop/item/14" className="shop-all-item-link" state={{items: data.items}}>
                                <div className="shop-all-section-content-items">
                                    <img src={S1} className="shop-all-image" alt="" />
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
                            <Link state={{items: data.items}} className="shop-all-item-link">
                                <div className="shop-all-section-content-items">
                                    <img src={TB6} className="shop-all-image" alt="" />
                                </div>
                            </Link>
                            <Link state={{items: data.items}} className="shop-all-item-link">
                                <div className="shop-all-section-content-items">
                                    <img src={P3} className="shop-all-image" alt="" />
                                </div>
                            </Link>
                            <Link state={{items: data.items}} className="shop-all-item-link">
                                <div className="shop-all-section-content-items">
                                    <img src={C3} className="shop-all-image" alt="" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


