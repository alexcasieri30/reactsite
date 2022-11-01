import Carousel from "./Carousel";
import './dropdown.scss';
import { useEffect } from "react";
import { Link } from 'react-router-dom';

function ChooseGameType({currentPage}){

    useEffect(() => {
        if (currentPage==="Games"){
            let gamelink = document.querySelector(".choose-game-link");
            let gamelinktext = document.querySelector(".choose-game-link");
            gamelink.style.border="solid 1px white";
            gamelink.style.color="white";
        }
    })

    function buttonOnclick(e){
        e.currentTarget.classList.toggle("dropdown-active-class")
        if (e.currentTarget.classList.contains('dropdown-link')){
            let prevHTML = document.querySelector(".choose-game-link");
            if (prevHTML.innerHTML === e.currentTarget.innerHTML){
                return;
            }
            let dropdownButton = document.querySelector("[data-dropdown-button]");
            dropdownButton.innerHTML = e.currentTarget.innerHTML;
        }
        let currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('choose-game-active');
        document.querySelectorAll("[data-dropdown].choose-game-active").forEach(dropdown => {
            if (dropdown===currentDropdown){
                return
            }
            dropdown.classList.remove("choose-game-active");
        })
    }
    return(
        <div id="choose-game-dropdown-container">
            <div className="choose-game-dropdown" data-dropdown>
            <button className="choose-game-link" data-dropdown-button onClick={(e) => buttonOnclick(e)}>{currentPage}</button>
                <div className="choose-game-dropdown-menu">
                    <div className="dropdown-heading">
                        <Link to="/games"><div onClick={buttonOnclick} className="dropdown-link">Games</div></Link>
                        <Link to="/fullscreengames"><div onClick={buttonOnclick} className="dropdown-link">Full Screen</div></Link>
                        <Link><div onClick={buttonOnclick} className="dropdown-link">Utility</div></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseGameType;