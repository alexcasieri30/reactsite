import React, { useState } from "react";
import Cell from "./Cell";
import ChooseX from "./ChooseX.jsx";
import "./styles/TictactoeBoard.scss";
import O from "../../../../Assets/Images/o.png";
import x from "../../../../Assets/Images/x.jpg";
import x1 from "../../../../Assets/Images/x1.png";
import x2 from "../../../../Assets/Images/x2.png";
import x3 from "../../../../Assets/Images/x3.png";
import x4 from "../../../../Assets/Images/x4.jpg";
import { useEffect } from "react";

const initAvailStates = [];
let board = [];
for (let i = 0; i < 9; i++){
    initAvailStates.push(i);
    board.push('');
}

const checkHoriz = function(playerSpots){
    let row1 = 0;
    let row2 = 3;
    let row3 = 6;
    if (playerSpots.includes(row1)&&playerSpots.includes(row1+1)&&playerSpots.includes(row1+2)){
        return true;
    }
    if (playerSpots.includes(row2)&&playerSpots.includes(row2+1)&&playerSpots.includes(row2+2)){
        return true;
    }
    if (playerSpots.includes(row3)&&playerSpots.includes(row3+1)&&playerSpots.includes(row3+2)){
        return true;
    }
    return false
};
const checkVert = function(playerSpots){
    let col1 = 0;
    let col2 = 1;
    let col3 = 2;
    if (playerSpots.includes(col1)&&playerSpots.includes(col1+3)&&playerSpots.includes(col1+6)){
        return true;
    }
    if (playerSpots.includes(col2)&&playerSpots.includes(col2+3)&&playerSpots.includes(col2+6)){
        return true;
    }
    if (playerSpots.includes(col3)&&playerSpots.includes(col3+3)&&playerSpots.includes(col3+6)){
        return true;
    }
}
const checkDiag = function(playerSpots){
    let d1 = 0;
    let d2 = 2;
    if (playerSpots.includes(2)&&playerSpots.includes(4)&&playerSpots.includes(6)){
        return true;
    }
    if (playerSpots.includes(0)&&playerSpots.includes(4)&&playerSpots.includes(8)){
        return true;
    }
    return false;
}
const didWin = function(playerSpots){
    return (checkHoriz(playerSpots)||checkVert(playerSpots)||checkDiag(playerSpots));
}


