import "./styles/gameboard.scss";
import Board from "./Board";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

let spots = [];
for (let i = 0; i < 300; i++){
    spots.push(i);
}

function GameBoard({ newGameButton, playerShips, computerShips }){
    const [playerShipsCaught, setPlayerShipsCaught] = useState(['','','','','']);
    const [playerIndex, setPlayerIndex] = useState(0);
    
    const [compShipsCaught, setCompShipsCaught] = useState(['','','','','']);
    const [compIndex, setCompIndex] = useState(0);
    const [compBoardSpotsRemaining, setCompBoardSpotsRemaining] = useState([...spots]);

    const [gameOver, setGameOver] = useState(false);
    //0 if computer, 1 if player
    const [winner, setWinner] = useState(-1);


    function onCellClick(target, player){
        if (!player){
            handlePlayerClick(target);
            setTimeout(handleComputerClick, 200);
        }
    }
    
    function handlePlayerClick(target){
        let included=false;
        for (let i = 0; i < computerShips.length; i++){
            if (computerShips[i].includes(parseInt(target.id))){
                let index = computerShips[i].indexOf(parseInt(target.id));
                computerShips[i].splice(index, 1);
                included=true;
                target.classList.add('chosen-ship');
                if (computerShips[i].length == 0){
                    playerShipsCaught[playerIndex] = i+2
                    setPlayerIndex(playerIndex+1)
                    setPlayerShipsCaught(playerShipsCaught)
                    if (playerShipsCaught[4]!=''){
                        setWinner(0);
                        setGameOver(true);
                    } 
                }
            }
        }
        if (!included){
            target.classList.add('chosen')
        }
    }
    function handleComputerClick(){
        let randomIndex = Math.floor( Math.random()*compBoardSpotsRemaining.length );
        let randomSpot = compBoardSpotsRemaining[randomIndex];
        compBoardSpotsRemaining.splice(randomIndex, 1)
        setCompBoardSpotsRemaining(compBoardSpotsRemaining)
        let myBoard = document.querySelectorAll(".board-container")[0];
        for (let i = 0; i < myBoard.children.length; i++){
            if (myBoard.children[i].id==randomSpot){
                myBoard.children[i].classList.add('chosen')
                for (let x = 0; x < playerShips.length; x++){
                    if (playerShips[x].includes(randomSpot)){
                        myBoard.children[i].style.backgroundColor="red";
                    }
                }
            }
        }
        for (let i = 0; i < playerShips.length; i++){
            if (playerShips[i].includes(randomSpot)){
                let index = playerShips[i].indexOf(randomSpot);
                playerShips[i].splice(index, 1);
                if (playerShips[i].length == 0){
                    compShipsCaught[compIndex] = i+2
                    setCompIndex(compIndex+1)
                    setCompShipsCaught(compShipsCaught)
                    if (compShipsCaught[4]!=''){
                        setWinner(1);
                        setGameOver(true);
                    } 
                }
            }
        }
    }
    function newGameButtonClick(){
        console.log('click')
    }
    // might have to use router to route back to the startover page
    // function startOver(){
    //     setPlayerShipsCaught(['','','','','']);
    //     setPlayerIndex(0);
    //     setCompShipsCaught(['','','','','']);
    //     setCompIndex(0);
    //     setCompBoardSpotsRemaining([...spots]);
    //     setGameOver(false);
    //     setWinner(-1);
    // }
    return(
        <div className="gameboard-container-div">
            {gameOver==false && <div className="gameboard-container">
                <div className="player-board-container">
                    <div className="player-board">
                        <Board player={true} ships={playerShips} onCellClick={onCellClick}/>
                    </div>
                    <div className="my-ships-captured">
                        <div className="my-ships-captured-title">
                            CAPTURED: 
                        </div>
                        <div className="player-captured-ships">
                            {playerShipsCaught.map((ship)=>{
                                return(<div className={ship!=''?"player-captured-ship captured-section":"player-captured-ship"}>{ship}</div>)
                            })}
                        </div>
                    </div>
                </div>
                <div className="computer-board-container">
                    <div className="computer-board">
                        <Board player={false} ships={computerShips} onCellClick={onCellClick}/>
                    </div> 
                    <div className="comp-ships-captured">
                        <div className="comp-ships-captured-title">
                            CAPTURED: 
                        </div>
                        <div className="comp-captured-ships">
                            {compShipsCaught.map((ship)=>{
                                return(<div className={ship!=''?"comp-captured-ship captured-section":"comp-captured-ship"}>{ship}</div>)
                            })}
                        </div>
                    </div>
                </div>
            </div>}
            {gameOver==true && 
            <div className="game-over-display-div">
                <div className="game-over-title">GAME OVER</div>
                {winner==0 && 
                    <div className="win-banner">
                        YOU WIN!
                    </div>}
                {winner==1 && 
                    <div className="win-banner">
                        Computer wins
                    </div>}
                <div className="player-win-display battleship-game-over-banner">
                    <button onClick={newGameButton} id="new-game">Play Again</button>
                    <div className="you-win-stats-table-div" style={{border: 'solid 1px black'}}>
                        STATS
                        <div className="battleship-stats-table">
                            <div className="battleship-stats-table-tr">
                                <div className="battleship-stats-table-tr-td">1</div>
                                <div className="battleship-stats-table-tr-td">2</div>
                                <div className="battleship-stats-table-tr-td">3</div>
                            </div>
                            <div className="battleship-stats-table-tr">
                                <div className="battleship-stats-table-tr-td">1</div>
                                <div className="battleship-stats-table-tr-td">2</div>
                                <div className="battleship-stats-table-tr-td">3</div>
                            </div>
                            <div className="battleship-stats-table-tr">
                                <div className="battleship-stats-table-tr-td">1</div>
                                <div className="battleship-stats-table-tr-td">2</div>
                                <div className="battleship-stats-table-tr-td">3</div>
                            </div>
                            <div className="battleship-stats-table-tr">
                                <div className="battleship-stats-table-tr-td">1</div>
                                <div className="battleship-stats-table-tr-td">2</div>
                                <div className="battleship-stats-table-tr-td">3</div>
                            </div>
                            <div className="battleship-stats-table-tr">
                                <div className="battleship-stats-table-tr-td">1</div>
                                <div className="battleship-stats-table-tr-td">2</div>
                                <div className="battleship-stats-table-tr-td">3</div>
                            </div>
                            <div className="battleship-stats-table-tr">
                                <div className="battleship-stats-table-tr-td">1</div>
                                <div className="battleship-stats-table-tr-td">2</div>
                                <div className="battleship-stats-table-tr-td">3</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default GameBoard;