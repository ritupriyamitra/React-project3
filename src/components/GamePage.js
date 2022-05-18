import React from 'react'
import Players from './Players'


const GamePage = ({playerList,updateActivity}) => {
  return (
    <div className='player-turn'>
    {playerList.map((player)=> <Players playerValue={player} key ={player.id} updateActivity={updateActivity}/>)}
    </div>
  )
}

export default GamePage
