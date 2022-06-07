import React from 'react'


function square({value,onClick}) {
  return (
    <button type='button' className='square' onClick={
       onClick
    }>{value}</button>
  )
}

export default square