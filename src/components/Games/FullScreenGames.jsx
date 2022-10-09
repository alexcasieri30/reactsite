import "./fullscreengames.scss";
import Dropdown from "../Utilities/Dropdown";

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
                    <a href="../gottaCatchThemAll/index.html" id="gcta" className="fs-game-section">
                        <div>
                            Gotta Catch Them All
                        </div>
                    </a>
                    <a href="../memory2/index.html" id="memory2" className="fs-game-section">
                        <div>
                            Memory
                        </div>
                    </a>
                    <a href="" className="fs-game-section" id="other">
                        <div>
                            Other
                        </div>
                    </a>
                </div>
                <div className="fullscreengames-mid-right"></div>
            </div>
            <div className="fullscreengames-bot"></div>
        </div>
    )
}

export default FullScreenGames;