function TictactoeBoard(){
    const [availableStates, setAvailableStates]=useState([...initAvailStates]);
    const [boardMoves, setBoardMoves]=useState([...board]);
    const [winner, setWinner] = useState(0);
    const [boxes, setBoxes] = useState([...initAvailStates]);
    const [newgame, setNewgame] = useState(false);
    const [xType, setXType] = useState(x);
    const [pastData, setPastData] = useState(null);
    const [userData, setUserData] = useState(null);
    const [dataSet, setDataSet] = useState(false);

    useEffect(() => {
        if (winner != 0){
            sendData();
            getData();
        }
    }, [winner])

    useEffect(() => {
        let temp = {}
        if (pastData){
            temp['username'] = pastData[0].username;
            temp['wins'] = 0
            temp['losses'] = 0
            temp['ties'] = 0
            pastData.forEach((item) => {
                console.log('item: ', item.score);
                if (item.score == '1'){
                    temp['wins'] += 1
                }else if (item.score=='2'){
                    temp['losses'] += 1
                }else if (item.score=='3'){
                    temp['ties'] += 1
                }
            })
            temp['perc'] = (temp['wins'] / (temp['wins'] + temp['losses'] + temp['ties'])) * 100;
            console.log(temp);
            setUserData(temp)
            setDataSet(true)
        }
    }, [pastData]);


    if (newgame){
        let cls = document.querySelectorAll(".tictactoe-grid-cell");
        for (let i = 0; i < cls.length; i++){
            cls[i].classList.remove("X");
            cls[i].classList.remove("O");
            while (cls[i].firstChild){
                cls[i].removeChild(cls[i].firstChild);
            }
        }
    }

    async function sendData(){
        console.log("sending data, winner: ", winner);
        let res = await fetch('http://localhost:3001/games/gameScore', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: window.localStorage.getItem('username'), score: winner, game: 'tictactoe', time: "N/A"})
        })
        res = await res.json()
        console.log("RES: ", res);
    }

    async function getData(){
        console.log('getting data')
        let res = await fetch("http://localhost:3001/games/info?game=tictactoe", {mode: 'cors'});
        res = await res.json();
        console.log("RES: ", res)
        setPastData(res);
    }

    function chooseRandom(){
        let randomSpotIndex = Math.floor( Math.random()*availableStates.length );
        let randomSpot = availableStates[randomSpotIndex];
        availableStates.splice(randomSpotIndex, 1);
        let allSpots = document.querySelectorAll(".tictactoe-grid-cell")
        boardMoves[parseInt(randomSpot)] = "O";
        for (let i = 0; i < allSpots.length; i++){
            if (allSpots[i].id===randomSpot.toString()){
                let img = document.createElement('img');
                img.src=O
                allSpots[i].appendChild(img);
            }
        }
        let curr_spots = [];
        for (let i = 0; i < boardMoves.length; i++){
            if (boardMoves[i]=="O"){
                curr_spots.push(i);
            }
        }
        if (didWin(curr_spots)){
            setWinner(2)
            return
        }else if (availableStates.length==0){
            setWinner(3)
            return
        }
    }

    function handleCellClick(e){
        setNewgame(
            false
        )
        let numCell = e.currentTarget.id;
        let indexOfNumCell = availableStates.indexOf(parseInt(numCell));        
        let allSpots = e.currentTarget.parentNode.children;
        for (let i = 0; i < allSpots.length; i++){
            if (allSpots[i].id===numCell){
                let img = document.createElement('img');
                img.src = xType;
                allSpots[i].appendChild(img);
            }
        } 
        availableStates.splice(indexOfNumCell, 1);
        boardMoves[parseInt(numCell)] = "X";
        
        setAvailableStates(
            availableStates
        )
        setBoardMoves(
            boardMoves
        )
        let curr_spots = [];
        for (let i = 0; i < boardMoves.length; i++){
            if (boardMoves[i]=="X"){
                curr_spots.push(i);
            }
        }
        if (didWin(curr_spots)){
            setWinner(1)
            getData();
            return
        }else if (availableStates.length==0){
            setWinner(3)
            getData();
            return
        }
        setTimeout(chooseRandom, 500);
    }
    const changeXButton = (e) => {
        let newsrc = e.currentTarget.firstChild.src;
        setXType(
            newsrc
        )
    }
    const handlePlayAgainButton = () => {
        setWinner(0)
        setDataSet(false)
        setAvailableStates(
            [...initAvailStates]
        )
        setBoardMoves(
            [...board]
        )
        setNewgame(
            true
        )
    }
    let classNameBoard = 'tictactoe-main-board ' + ((winner==1||winner==2||winner==3) ? 'hidden':'')
    
    return(
        <div id="tictactoe">
            <div id="tictactoe-main">
                <div className="game-over-banner-div">
                    <div className={winner==0&&"hidden" || "game-over-banner"} id={winner==1&&"you-win"||winner==2&&"computer-wins"||winner==3&&"tie-game"}>
                        {winner==1 && "You WIN!"}
                        {winner==2 && "Computer WINS!"}
                        {winner==3 && "Tie Game!"}
                        <div className="game-over-button-div">
                            <div className="player-stats-table">
                                <div className="player-stats-table-tr">
                                    <div className="player-stats-table-td">
                                        Name
                                    </div>
                                    <div className="player-stats-table-td">
                                        Wins
                                    </div>
                                    <div className="player-stats-table-td">
                                        Losses
                                    </div>
                                    <div className="player-stats-table-td">
                                        Ties
                                    </div>
                                    <div className="player-stats-table-td">
                                        Perc%
                                    </div>
                                </div>
                                { userData && 
                                <div className="player-stats-table-tr">
                                    <div className="player-stats-table-td">
                                        {userData.username}
                                    </div>
                                    <div className="player-stats-table-td">
                                        {userData.wins}
                                    </div>
                                    <div className="player-stats-table-td">
                                        {userData.losses}
                                    </div>
                                    <div className="player-stats-table-td">
                                        {userData.ties}
                                    </div>
                                    <div className="player-stats-table-td">
                                        {Math.floor(userData.perc * 100) / 100}%
                                    </div>
                                </div>
                                }
                                
    
                            </div>
                            <button className="play-again-button" onClick={handlePlayAgainButton}>
                                Play again
                            </button>
                        </div>
                    </div>
                </div>
                <div className={classNameBoard}>
                {
                    boxes.map((box) => {
                        return(
                            <div id={box} className="tictactoe-grid-cell" onClick={handleCellClick}></div>
                        )
                    })
                }
                </div>
            </div>
            {winner==0&&
                <ChooseX onClick={changeXButton} src={xType}/>
            }
        </div>
        
        
    )
}

export default TictactoeBoard;