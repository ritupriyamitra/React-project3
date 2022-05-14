import React from 'react'
import Players from './Players'


const GamePage = ({playerName}) => {
  return (
    <div className='player-turn'>
    {playerName.map((player)=> <Players playerName={player} />)}
    </div>
  )
}

export default GamePage
