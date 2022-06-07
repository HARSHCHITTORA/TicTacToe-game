import React from 'react'

function Statusmessage({winner,current}) {
  
  // const message=winner?`winner is ${winner}`:`next player is ${current.isXNext?'X':'O'}`

  const noMoveLeft=current.board.every((el)=>el !==null)
  return (
   <h2>
    {winner && `winner is ${winner}`}
    {!winner && !noMoveLeft &&`next player is ${current.isXNext?'X':'O'}`}
    {!winner && noMoveLeft && 'X and 0 tied'}
   </h2>
  )
}

export default Statusmessage