import AddPlayer from './components/AddPlayer'
import Greeting from './components/Greeting'
import ButtonToPlay from './components/ButtonToPlay'
import GamePage from './components/GamePage'



import React, { useState } from 'react'
function App() {
const [playerList,setPlayers ] =useState([])
const [flag,setflag ] = useState(false)

const submitPlayers = (players)=>{
  setPlayers(players)
  console.log('players count::'+players.length)
}
const startPlay= (flagValue)=>{
  console.log("flag value::"+!flagValue)
  setflag(flagValue) 
  
}

  return (
    <div className="container">       
        <h3> Welcome to the Game</h3>        
        <AddPlayer addPlayerList={submitPlayers}/>
        {playerList.length>0&&<Greeting  playerList={playerList}/>}
        {(playerList.length>0 && !flag )&&<ButtonToPlay  title='Start the game' startPlay = {startPlay}/>}
        {flag&&<GamePage playerName={playerList}/>}
       
    </div>
  );
}

export default App;
