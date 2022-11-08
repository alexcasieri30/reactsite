import "../styles/navbar.scss";
import Navbar from "../Navbar";
import "./styles/shopall.scss";
import {Link, useLinkClickHandler, useLocation} from "react-router-dom";
import cart from "../images/cart.png";
import TB1 from "../images/Ava/StarGirlTote$35.jpeg";
import TB2 from "../images/Ava/SpiralTote$35.jpeg";
import TB3 from "../images/Ava/PatternTote1$45.jpeg";
import TB4 from "../images/Ava/PinkFacesTote$35.jpeg";
import TB5 from "../images/Ava/BlueSpiralTote$35.jpeg";
import TB6 from "../images/Ava/BlueFacesTote$35.jpeg";

import P1 from "../images/Ava/StarGirlPrint$45.jpeg";
import P2 from "../images/Ava/StarFacePrint$45.jpeg";
import P3 from "../images/Ava/OverlapPrint$45.jpeg";
import P4 from "../images/Ava/BWPrint$30.jpeg";
import P5 from "../images/Ava/BWPrint$30.jpeg";
import P6 from "../images/Ava/BWPrint$30.jpeg";

import S1 from "../images/Ava/WeenSticker$15.png";
import S2 from "../images/Ava/SeaweedDreamsSticker$15.png";
import S3 from "../images/Ava/OGSticker$15.png";

import C1 from "../images/Ava/BlueSpiralShirt$60.jpeg";
import C2 from "../images/Ava/FacesTee$50.jpeg";
import C3 from "../images/Ava/SpiralTee$50.jpeg";
import C4 from "../images/Ava/StarGirlTank$65.jpeg";
import { useEffect } from "react";

let background_color="rgba(100,100,250,0.2)";

