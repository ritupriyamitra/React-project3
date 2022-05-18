import React, { useState , playerList} from 'react'

const AddPlayer = ({addPlayerList,playerList}) => {
  const [player1,setPlayer1] = useState(playerList[0])
  const [player2,setPlayer2] = useState(playerList[1])
  const players= [];

  const submitted = (e)=>{
    e.preventDefault()
    if(!player1.name||!player2.name){
    alert('Please enter both the team name')
      return
  }  
  players.push(player1,player2)
    addPlayerList(players)
    setPlayer1({...player1,name:''})
    setPlayer2({...player1,name:''})
  }

  return (
    <form onSubmit={submitted}>
      <div className='form-control'>
        <label>Enter Name of Team A</label>
        <input type='text' name='team1'  placeholder='Team A' value={player1.name} onChange={(e)=>setPlayer1({...player1,name:e.target.value})}/>
      </div>
      <div className='form-control'>
        <label>Enter Name of Team B</label>
        <input type='text' name='team2' placeholder='Team B' value={player2.name} onChange={(e)=>setPlayer2({...player2,name:e.target.value})}/>
      </div>
      <input type ='submit' value='Submit Nomination'/>
     
    </form>
  )
}

export default AddPlayer
