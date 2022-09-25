
export const displayFunctions = function(){
    const gameOver = function(player){
        let bottom = document.querySelector(".bottom");
        bottom.classList.add("hidden");
        let gameover_screen = document.querySelector(".gameover-alert");
        gameover_screen.classList.remove("hidden");
        console.log(gameover_screen.classList);
        console.log(player.getType());
            
        let grid = document.querySelector(".grid-container-tictactoe");
        grid.classList.add("hidden");
        let body = document.querySelector("body");
        
        if (player.getType() == "X"){
            console.log("PERSON WINS!");
            body.classList.remove("p2");
            body.classList.add("p1");
            gameover_screen.classList.remove("hidden");
            gameover_screen.children[0].innerHTML = "YOU WIN!";
        }
        else if (player.getType() == "O"){
            console.log("COMPUTER WINS!");
            body.classList.remove("p1");
            body.classList.add("p2");
            gameover_screen.classList.remove("hidden");
            gameover_screen.children[0].innerHTML = "COMPUTER WINS!";
        }
    };
    const tieGame = function(){
        let bottom = document.querySelector(".bottom");
        bottom.classList.add("hidden");
        let grid = document.querySelector(".grid-container-tictactoe");
        let body = document.querySelector("body");
        let gameover_screen = document.querySelector(".gameover-alert");

        grid.classList.add("hidden");
        body.classList.add("tiegame");
        gameover_screen.children[0].innerHTML = "TIE GAME!";
    };
    return {gameOver, tieGame};
};