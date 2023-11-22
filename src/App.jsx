import Board from './components/Board'
import './styles.scss'
import { calculateWinner } from './components/winner';
import { useState } from "react";
import StatusMessage from './components/StatusMessage'
import History from './components/History';

const NEW_GAME = [{square:Array(9).fill(null) , isXnext : false}]

function App() {

  const [history , setHistory] = useState([{square:Array(9).fill(null) , isXnext : false}])
  const [currentMove , setCurrentMove] = useState(0)

  const gamingBoard = history[currentMove]

  
  const {winner,winningSquare} = calculateWinner(gamingBoard.square)

  
    const handleSquareClick = (clickedPosition) =>{

        if(gamingBoard.square[clickedPosition] || winner) {
            return;
        }

        setHistory((currentHistory) =>{

            const isTravesing = currentMove + 1 !== currentHistory.length

            const lastGamingHistate =  isTravesing? 
             currentHistory[currentMove] : history[history.length - 1 ]
            const nextSquareState =  lastGamingHistate.square.map((squareValue , position)=>{
                if(clickedPosition===position){
                    return lastGamingHistate.isXnext ? 'X':'O'
                }

                return squareValue

            })

            const base = isTravesing
            ? currentHistory.slice(0,currentHistory.indexOf(lastGamingHistate) + 1)
            : currentHistory;

            return base.concat({square:nextSquareState , isXnext : !lastGamingHistate.isXnext})
        } )

        setCurrentMove(move => move + 1)
    }

    const moveTo = move =>{
        setCurrentMove(move)
    }

    const onReset = ()=>{
        setHistory(NEW_GAME)
        setCurrentMove(0)

    }

  
  

  return (
    
      <div className='app'>  
        <h1>TIC <span className='text-green'>TAC</span> TOE</h1>
        <StatusMessage  gamingBoard={gamingBoard} winner={winner} /> 
        <Board  square={gamingBoard.square}  handleSquareClick={handleSquareClick} winningSquare={winningSquare}/> 
        <button type='button' onClick={onReset} className={`btn-reset ${winner? 'active' : ''}`}>Reset</button>
        <h2 style={{fontWeight : 'normal'}}>Current Game History</h2>
        <History history={history} moveTo={moveTo} currentMove={currentMove}/>
        <div className='bg-balls'></div>
      </div>
      
  )
}

export default App
