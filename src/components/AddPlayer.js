import React, { useState } from 'react'

const AddPlayer = ({addPlayerList}) => {
  const [player1,setPlayer1] = useState('')
  const [player2,setPlayer2] = useState('')
  const [players,setPlayers] = useState([])

  const submitted =(e)=>{
    e.preventDefault()
    if(!player1||!player2){
    alert('Please enter both the team name')
      return
  }
  players.push(player1)
  players.push(player2)
  setPlayers(players) 

    addPlayerList(players)
    setPlayer1('')
    setPlayer2('')
    setPlayers([])
  }

  return (
    <form onSubmit={submitted}>
      <div className='form-control'>
        <label>Enter Name of Team A</label>
        <input type='text' name='team1'  placeholder='Team A' value={player1} onChange={(e)=>setPlayer1(e.target.value)}/>
      </div>
      <div className='form-control'>
        <label>Enter Name of Team B</label>
        <input type='text' name='team2' placeholder='Team B' value={player2} onChange={(e)=>setPlayer2(e.target.value)}/>
      </div>
      <input type ='submit' value='Submit Nomination'/>
     
    </form>
  )
}

export default AddPlayer
