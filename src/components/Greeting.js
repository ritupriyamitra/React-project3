import React from 'react'

const Greeting = ({playerList}) => {
  return (
    <div className='great-message'>
      Welcome Team  
    { playerList.map((player)=><span key={player}>  {player}  </span> ) }    
    </div>
  )
}

export default Greeting
