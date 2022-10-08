import "./styles/gameplay.scss";
import StartBoard from "./StartBoard";
import GameBoard from "./GameBoard";
import { useState, useEffect } from "react";


function GamePlay(){
    const [starting, setStarting] = useState(true);
    const [playerShips, setPlayerShips] = useState([]);
    const [computerShips, setComputerShips] = useState([]);

    function startGame(){
        setStarting(false);
        setComputerShips(generateComputerShips());
    }

    function playAgainButton(){
        console.log("play again clicked -- from gamePlay")
        setStarting(true);
    }

    function generateComputerShips(){
        let comp_ships = [];
        for (let i = 0; i < 5; i++){
            let j = -1;
            while ((j%15)+1<(i+2)){
                j = Math.floor( 5 + Math.random()*295 )
            }
            let temp = [];
            for (let x = j-(i+1); x < j+1; x++){
                temp.push(x);
            }
            comp_ships.push(temp)
        }
        return comp_ships;
    }

    return(
        <div id="main">
            <div className="main-container">
                {starting && <StartBoard newGameButton={playAgainButton} setPlayerShips={setPlayerShips}/>}
                {!starting && <GameBoard newGameButton={playAgainButton} playerShips={playerShips} computerShips={computerShips}/>}
            </div>
            
            {starting && <div className="main-footer">
                <button id="start-game" onClick={startGame}>Start</button>
            </div>}
        </div>
    )
}

export default GamePlay;