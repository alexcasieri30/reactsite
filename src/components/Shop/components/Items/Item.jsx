import {Link, useLinkClickHandler, useLocation} from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Item.scss";


export default function Item({name, price, imageSource}){
    const data = useLocation().state;

    const [confirmUp, setConfirmUp] = useState(false);
    const [added, setAdded] = useState(false);

    useEffect(()=>{
        let body = document.querySelector('body');
        body.style.backgroundColor="lightblue";
    })

    function confirmAdd(currentItem){
        let confirmButton = document.querySelector(".item1-confirm-add");
        if (confirmButton.style.display=="inline"){
            confirmButton.style.display="none";
        }
        let dropdown = document.querySelector(".item1-quantity-select");
        data.items.push({
            name: currentItem,
            quantity: dropdown.value,
            totalPrice: "$" + (price * parseInt(dropdown.value)).toString(),
        })
        setAdded(true);
        setConfirmUp(false);
    }

    function toggleConfirmAdd(){
        let confirmAdd = document.querySelector(".item1-confirm-add");
        if (confirmAdd.style.display== "none"){
            confirmAdd.style.display = "inline";
            setConfirmUp(true);
        }else{
            confirmAdd.style.display = "none";
            setConfirmUp(false);
        }
    }

    // useEffect(()=> {
    //     let img_div = document.querySelector(".item1-image-source");
    //     let 
    // })

    return(
        <div className="item1-container">
            <div className="item1-section1">
                {name}
            </div>
            <div className="item1-section2">
                <div className="item1-section2-left"></div>
                <div className="item1-section2-mid">
                    <div className="item1-image">
                        <div className="item1-image-image">
                            <div className="item1-image-source">
                                <img src={data.img_link} className="item1-page-item-image" alt="" />
                            </div>
                            <div className="item1-image-description">
                                Desc
                            </div>
                        </div>
                        <div className="item1-image-checkout">
                            <div className="item1-add-container">
                                <button className="item1-add-to-cart" onClick={toggleConfirmAdd}>
                                    {confirmUp ? "Nevermind!" : "Add to Cart"}
                                </button>
                            </div>
                            <div className="item1-confirm-add-container">
                                <button className="item1-confirm-add" style={{display: 'none'}} onClick={() => confirmAdd(name)}>
                                    Confirm: 
                                </button>
                            </div>
                            <Link className="item1-view-cart-link" to="/shop/cart" state={{items: data.items}}>View Cart</Link>
                        </div>
                    </div>
                    <div className="item1-info">
                        <div className="item1-price">
                            ${price}
                        </div>
                        <div className="item1-quantity">
                            Quantity: 
                        </div>
                        <div className="item1-quantity-dropdown">
                            <select name="quantity" id="" className="item1-quantity-select">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                        </div>
                        <div className="return-policy">
                            <div className="return-policy-title">
                                Return Policy:
                            </div>
                            <div className="return-policy-text">
                                If you are not satisfied with your purchase, 
                                you may reach out to <strong>testEmail@example.com</strong> with the reason why
                                you are unsatisfied, and we will offer a full refund 
                                if it is within 90 days of purchase. 
                            </div>
                        </div>
                        {added && 
                        <div className="item-added-info">
                            <div id="item-info-table" style={{fontSize: '20pt', marginBottom:'20px'}}>
                                <div className="item-added-title">
                                    Added!
                                </div>
                                <div className="hide-added-item-popup">
                                    <div id="hide-table" onClick={()=>setAdded(false)}>X</div>
                                </div>
                            </div>
                            
                            <table className="you-added-item1-info">
                                <tr className="you-added-item1-info-tr">
                                    <td>Item:</td>
                                    <td>{data.items[(data.items.length)-1].name}</td>
                                </tr>
                                <tr className="you-added-item1-info-tr">
                                    <td>Quantity: </td>
                                    <td>{data.items[(data.items.length)-1].quantity}</td>
                                </tr>
                                <tr className="you-added-item1-info-tr">
                                    <td>Price: </td>
                                    <td>{data.items[(data.items.length)-1].totalPrice}</td>
                                </tr>
                            </table>
                        </div>}
                    </div>
                </div>
                <div className="item1-section2-right"></div>
            </div>
            <div className="item1-section3">
                {
                    data.section && <Link to="/shop/all" state={{items: data.items, section: data.section}}><button id="checkout-back-button">Back</button></Link>
                }
                {
                    !data.section && <Link to="/shop" state={{items: data.items}}><button id="checkout-back-button">Back</button></Link>
                }
            </div>
        </div>
    )
}
