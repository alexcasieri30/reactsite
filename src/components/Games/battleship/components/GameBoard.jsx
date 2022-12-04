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
    const [numTurns, setNumTurns] = useState(0);
    const [pastData, setPastData] = useState(null);

    const [gameOver, setGameOver] = useState(false);
    //0 if computer, 1 if player
    const [winner, setWinner] = useState(-1);


    useEffect(() => {
        if (pastData == null){
            getData()
        }
    })


    function onCellClick(target, player){
        if (!player){
            handlePlayerClick(target);
            setTimeout(handleComputerClick, 200);
        }
    }
    
    async function handlePlayerClick(target){
        setNumTurns(numTurns + 1)
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
                        await sendData();
                        await getData();
                        console.log("PastData: ", pastData);
                    } 
                }
            }
        }
        if (!included){
            target.classList.add('chosen')
        }
    }

    async function getData(){
        let res = await fetch("http://localhost:3001/games/info?game=battleship", {mode: 'cors'});
        res = await res.json();
        setPastData(res);
    }

    async function sendData(){
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();
        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        const formattedToday = dd + '/' + mm + '/' + yyyy;
        let res = await fetch("http://localhost:3001/games/gameScore", {
            method: 'POST', 
            mode:'cors',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify({username: window.localStorage.getItem('username'), score: numTurns, game: 'battleship', time: formattedToday})
        })
        res = await res.json()
        console.log("RES: ", res);
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
                            <div className="battleship-stats-table-tr-header">
                                <div className="battleship-stats-table-tr-td-header">Name</div>
                                <div className="battleship-stats-table-tr-td-header">Score</div>
                                <div className="battleship-stats-table-tr-td-header">Date</div>
                            </div>
                            {   pastData && 
                                pastData.sort((a, b) => 
                                    (a.score > b.score) ? 1 : -1
                                ).map((item) => {
                                    return(
                                        <div className="battleship-stats-table-tr">
                                            <div className="battleship-stats-table-tr-td">{item.username}</div>
                                            <div className="battleship-stats-table-tr-td">{item.score}</div>
                                            <div className="battleship-stats-table-tr-td">{item.time}</div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default GameBoard;