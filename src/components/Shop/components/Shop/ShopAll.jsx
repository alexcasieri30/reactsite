import "../styles/navbar.scss";
import Navbar from "../Navbar";
import "./styles/shopall.scss";
import {Link, useLinkClickHandler, useLocation} from "react-router-dom";
import cart from "../images/cart.png";

export default function ShopAll(){
    const data = useLocation().state;
    console.log(data, "From ShopAll");

    function navbarClick(e){
        for (let i = 0; i < e.currentTarget.parentNode.children.length; i++){
            e.currentTarget.parentNode.children[i].style.borderBottom="solid 1px black";
            e.currentTarget.parentNode.children[i].style.backgroundColor="white";
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
    console.log(data);
    return(
        <div id="show-all-main">
            
            <Navbar/>
            <div className="shopping-cart-icon">
                <Link to="/shop/cart" state={{items: data.items}}><img src={cart} alt="" className="icon-img" style={{height: "30px", width: "30px"}}/></Link>
            </div>
            <div className="shop-all-page-navbar">
                <div className="shop-all-page-navbar-items" style={tbstyle} id="tote-bags" onClick={(e) => navbarClick(e)}>Tote Bags</div>
                <div className="shop-all-page-navbar-items" style={pstyle} id="prints" onClick={(e) => navbarClick(e)}>Prints</div>
                <div className="shop-all-page-navbar-items" style={sstyle} id="stickers" onClick={(e) => navbarClick(e)}>Stickers</div>
                <div className="shop-all-page-navbar-items" style={cstyle} id="clothes" onClick={(e) => navbarClick(e)}>Clothes</div>
            </div>
            <div className="shop-all-page-container">
                <div className="shop-all-page-section" id="tote-bags-content">
                    <div className="shop-all-page-section-content">
                        <div className="shop-all-page-section-rows">
                            <Link  className="shop-all-page-section-columns" to="/shop/item/1" state={{items: data.items, section: 'tote-bags-content'}}>
                                <div>
                                    tote bag item 1
                                </div>
                            </Link>
                            <Link  className="shop-all-page-section-columns" to="/shop/item/2" state={{items: data.items, section: 'tote-bags-content'}}>
                                <div>
                                    tote bag item 2
                                </div>
                            </Link>
                            <Link className="shop-all-page-section-columns" to="/shop/item/3" state={{items: data.items, section: 'tote-bags-content'}}>
                                <div>
                                    tote bag item 3
                                </div>
                            </Link>
                        </div>
                        <div className="shop-all-page-section-rows">
                            <Link className="shop-all-page-section-columns" to="/shop/item/4" state={{items: data.items, section: 'tote-bags-content'}}>
                                <div>
                                    tote bag item 4
                                </div>
                            </Link>
                            <Link className="shop-all-page-section-columns" to="/shop/item/5" state={{items: data.items, section: 'tote-bags-content'}}>
                                <div>
                                    tote bag item 5
                                </div>
                            </Link>
                            <Link className="shop-all-page-section-columns" to="/shop/item/6" state={{items: data.items, section: 'tote-bags-content'}}>
                                <div>
                                    tote bag item 6
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
                            <Link className="shop-all-page-section-columns" to="/shop/item/7" state={{items: data.items, section: 'prints-content'}}>
                                <div>
                                    prints-item-1
                                </div>
                            </Link>
                            <Link className="shop-all-page-section-columns" to="/shop/item/8" state={{items: data.items, section: 'prints-content'}}>
                                <div>
                                    prints-item-2
                                </div>
                            </Link>
                            <Link className="shop-all-page-section-columns" to="/shop/item/9" state={{items: data.items, section: 'prints-content'}}>
                                <div>
                                    prints-item-3
                                </div>
                            </Link>
                        </div>
                        <div className="shop-all-page-section-rows">
                            <Link className="shop-all-page-section-columns" to="/shop/item/10" state={{items: data.items, section: 'prints-content'}}>
                                <div>
                                    prints-item-4
                                </div>
                            </Link>
                            <Link className="shop-all-page-section-columns" to="/shop/item/11" state={{items: data.items, section: 'prints-content'}}>
                                <div>
                                    prints-item-5
                                </div>
                            </Link>
                            <Link className="shop-all-page-section-columns" to="/shop/item/12" state={{items: data.items, section: 'prints-content'}}>
                                <div>
                                    prints-item-6
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
                            <Link className="shop-all-page-section-columns" to="/shop/item/13" state={{items: data.items, section: 'stickers-content'}}>
                                <div>
                                    stickers-item-1
                                </div>
                            </Link>
                            <Link className="shop-all-page-section-columns" to="/shop/item/14" state={{items: data.items, section: 'stickers-content'}}>
                                <div>
                                    stickers-item-2
                                </div>
                            </Link>
                            <Link className="shop-all-page-section-columns" to="/shop/item/15" state={{items: data.items, section: 'stickers-content'}}>
                                <div>
                                    stickers-item-3
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
                            <Link className="shop-all-page-section-columns" to="/shop/item/19" state={{items: data.items, section: 'clothes-content'}}>
                                <div>
                                    clothes-item 1
                                </div>
                            </Link>
                            <Link className="shop-all-page-section-columns" to="/shop/item/20" state={{items: data.items, section: 'clothes-content'}}>
                                <div>
                                    clothes item 2
                                </div>
                            </Link>
                            <Link className="shop-all-page-section-columns" to="/shop/item/21" state={{items: data.items, section: 'clothes-content'}}>
                                <div>
                                    clothes item 3
                                </div>
                            </Link>
                        </div>
                        <div className="shop-all-page-section-rows">
                            <Link className="shop-all-page-section-columns" to="/shop/item/22" state={{items: data.items, section: 'clothes-content'}}>
                                <div>
                                    clothes item 4
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