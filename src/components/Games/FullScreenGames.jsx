import "./fullscreengames.scss";
import Dropdown from "../Utilities/Dropdown";
import {Link} from "react-router-dom";

function FullScreenGames(){
    return (
        <div className="fullscreengames-main-container">
            <div className="fullscreengames-main-container-border">
                <div className="fullscreengames-main-container-border-inset">
                    <div className="fullscreengames-top">
                        <div className="fullscreengames-top-left">
                            space
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