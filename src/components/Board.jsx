import React, { useState } from 'react'
import Square from './Square'

const Board = ({board,handleSquareClick,winningSquare}) => {
  // const [board,setBoard]=useState(Array(9).fill(null))
  // const [isXNext,setIsXNext]=useState(false)

  // const handleSquareClick=(position)=>{


  //   if(board[position]){
  //     return ;
  //   }


  //    setBoard((prev)=>{
  //     return prev.map((square,pos)=>{
  //       if(pos===position){
  //         return isXNext ? 'X':'0';
  //       }
  //        return square;
  //     })
  //    }) 
  //    setIsXNext((prev)=>!prev)

  // }
  const renderSquare=(position)=>{
   
  const isWinningSquare=winningSquare.includes(position)


   return( <Square value={board[position]} onClick={()=>handleSquareClick(position)} 
   isWinningSquare={isWinningSquare}/>
   )
  }
  return (
    <div className='board'>
        <div className='board-row'>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}

            {/* <Square value={board[0]} onClick={()=>{
              handleSquareClick()
            }} />
            <Square value={board[1]}/>
            <Square value={board[2]}/> */}
        </div>
        <div className='board-row'>
        {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}

        {/* <Square value={board[3]}/>
        <Square value={board[4]}/>
        <Square value={board[5]}/> */}
        </div>
        <div className='board-row'>
        {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}

        {/* <Square value={board[6]}/>
        <Square value={board[7]}/>
        <Square value={board[8]}/> */}
        </div>
    </div>
  )
}

export default Board