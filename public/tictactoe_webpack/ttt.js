import './ttt.scss';
import x from './images/x.jpg';
import x1 from './images/x1.png';
import x2 from './images/x2.png';
import x3 from './images/x3.png';
import x4 from './images/x4.jpg';
import o from './images/o.png';
import { minimax_functions } from './minimax.js';
import { displayFunctions } from './display_functions.js';

console.log('hello world');

let images_div = document.querySelector('.grid-container-tictactoe');
for (let i = 0; i < images_div.children.length; i++){
    images_div.children[i].children[0].src=x;
    images_div.children[i].children[1].src=o;
}

let options = [x, x1, x2, x3, x4];
let choose_img_div = document.querySelectorAll('.choose-box');
for (let i = 0; i < choose_img_div.length; i++){
    choose_img_div[i].children[0].src = options[i];
}

let choose_x_box = document.querySelectorAll(".choose-box-img");
let image_container = document.querySelector(".grid-container-tictactoe");
let images = image_container.children;

for (let i = 0; i < choose_x_box.length; i++){
    choose_x_box[i].onclick = function(event){
        for (let j = 0; j < choose_x_box.length; j++){
            if (choose_x_box[j].classList.contains("selected")){
                choose_x_box[j].classList.remove("selected");
            }
        }
        let classlist = event.target.classList;
        classlist.add("selected");
        let img_x = event.target;
        let src = img_x.src;
        console.log(src);
        for (let j = 0; j < images.length; j++){
            images[j].children[0].src = src;
            console.log(images[j].children[0].src);
        }
    }
}

let board = document.querySelector(".grid-container-tictactoe");

const player = function(sign){
    let type = sign;
    let myPositions = new Set();
    const getType = function(){
        return type;
    };
    const addPosition = function(position){
        myPositions.add(position);
    };
    const getPositions = function(){
        return myPositions;
    }
    const resetPositions = function(){
        myPositions = new Set();
    }
    return {getType, addPosition, getPositions, resetPositions}
}

