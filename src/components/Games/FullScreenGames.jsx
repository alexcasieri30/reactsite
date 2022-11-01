import "./fullscreengames.scss";
import Dropdown from "../Utilities/Dropdown";
import {Link} from "react-router-dom";
import { useEffect } from "react";

function FullScreenGames(){

    useEffect(() => {
        let mouse_move = document.querySelector(".mouse-move");
        if (mouse_move){
            mouse_move.addEventListener("mousemove", function(event){
                let x = event.clientX + 330 * (event.clientX / window.innerWidth),
                    y = event.clientY - 130 + window.scrollY + (260 * event.clientY / window.innerHeight);
                let element = document.createElement('span');
                    element.setAttribute('class', 'element-child');
                    element.style.left = `${x}px`;
                    element.style.top = `${y}px`;
                    this.appendChild(element);
                    setTimeout(() => {
                        element.remove()
                    }, 1000)
            })
        }
    })

    return (
        <div className="fullscreengames-main-container mouse-move">
            <div className="fullscreengames-main-container-border">
                <div className="fullscreengames-main-container-border-inset">
                    <div className="fullscreengames-top">
                        <div className="fullscreengames-top-left">
                            Change format
                        </div>
                        <div className="fullscreengames-top-title">
                            <div className="fullscreengames-top-title-featured">
                                Full Screen
                            </div>
                            <div className="fullscreengames-top-title-games">
                                Games
                            </div>
                        </div>
                        <div className="fullscreengames-top-right">
                            <div className="fullscreengames-top-dropdown">
                                <Dropdown currentPage={"Full Screen"}></Dropdown>
                            </div>
                        </div>
                    </div>
                    <div className="fullscreengames-mid-border">
                        <span className="fullscreengames-mid-border-inset">
                            <div className="fullscreengames-mid">
                                <div className="fullscreengames-mid-left"></div>
                                <div className="fullscreengames-mid-mid">
                                    <div id="gcta" className="fs-game-section">
                                        <div className="fs-game-section-top">
                                            Gotta Catch Them All
                                        </div>
                                        <div className="fs-game-section-bottom">
                                            <a href="../gottaCatchThemAll/index.html">
                                                <button className="fullscreen-play-button">
                                                    Play
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                    <div id="memory2" className="fs-game-section">
                                        <div className="fs-game-section-top">
                                            Memory
                                        </div>
                                        <div className="fs-game-section-bottom">
                                            <a href="../memory2/index.html">
                                                <button className="fullscreen-play-button">
                                                    Play
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                    <div id="lostinny" className="fs-game-section">
                                        <div className="fs-game-section-top">
                                            Lost in New York
                                        </div>
                                        <div className="fs-game-section-bottom">
                                            <Link to="/fullscreengames/where">
                                                <button className="fullscreen-play-button">
                                                    Play
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="fullscreengames-mid-right"></div>
                            </div>
                        </span>
                    </div>
                    <div className="fullscreengames-bot">
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullScreenGames;