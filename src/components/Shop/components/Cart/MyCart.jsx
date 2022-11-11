import Navbar from "../Navbar";
import React, { useState, useEffect } from "react";
import { useLocation, Link, useSearchParams } from "react-router-dom";
import "./styles/mycart.scss";

const productIds = {
    '1': 'tote-bag-1',
    '2': 'tote-bag-2',
    '3': 'tote-bag-3',
    '4': 'tote-bag-4',
    '5': 'tote-bag-5',
    '6': 'tote-bag-6',
}


export default function(){
    const data = useLocation().state;
    const [items, setItems] = useState();
    const [subTotal, setSubTotal] = useState(0);
    console.log("data: ", data);
    useEffect(() => {
        console.log(data.items);
        let total = Math.round(data.items.reduce((prev, cur) => prev + parseFloat(cur.totalPrice.substring(1)), 0)*100)/100
        console.log(total);
        setSubTotal(total);
        console.log('setting subtotal')
        document.getElementById('checkout-price').innerHTML = "$" + total;
    })

    function removeItem(e) {
        console.log("removing")
        let items = e.currentTarget.parentNode.parentNode.parentNode.children;
        let index = -1;
        for (let i = 0; i < items.length; i++){
            let item = items[i];
            if (item.children[1].children[0]==e.currentTarget){
                index = i;
                break;
            }
        }
        data.items.splice(index, 1);
        setSubTotal(Math.round(data.items.reduce((prev, cur) => prev + cur.totalPrice, 0)*100)/100)
    }
    console.log(subTotal);
    return(
        <div className="your-cart-main">
            
           {data.items!=null && 
                <div className="your-cart-container">
                    <div className="your-cart-header">
                        Shopping Cart
                    </div>
                    <div className="your-cart-mid">
                        <div className="your-cart-items">
                            {(data.items.length == 0) && 
                                <div className="no-items-to-show">
                                    No Items to Show!
                                </div>
                            }
                            {data.items.map((item)=> {
                                return(
                                    <div className="your-cart-items-container">
                                        <div className="your-cart-items-item">
                                            <div className="your-cart-items-item-name">{item.name} ({item.quantity})</div>
                                            <div className="your-cart-items-item-price">Subtotal: {item.totalPrice}</div>
                                        </div>
                                        <div className="your-cart-items-remove">
                                            <button className="remove-item" onClick={(e) => removeItem(e)}>
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                    
                                )
                            })}
                        </div>
                        <div className="your-cart-checkout">
                            <div className="your-cart-checkout-title">
                                <strong>Checkout</strong>
                            </div>

                            <div className="your-cart-checkout-totalprice">
                                Total price: <br /><div id="checkout-price">{subTotal}</div>
                            </div>
                            <div className="space">

                            </div>
                            <div className="your-cart-checkout-confirm">
                                <button className="submit-order">
                                    Place Order
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="your-cart-footer">
                        <br />
                        <Link to="/shop" state={{items: data.items}}><button id="checkout-back-button">Back</button></Link>
                    </div>
                </div>
            }
        </div>
    )
}