const gameBoard = (function(){
    const fill_spots = function(arr){
        for (let i = 1; i <= 3; i++){
            for (let j = 1; j <= 3; j++){
                arr.push((i-1)*3 + j);
            }
        }
        return arr;
    }
    
    let all_spots = fill_spots(new Array());
    const numRemainingSpots = function(){
        return all_spots.length;
    }
    const newgame = function(player1, player2){        
        minimax_functions.resetboard();
        let body = document.querySelector("body");
        body.classList.remove("p1");
        body.classList.remove("p2");
        let bottom = document.querySelector(".bottom");
        bottom.classList.remove("hidden");
        let alert = document.querySelector(".gameover-alert");
        alert.classList.add("hidden");
        all_spots = fill_spots(new Array());
        player1.resetPositions();
        player2.resetPositions();
        
        // let gameover_screen = document.querySelector(".gameover");
        // gameover_screen.classList.add("hidden");
        
        let board = document.querySelector('.grid-container-tictactoe');
        board.classList.remove("hidden");
        for (let i = 0; i < board.children.length; i++){
            for (let j = 0; j < board.children[i].children.length; j++){
                board.children[i].children[j].classList.remove("active");
                board.children[i].children[j].classList.add("hidden");
            }
        }
    }
    // const getRandomIndex = function(){
    //     const randomNum = (Math.floor(Math.random() * all_spots.length));
    //     return randomNum;
    // }
    const winChecker = () => {
        const checkHoriz = function(player){
            let pos = player.getPositions();
            let f = 1
            let s = 4;
            let t = 7;
            let row1 = 0;
            let row2 = 0;
            let row3 = 0;
            for (let i = 0; i < 3; i++){
                if (pos.has(f)){
                    row1++;
                } if (pos.has(s)){
                    row2++;
                } if (pos.has(t)){
                    row3++;
                }
                f++;
                s++;
                t++;
            }
            if ((row1==3) || (row2==3) || (row3==3)){
                return true;
            }
            return false
        };
        const checkVert = function(player){
            let pos = player.getPositions();
            let f = 1
            let s = 2;
            let t = 3;
            let col1 = 0;
            let col2 = 0;
            let col3 = 0;
            for (let i = 0; i < 3; i++){
                if (pos.has(f)){
                    col1++;
                } if (pos.has(s)){
    
                    col2++;
                } if (pos.has(t)){
                    col3++;
                }
                f+=3;
                s+=3;
                t+=3;
            }
            if ((col1==3) || (col2==3) || (col3==3)){
                return true;
            }
            return false
        }
        const checkDiag = function(player){
            let pos = player.getPositions();
            if (pos.has(1) && pos.has(5) && pos.has(9)){
                return true;
            }else if (pos.has(3) && pos.has(5) && pos.has(7)){
                return true;
            }
            return false;
        }
        const checkAll = function(player){
            return checkHoriz(player) || checkVert(player) || checkDiag(player);
        }
        return {checkAll}
    };
    let winner = -1;
    const setWinner = (player) => {
        if (player.getType() == "X"){
            winner = 0;
        }else if (player.getType()=="O"){
            winner = 1;
        }
    };
    const getWinner = () =>{
        return winner;
    };
    const playGame = function(p1, p2){
        console.log(all_spots);
        const player2click = function(num){
            if (numRemainingSpots() == 0){
                console.log("tie game");

                displayFunctions().tieGame();
                return;
            }
            console.log("player 2");
            

            let c = minimax_functions.findBestMove(minimax_functions.getBoard());
            let grid_pos = minimax_functions.getNum(c);
            console.log(grid_pos);
            minimax_functions.fillBoard(grid_pos, 'o');
            

            //random number from all_spots (remaining)
            //let n = all_spots[randomIndex];
            console.log('all_spots', all_spots);
            let randomIndex = all_spots.indexOf(grid_pos);

            all_spots.splice(randomIndex, 1);

            console.log("player2: cell number: ", c, " cell number index: ", randomIndex);
            console.log(all_spots);
            console.log("\n");
            console.log(c);
            document.getElementById(grid_pos).children[1].classList.remove("hidden");
            document.getElementById(grid_pos).children[1].classList.add("active")
            p2.addPosition(grid_pos);
            board.classList.remove("pointer-delay");
            if (winChecker().checkAll(p2)){
                setWinner(p2);
                displayFunctions().gameOver(p2);
                return
            }
        }
        //all_spots = list with 9 initial nums 1-9
        board = document.querySelector('.grid-container-tictactoe');
        board.onclick = function(event){
            //cells num that user clicks on (1-9)
            if (!event.target.classList.contains("active")){
                
                let cell_num = parseInt(event.target.id);

                minimax_functions.fillBoard(cell_num, 'x');
                console.log(all_spots);
                //index of cell number in all_spots array
                let cell_num_index = all_spots.indexOf(cell_num);
                console.log(cell_num_index);
                console.log("all_spots after p1 move", all_spots)
                //remove that num from all_spots
                all_spots.splice(cell_num_index, 1);

                console.log("player 1: cell number: ", cell_num, "cell index in all_spots: ", cell_num_index);
                console.log(all_spots);
                console.log("\n");
                
                document.getElementById(cell_num).children[0].classList.remove("hidden");
                document.getElementById(cell_num).children[0].classList.add("active");
                p1.addPosition(cell_num);
                if (winChecker().checkAll(p1)){
                    displayFunctions().gameOver(p1);
                    setWinner(p1);
                    return
                }
                console.log("winner: ", getWinner(), numRemainingSpots());
                board.classList.add("pointer-delay")
                setTimeout(player2click, 1000);
                if (getWinner() != 0){
                    return;
                }
                if (numRemainingSpots() == 0){
                    displayFunctions().tieGame();
                    return;
                }
            }
        }
    };
    return {all_spots, playGame, newgame};
})();

const p1 = player("X");
const p2 = player("O");

gameBoard.playGame(p1, p2);

let button = document.getElementById("reset");
button.onclick = function(){
    gameBoard.newgame(p1, p2);
}


/*
ADDITIONS:
- keep track of number of times won/lost in a given session
    - keep leaderboard -- wins/losses/times for each game
    - button for reset leaderboard/session
- decorate the home page better
    - allow user to choose which image to use for X and O
- allow mode where computer goes first instead of user
- toggle for AI mode:
    - minimax AI algorithm to get best possible outcomes
*/


