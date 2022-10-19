import "./fullscreengames.scss";
import Dropdown from "../Utilities/Dropdown";
import {Link} from "react-router-dom";

function FullScreenGames(){
    return (
        <div className="fullscreengames-main-container">
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
            <div className="fullscreengames-mid">
                <div className="fullscreengames-mid-left"></div>
                <div className="fullscreengames-mid-mid">
                    <div id="gcta" className="fs-game-section">
                        <div className="fs-game-section-top">
                            Gotta Catch Them All
                        </div>
                        <div className="fs-game-section-bottom">
                            <button className="fullscreen-play-button">
                                <a href="../gottaCatchThemAll/index.html">
                                    Play
                                </a>
                            </button>
                        </div>
                    </div>

                    <div id="memory2" className="fs-game-section">
                        <div className="fs-game-section-top">
                            Memory
                        </div>
                        <div className="fs-game-section-bottom">
                            <button className="fullscreen-play-button">
                                <a href="../memory2/index.html">
                                    Play
                                </a>
                            </button>
                        </div>
                    </div>
                    <div id="lostinny" className="fs-game-section">
                        <div className="fs-game-section-top">
                            Lost in New York
                        </div>
                        <div className="fs-game-section-bottom">
                            <button className="fullscreen-play-button">
                                <Link to="/fullscreengames/where">
                                    Play
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="fullscreengames-mid-right"></div>
            </div>
            <div className="fullscreengames-bot"></div>
        </div>
    )
}

export default FullScreenGames;