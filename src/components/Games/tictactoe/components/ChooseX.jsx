import React, { useState } from "react";
import "./styles/ChooseX.scss";
import x from "./images/x.jpg";
import x1 from "./images/x1.png";
import x2 from "./images/x2.png";
import x3 from "./images/x3.png";
import x4 from "./images/x4.jpg";

function ChooseX({onClick, src}){
    const [active, setActive] = useState(x);

    const handleImageClick = (e) => {
        let parent = e.currentTarget.parentNode.parentNode;
        for (let i = 0; i < parent.children.length; i++){
            parent.children[i].firstChild.classList.remove("active")
        }
        e.currentTarget.classList.add('active');
        setActive(
            e.currentTarget.src
        )
    }
    return(
        <div id="choose-X-div">
            <div id="choose-x-bar-main">
                <div onClick={onClick} className="choose-x-bar-div"><img onClick={(e) => handleImageClick(e)} className="choose-x-bar-img" src={x}></img></div>
                <div onClick={onClick} className="choose-x-bar-div"><img onClick={(e) => handleImageClick(e)} className="choose-x-bar-img" src={x1}></img></div>
                <div onClick={onClick} className="choose-x-bar-div"><img onClick={(e) => handleImageClick(e)} className="choose-x-bar-img" src={x2}></img></div>
                <div onClick={onClick} className="choose-x-bar-div"><img onClick={(e) => handleImageClick(e)} className="choose-x-bar-img" src={x3}></img></div>
                <div onClick={onClick} className="choose-x-bar-div"><img onClick={(e) => handleImageClick(e)} className="choose-x-bar-img" src={x4}></img></div>
            </div>
        </div>
    )
}

export default ChooseX;