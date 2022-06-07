import React from "react";
import Board from "./components/Board";
import "./styles/root.scss"
import { useState } from "react";
import { calculateWinner } from "./helpers";
import History from "./components/history";
import Statusmessage from "./components/Statusmessage";
const App =()=>{

  // const [board,setBoard]=useState(Array(9).fill(null))
  const [history,setHistory]=useState([{board:Array(9).fill(null),isXNext:true},])
 const[currentMove,setCurrentMove]=useState(0)
 const current=history[currentMove]

  // const [isXNext,setIsXNext]=useState(false)

  const winner=calculateWinner(current.board);
  
//  const message=winner?`winner is ${winner}`:`next player is ${current.isXNext?'X':'O'}`

  const handleSquareClick=(position)=>{
    

    if(current.board[position]||winner){
      return ;
    }


     setHistory((prev)=>{
       const last=prev[prev.length-1]

      const newBoard= last.board.map((square,pos)=>{
        if(pos===position){
          return last.isXNext ? 'X':'0';
        }
         return square;
      })
      return prev.concat({board:newBoard,isXNext:!last.isXNext})
     }) 
    //  setIsXNext((prev)=>!prev)
      setCurrentMove(prev=>prev+1)
  }
  const moveTo=(move)=>{
  setCurrentMove(move)
  }
   return(
  <>
    <div className="app">
    <h1>Tic Tac Toe Game </h1>
    <Statusmessage winner={winner} current={current}/>
    {/* <h2>{message}</h2> */}
    <Board board={current.board} handleSquareClick={handleSquareClick}/>
    <History history={history} moveTo={moveTo} currentMove={currentMove}/>
    </div>
  </>

   )
}


export default App;
