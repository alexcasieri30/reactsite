import "./styles/Cell.scss";

function Cell({id, winner, className, onClick}){
    console.log("Winner: ", winner);
    if (winner === 0){
        console.log('no winner ')
        return (
            <div id={id} className="tictactoe-grid-cell" onClick={(e) => onClick(e)}>
    
            </div>
        )
    }else{
        return (
            <div id={id} className={className} onClick={(e) => onClick(e)}>
    
            </div>
        )
    }
    
}
export default Cell;