const StatusMessage = ({ winner,gamingBoard}) => {
    const {square, isXnext} = gamingBoard
    const noMoveLeft = square.every((squareValue) => squareValue !== null);
    const nextPlayer = isXnext ? 'X' : 'O';

    const renderStatusMsg = () => {
        if (winner) {
            return (<div>Winner is {''}
            <span 
               className={winner === 'X'? 'text-orange' : 'text-green'}>
                {winner}
            </span>
            </div>
        )}

        if (!winner && noMoveLeft) {
            return <div>
               <span className="text-orange"> O</span> and  
               <span className="text-green"> X</span> tied
                </div>;
        }

        if (!winner && !noMoveLeft) {
            return(
            <div>Next Player is {''}
             <span 
               className={isXnext? 'text-orange' : 'text-green'}>
                {nextPlayer}
            </span>
           </div>
           )}

        return null;
    };

    return <div className="status-message">{renderStatusMsg()}</div>;
};

export default StatusMessage;


