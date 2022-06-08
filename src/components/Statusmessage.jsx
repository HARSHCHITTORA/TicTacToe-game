import React from 'react'

function Statusmessage({winner,current}) {
  
  // const message=winner?`winner is ${winner}`:`next player is ${current.isXNext?'X':'O'}`

  const noMoveLeft=current.board.every((el)=>el !==null)
  return (
   <div className='status-message'>
    {winner && 
    <> 
    winner is {' '} <span className ={winner==='X'?'text-green':'text-orange'}>{winner}</span></>}

    {!winner && !noMoveLeft &&
    <>next player is <span className={current.isXNext?'text-green':'text-orange'}>{current.isXNext?'X':'O'}</span></>}
    
    {!winner && noMoveLeft && 
    <><span className='text-green'>X</span> and <span className='text-orange'>0</span> tied</>}
   </div>
  )
}

export default Statusmessage