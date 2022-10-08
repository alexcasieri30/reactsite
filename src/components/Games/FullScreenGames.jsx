import "./fullscreengames.scss";


function FullScreenGames(){
    return (
        <div className="fullscreengames-main-container">
            <div className="fullscreengames-top"></div>
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