import "./styles/board.scss";
import { useState } from "react";

let right = [];
let left = [];
let numCols = 15;
for (let i = 0; i < 20; i++){
    let r1 = (i+1)*numCols - 1
    let r2 = (i+1)*numCols - 2
    let r3 = (i+1)*numCols - 3
    let r4 = (i+1)*numCols - 4
    let r5 = (i+1)*numCols - 5
    right.push(r1)
    right.push(r2)
    right.push(r3)
    right.push(r4)
    right.push(r5);
    let l1 = (i*numCols)+0
    let l2 = (i*numCols)+1
    let l3 = (i*numCols)+2
    let l4 = (i*numCols)+3
    let l5 = (i*numCols)+4 
    left.push(l1)
    left.push(l2)
    left.push(l3)
    left.push(l4)
    left.push(l5);
}

function Board({ setPlayerShips, setReadyToStart, numShipsPlaced, setNumShipsPlaced, hovering, setHovering, shipCellNum, removeAvailableShip }){
    const [currShip, setCurrShip] = useState(null);
    const [myShips, setMyShips] = useState([]);

    //called when I hover over the board
    function shipHover(e){
        if (hovering){
            let curr_id = parseInt(e.currentTarget.id);
            let shaded = [];
            if (shipCellNum==6){
                shaded = [curr_id-2,curr_id-1,curr_id,curr_id+1,curr_id+2,curr_id+3]
            }else if (shipCellNum==5){
                shaded = [curr_id-2,curr_id-1,curr_id,curr_id+1,curr_id+2]
            }else if (shipCellNum==4){
                shaded = [curr_id-1,curr_id,curr_id+1,curr_id+2]
            }else if (shipCellNum==3){
                shaded = [curr_id-1,curr_id,curr_id+1]
            }else if (shipCellNum==2){
                shaded = [curr_id,curr_id+1]
            }
            for (let l of left){
                for (let r of right){
                    if (shaded.includes(l)&&shaded.includes(r)){
                        shaded = [];
                    }
                }
            }
            let children = e.currentTarget.parentNode.children
            for (let i = 0; i < children.length; i++){
                if (!children[i].classList.contains('chosen')){
                    children[i].parentNode.backgroundColor="none";
                    children[i].style.backgroundColor="rgba(0,0,0,0)";
                    if(shaded.includes(parseInt(children[i].id))){
                        children[i].style.backgroundColor="rgba(0,0,0,0.3)";
                    }
                }
            }
            setCurrShip(shaded);
        }
    }
    
    //called when I click on the board
    function setShip(e){
        setHovering(false);
        console.log('clicking on board')
        console.log(numShipsPlaced);
        setNumShipsPlaced(numShipsPlaced + 1);
        if (numShipsPlaced==4){
            setReadyToStart(true);
            setPlayerShips(myShips);
        }
        let children = e.currentTarget.parentNode.children;
        for (let i = 0; i < children.length; i++){
            for (let e of currShip){
                if (e == i){
                    children[i].classList.add('chosen');
                }
            }
        }
        myShips.push([...currShip])
        setMyShips(myShips);
        setCurrShip(null);
        removeAvailableShip(shipCellNum);
    }
    
    let board = [];
    for (let i = 0; i < 300; i++){
        board.push(<div onClick={setShip} onMouseOver={(e)=>shipHover(e)} className="cell" width="10px" height="10px" id={i}></div>)
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