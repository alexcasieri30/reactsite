import "./styles/startboard.scss";
import Board from "./SetBoard";
import { useState } from "react";

function StartBoard({ setPlayerShips }){
    const [ship, setShip] = useState(-1);
    const [hovering, setHovering] = useState(false);
    const [readyToStart, setReadyToStart] = useState(false);
    const [numShipsPlaced, setNumShipsPlaced] = useState(0);

    //called when I click on the right side available ships
    function placeShip(event){
        setHovering(true);
        setShip(event.currentTarget.id);
    }

    function removeAvailableShip(shipNum){
        let el = document.getElementById(`ship-number-${shipNum-1}`)
        el.style.display="none";
    }
    return(
        <div className="startboard-container">
            <div className="startboard-left">
                <div className="startboard-left-board">
                    <Board setPlayerShips={setPlayerShips} setReadyToStart={setReadyToStart} numShipsPlaced={numShipsPlaced} setNumShipsPlaced={setNumShipsPlaced} hovering={hovering} setHovering={setHovering} removeAvailableShip={removeAvailableShip} shipCellNum={ship}/>
                </div>
            </div>
            <div className="startboard-right">
                <div className="place-ships-title">
                    Place your ships
                </div>
                {!readyToStart && <div className="place-ships-container">
                    <div className="ship-place">
                        <div className="ship-container-div">
                            <div className="ship-container" id="ship-number-1">
                                <div className="ship-cell" onClick={(e) => placeShip(e)} id="2"></div>
                                <div className="ship-cell" onClick={(e) => placeShip(e)} id="2"></div>
                            </div>
                        </div>
                    </div>
                    <div className="ship-place">
                        <div className="ship-container-div">
                            <div className="ship-container" id="ship-number-2">
                                <div className="ship-cell" onClick={(e) => placeShip(e)} id="3"></div>
                                <div className="ship-cell" onClick={(e) => placeShip(e)} id="3"></div>
                                <div className="ship-cell" onClick={(e) => placeShip(e)} id="3"></div>
                            </div>
                        </div>
                    </div>
                    <div className="ship-place">
                        <div className="ship-container-div">
                            <div className="ship-container" id="ship-number-3">
                                <div className="ship-cell" onClick={(e) => placeShip(e)} id="4"></div>
                                <div className="ship-cell" onClick={(e) => placeShip(e)} id="4"></div>
                                <div className="ship-cell" onClick={(e) => placeShip(e)} id="4"></div>
                                <div className="ship-cell" onClick={(e) => placeShip(e)} id="4"></div>
                            </div>
                        </div>
                    </div>
                    <div className="ship-place">
                        <div className="ship-container-div">
                            <div className="ship-container" id="ship-number-4">
                                <div className="ship-cell" onClick={(e) => placeShip(e)} id="5"></div>
                                <div className="ship-cell" onClick={(e) => placeShip(e)} id="5"></div>
                                <div className="ship-cell" onClick={(e) => placeShip(e)} id="5"></div>
                                <div className="ship-cell" onClick={(e) => placeShip(e)} id="5"></div>
                                <div className="ship-cell" onClick={(e) => placeShip(e)} id="5"></div>
                            </div>
                        </div>
                    </div>
                    <div className="ship-place">
                        <div className="ship-container-div">
                            <div className="ship-container" id="ship-number-5">
                                <div className="ship-cell" onClick={(e) => placeShip(e)} id="6"></div>
                                <div className="ship-cell" onClick={(e) => placeShip(e)} id="6"></div>
                                <div className="ship-cell" onClick={(e) => placeShip(e)} id="6"></div>
                                <div className="ship-cell" onClick={(e) => placeShip(e)} id="6"></div>
                                <div className="ship-cell" onClick={(e) => placeShip(e)} id="6"></div>
                                <div className="ship-cell" onClick={(e) => placeShip(e)} id="6"></div>
                            </div>
                        </div>
                    </div>
                </div>}
                {readyToStart && 
                    <div className="ready-to-play-display">
                        <div className="message-container">
                            <div className="message">
                                Your ships are placed!
                            </div> 
                            <div className="message2">
                                Press Start to begin!
                            </div>
                        </div>
                    </div>}
            </div>
        </div>
    )
}

export default StartBoard;