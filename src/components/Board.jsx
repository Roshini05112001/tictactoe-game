import Square from "./Square";

const Board = ({square,handleSquareClick,winningSquare}) => {

    
    
    const renderSquare = (position) =>{

        const isWinningSquare = winningSquare.includes(position)

        return (<Square 
            value={square[position]} 
            onClick={() => handleSquareClick(position)}
            isWinningSquare={isWinningSquare}
            />)

    }
    return (
        <div className="board">
            <div className="board-row">
                {/* <Square value={square[0]} onClick={() => handleSquareClick(0)}/>   */}
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}   
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}

export default Board;
