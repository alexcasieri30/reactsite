import { useEffect, useState } from "react";

function Board({player, onCellClick, ships}){
    useEffect(()=> {
        if (player){
            let playerBoard = document.querySelectorAll('.board-container')[(player==true?0:1)];
            if (ships != null){
                for (let i = 0; i < playerBoard.children.length; i++){
                    for (let j = 0; j < ships.length; j++){
                        if (ships[j].includes(i)){
                            playerBoard.children[i].style.backgroundColor="rgba(50,50,50,0.9)";
                        }
                    }
                }
            }
        }else{
            let playerBoard = document.querySelectorAll('.board-container')[(player==true?0:1)];

            for (let i = 0; i < playerBoard.children.length; i++){
                for (let j = 0; j < ships.length; j++){
                    if (ships[j].includes(i)){
                        playerBoard.children[i].style.backgroundColor="rgba(50,50,50,0.9)";
                    }
                }
            }
        }
    })
    let board = [];
    for (let i = 0; i < 300; i++){
        board.push(<div onClick={(e)=>onCellClick(e.currentTarget, player)} className="cell" width="10px" height="10px" id={i}></div>)
    }
    return(
        <div>
            <div className="board-container">
                {board}
            </div>
        </div>
    )
}

export default Board;