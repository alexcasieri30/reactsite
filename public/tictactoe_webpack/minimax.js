export const minimax_functions = (function(){
    //computer is player
    let player = 'o';

    //person playing the game interactively is the computer's opponent;
    let opponent = 'x';
    const isMovesLeft = function(board){
        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 3; j++){
                if (board[i][j] == "_"){
                    return true
                }
            }
        }
        return false;
    };
    const evaluate = function(b){
        if (b[0][0]==b[1][1]&&b[1][1]==b[2][2]){
            if (b[0][0]==player){
                return 1
            }else if (b[0][0]==opponent){
                return -1
            }
        }
        if (b[2][0]==b[1][1]&&b[1][1]==b[0][2]){
            if (b[0][0]==player){
                return 1
            }else if (b[0][0]==opponent){
                return -1
            }
        } 
        for (let row = 0; row < 3; row++){
            if (b[row][0]==b[row][1]&&b[row][1]==b[row][2]){
                if (b[row][0]==player){
                    return 1
                }else if (b[row][0]==opponent){
                    return -1
                }
            }
        }
        for (let col = 0; col < 3; col++){
            if (b[0][col]==b[1][col] && b[1][col]==b[2][col]){
                if (b[0][col]==player){
                    return 1
                }else if (b[0][col]==opponent){
                    return -1
                }
            }
        }
        return 0
    };
    const minimax = function(board, depth, isMax){
        let score = evaluate(board);
        if (score==1){return score;}
        if (score==-1){return score;}
        if (!isMovesLeft(board)){
            return 0;
        }
        if (isMax){
            var best = -1000;
            for (let i = 0; i < 3; i++){
                for (let j = 0; j < 3; j++){
                    if (board[i][j] == "_"){
                        board[i][j] = opponent;
                        best = Math.max(best, minimax(board, depth+1, !isMax))
                        board[i][j] = "_";
                    }
                }
            }
            return best
        }else{
            var best = 1000;
            for (let i = 0; i < 3; i++){
                for (let j = 0; j < 3; j++){
                    if (board[i][j]=="_"){
                        board[i][j] = opponent;
                        best = Math.min(best, minimax(board, depth+1, !isMax))
                        board[i][j] = "_";
                    }
                }
            }
            return best;
        }
    };
    const findBestMove = function(board){
        let bestVal = -1000;
        let bestMove = [-1,-1];
        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 3; j++){
                if (board[i][j] == "_"){
                    board[i][j] = player;
                    let moveVal = minimax(board, 0, false);
                    board[i][j] = "_";
                    if (moveVal > bestVal){
                        bestMove = [i,j];
                        bestVal = moveVal
                    }
                }
            }
        }
        return bestMove;
    };
    const board = [];
    const setOrig = function(){
        for (let i = 0; i < 3; i++){
            let temp = [];
            for (let j = 0; j < 3; j++){
                temp.push("_");
            }
            board.push(temp);
        };
    };
    setOrig(board);
    const resetboard = function(){
        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 3; j++){
                board[i][j] = "_";
            }
        }
    };
    const getBoardPosition = function(num){
        let x = Math.floor(num / 3);
        let y = num % 3;
        if (y==0){
            x = x - 1
            y = y + 2
        } else {
            y = y - 1
        }
        return [x, y];
    };
    const getBoard = function(){
        return board;
    };
    const getNum = function(coords){
        let x = coords[0] + 1;
        let y = coords[1] + 1;
        console.log(coords);
        return ((x-1)*3 + (y-1)) + 1;
    };
    const setBoard = function(x, y, p){
        board[x][y] = p;
    };
    const fillBoard = function(num, p){
        console.log("Filling board: ", num, p);
        let coords = getBoardPosition(num);
        console.log("Filling board: ", coords);
        setBoard(coords[0], coords[1], p);
    };
    return { findBestMove, fillBoard, getBoard, getNum, resetboard };
})();
