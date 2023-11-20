import Board from './components/Board'
import './styles.scss'

import { useState } from "react";



function App() {

  const [square , setSquare ] = useState(Array(9).fill(null))
  const [isXnext , setIsXnext] = useState(false)

    const handleSquareClick = (clickedPosition) =>{

        if(square[clickedPosition]){
            return;
        }

        setSquare((currentSquare) =>{
            return currentSquare.map((squareValue , position)=>{
                if(clickedPosition===position){
                    return isXnext ? 'X':'O'
                }

                return squareValue

            })
        } )

        setIsXnext((currentIsXnext )=> !currentIsXnext)
    }

  
  

  return (
    
      <div className='app'>  
       <h2>next player is somebody</h2> 
        <Board  square={square}  handleSquareClick={handleSquareClick}/> 
      </div>
      
  )
}

export default App