export default function ShopAll(){
    const data = useLocation().state;

    useEffect(()=>{
        let body = document.querySelector("body");
        body.style.backgroundColor = "rgba(100,100,250,0.2)";
        let shop_navbar = document.querySelectorAll(".shop-all-page-navbar-items");
        for (let i = 0; i < shop_navbar.length; i++){
            if (!shop_navbar[i].classList.contains('active-section')){
                shop_navbar[i].style.backgroundColor=background_color;
            }
        }
    })
    function navbarClick(e){
        for (let i = 0; i < e.currentTarget.parentNode.children.length; i++){
            e.currentTarget.parentNode.children[i].style.borderBottom="solid 1px black";
            e.currentTarget.parentNode.children[i].style.backgroundColor=background_color;
            e.currentTarget.parentNode.children[i].classList.remove("active-section")
        }
        e.currentTarget.style.borderBottom="none";
        e.currentTarget.style.backgroundColor="lightblue";
        e.currentTarget.classList.add('active-section')
        let allSections = e.currentTarget.parentNode.nextSibling.children
        console.log(allSections);
        for (let i = 0; i < allSections.length; i++){
            allSections[i].classList.add('hidden');
            if (allSections[i].id == e.currentTarget.id + "-content"){
                allSections[i].classList.remove('hidden');
            }
        }
    }
    const active_tab = {borderBottom:'none', backgroundColor: 'lightblue'};
    const hidden_tab = {borderBottom: 'solid 1px black'}
    let tbstyle = data.section=="tote-bags-content"?active_tab:hidden_tab;
    let pstyle = data.section=="prints-content"?active_tab:hidden_tab;
    let cstyle = data.section=="clothes-content"?active_tab:hidden_tab;
    let sstyle = data.section=="stickers-content"?active_tab:hidden_tab;
    if (!data.section){
        tbstyle=active_tab;
    }
    return(
        <div id="show-all-main">
            
            <Navbar/>
            <div className="shopping-cart-icon">
                <Link to="/shop/cart" state={{items: data.items}}><img src={cart} alt="" className="icon-img" style={{height: "30px", width: "30px"}}/></Link>
            </div>
            <div className="shop-all-page-navbar">
                <div className="shop-all-page-navbar-items active-section" style={tbstyle} id="tote-bags" onClick={(e) => navbarClick(e)}>Tote Bags</div>
                <div className="shop-all-page-navbar-items" style={pstyle} id="prints" onClick={(e) => navbarClick(e)}>Prints</div>
                <div className="shop-all-page-navbar-items" style={sstyle} id="stickers" onClick={(e) => navbarClick(e)}>Stickers</div>
                <div className="shop-all-page-navbar-items" style={cstyle} id="clothes" onClick={(e) => navbarClick(e)}>Clothes</div>
            </div>
            <div className="shop-all-page-container">
                <div className="shop-all-page-section" id="tote-bags-content">
                    <div className="shop-all-page-section-content">
                        <div className="shop-all-page-section-rows">
                            <Link className="shop-all-page-section-columns" to="/shop/item/1" state={{items: data.items, section: 'tote-bags-content', img_link:TB1}}>
                                <div className="shop-all-page-image-container">
                                    <img src={TB1} className="shop-all-image" alt="" />
                                </div>
                            </Link>
                            <Link className="shop-all-page-section-columns" to="/shop/item/2" state={{items: data.items, section: 'tote-bags-content', img_link: TB2}}>
                                <div className="shop-all-page-image-container">
                                    <img src={TB2} className="shop-all-image" alt="" />
                                </div>
                            </Link>
                            <Link className="shop-all-page-section-columns" to="/shop/item/3" state={{items: data.items, section: 'tote-bags-content', img_link: TB3}}>
                                <div className="shop-all-page-image-container">
                                    <img src={TB3} className="shop-all-image" alt="" />
                                </div>
                            </Link>
                        </div>
                        <div className="shop-all-page-section-rows">
                            <Link className="shop-all-page-section-columns" to="/shop/item/4" state={{items: data.items, section: 'tote-bags-content', img_link: TB4}}>
                                <div className="shop-all-page-image-container">
                                    <img src={TB4} className="shop-all-image" alt="" />
                                </div>
                            </Link>
                            <Link className="shop-all-page-section-columns" to="/shop/item/5" state={{items: data.items, section: 'tote-bags-content', img_link: TB5}}>
                                <div className="shop-all-page-image-container">
                                    <img src={TB5} className="shop-all-image" alt="" />
                                </div>
                            </Link>
                            <Link className="shop-all-page-section-columns" to="/shop/item/6" state={{items: data.items, section: 'tote-bags-content', img_link: TB6}}>
                                <div className="shop-all-page-image-container">
                                    <img src={TB6} className="shop-all-image" alt="" />
                                </div>
                            </Link>
                        </div>
                        <div className="see-more">
                            <Link to="/shop/all/totebags">See more</Link>
                        </div>
                    </div>
                </div>
                <div className="shop-all-page-section hidden" id="prints-content">
                    <div className="shop-all-page-section-content">
                        <div className="shop-all-page-section-rows">
                            <Link className="shop-all-page-section-columns" to="/shop/item/7" state={{items: data.items, section: 'prints-content', img_link: P1}}>
                                <div className="shop-all-page-image-container">
                                    <img src={P1} className="shop-all-image" alt="" />
                                </div>
                            </Link>
                            <Link className="shop-all-page-section-columns" to="/shop/item/8" state={{items: data.items, section: 'prints-content', img_link: P2}}>
                                <div className="shop-all-page-image-container">
                                    <img src={P2} className="shop-all-image" alt="" />
                                </div>
                            </Link>
                            <Link className="shop-all-page-section-columns" to="/shop/item/9" state={{items: data.items, section: 'prints-content', img_link: P3}}>
                                <div className="shop-all-page-image-container">
                                    <img src={P3} className="shop-all-image" alt="" />
                                </div>
                            </Link>
                        </div>
                        <div className="shop-all-page-section-rows">
                            <Link className="shop-all-page-section-columns" to="/shop/item/10" state={{items: data.items, section: 'prints-content', img_link: P4}}>
                                <div className="shop-all-page-image-container">
                                    <img src={P4} className="shop-all-image" alt="" />
                                </div>
                            </Link>
                            <Link className="shop-all-page-section-columns" to="/shop/item/11" state={{items: data.items, section: 'prints-content', img_link: P5}}>
                                <div className="shop-all-page-image-container">
                                    <img src={P5} className="shop-all-image" alt="" />
                                </div>
                            </Link>
                            <Link className="shop-all-page-section-columns" to="/shop/item/12" state={{items: data.items, section: 'prints-content', img_link: P6}}>
                                <div className="shop-all-page-image-container">
                                    <img src={P6} className="shop-all-image" alt="" />
                                </div>
                            </Link>
                        </div>
                        <div className="see-more">
                            <Link to="/shop/all/prints">See more</Link>
                        </div>
                    </div>
                </div>
                <div className="shop-all-page-section hidden" id="stickers-content">
                    <div className="shop-all-page-section-content">
                        <div className="shop-all-page-section-rows">
                            <Link className="shop-all-page-section-columns" to="/shop/item/13" state={{items: data.items, section: 'stickers-content', img_link: S1}}>
                                <div className="shop-all-page-image-container">
                                    <img src={S1} className="shop-all-image" alt="" />
                                </div>
                            </Link>
                            <Link className="shop-all-page-section-columns" to="/shop/item/14" state={{items: data.items, section: 'stickers-content', img_link: S2}}>
                                <div className="shop-all-page-image-container">
                                    <img src={S2} className="shop-all-image" alt="" />
                                </div>
                            </Link>
                            <Link className="shop-all-page-section-columns" to="/shop/item/15" state={{items: data.items, section: 'stickers-content', img_link: S3}}>
                                <div className="shop-all-page-image-container">
                                    <img src={S3} className="shop-all-image" alt="" />
                                </div>
                            </Link>
                        </div>
                        <div className="shop-all-page-section-rows">
                            <Link className="shop-all-page-section-columns" to="/shop/item/16" state={{items: data.items, section: 'stickers-content'}}>
                                <div>
                                    stickers-item-4
                                </div>
                            </Link>
                            <Link className="shop-all-page-section-columns" to="/shop/item/17" state={{items: data.items, section: 'stickers-content'}}>
                                <div>
                                    stickers-item-5
                                </div>
                            </Link>
                            <Link className="shop-all-page-section-columns" to="/shop/item/18" state={{items: data.items, section: 'stickers-content'}}>
                                <div>
                                    stickers-item-6
                                </div>
                            </Link>
                        </div>
                        <div className="see-more">
                            <Link to="/shop/all/stickers">See more</Link>
                        </div>
                    </div>
                </div>
                <div className="shop-all-page-section hidden" id="clothes-content">
                    <div className="shop-all-page-section-content">
                        <div className="shop-all-page-section-rows">
                            <Link className="shop-all-page-section-columns" to="/shop/item/19" state={{items: data.items, section: 'clothes-content', img_link: C1}}>
                                <div>
                                    <img src={C1} alt="" />
                                </div>
                            </Link>
                            <Link className="shop-all-page-section-columns" to="/shop/item/20" state={{items: data.items, section: 'clothes-content', img_link: C2}}>
                                <div>
                                    <img src={C2} alt="" />
                                </div>
                            </Link>
                            <Link className="shop-all-page-section-columns" to="/shop/item/21" state={{items: data.items, section: 'clothes-content', img_link: C3}}>
                                <div>
                                    <img src={C3} alt="" />
                                </div>
                            </Link>
                        </div>
                        <div className="shop-all-page-section-rows">
                            <Link className="shop-all-page-section-columns" to="/shop/item/22" state={{items: data.items, section: 'clothes-content', img_link: C4}}>
                                <div>
                                    <img src={C4} alt="" />
                                </div>
                            </Link>
                            <Link className="shop-all-page-section-columns" to="/shop/item/23" state={{items: data.items, section: 'clothes-content'}}>
                                <div>
                                    clothes item 5
                                </div>
                            </Link>
                            <Link className="shop-all-page-section-columns" to="/shop/item/24" state={{items: data.items, section: 'clothes-content'}}>
                                <div>
                                    clothes item 6
                                </div>
                            </Link>
                        </div>
                        <div className="see-more">
                            <Link to="/shop/all/clothes">See more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}