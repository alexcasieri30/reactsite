import React, { useState } from "react";
import Cell from "./Cell";
import ChooseX from "./ChooseX.jsx";
import "./styles/TictactoeBoard.scss";
import O from "./images/o.png";
import x from "./images/x.jpg";
import x1 from "./images/x1.png";
import x2 from "./images/x2.png";
import x3 from "./images/x3.png";
import x4 from "./images/x4.jpg";

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
    console.log("RENDERED: boardmoves: ", boardMoves, availableStates);
    
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
            setWinner(
                2
            )
            return
        }else if (availableStates.length==0){
            setWinner(
                3
            )
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
        
        console.log("person: ", availableStates, boardMoves);

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
            setWinner(
                1
            )
            return
        }else if (availableStates.length==0){
            setWinner(
                3
            )
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
        setWinner(
            0
        )
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
    let classNamePlayer = 'playerWins ' + ((winner!=0&&winner==1) ? '':'hidden');
    let classNameComputer='computerWins ' + ((winner!=0&&winner==2) ? '':'hidden')
    let classNameTie = 'tieGame ' + ((winner!=0&&winner==3) ? '':'hidden')
    
    return(
        <div id="tictactoe">
            <div id="tictactoe-main">
                <div className={classNamePlayer}>
                    <div className="game-over-banner" id="you-win">
                        You WIN!
                        <div className="game-over-button-div">
                            <button className="play-again-button" onClick={handlePlayAgainButton}>
                                Play again
                            </button>
                        </div>
                    </div>
                </div>
                <div className={classNameComputer}>
                    <div className="game-over-banner" id="computer-wins">
                        Computer WINS!
                        <div className="game-over-button-div">
                            <button className="play-again-button" onClick={handlePlayAgainButton}>
                                Play again
                            </button>
                        </div>
                    </div>
                </div>
                <div className={classNameTie}>
                    <div className="game-over-banner" id="tie-game">
                        Tie Game!
                        <div className="game-over-button-div">
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