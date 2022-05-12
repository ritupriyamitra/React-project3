import React from 'react'

const Players = ({player}) => {
  return (
    <div className='player-scope'>
       <div>
            <label>{player}</label>
            <button>Your's Turn</button>
      </div> 
      <div className='player-score'>
      <label>Win:  0 times</label>
      <label>Loss: 0 times</label>
      </div>
     

    </div>
  )
}

export default Players
