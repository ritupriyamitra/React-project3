import AddPlayer from "./components/AddPlayer";
import Greeting from "./components/Greeting";
import ButtonToPlay from "./components/ButtonToPlay";
import GamePage from "./components/GamePage";

import React, { useState } from "react";
function App() {
  const [flag, setFlag] = useState(false);

  const [playerList, setPlayers] = useState([
    {
      id: 1,
      name: "",
      activity: true,
    },
    {
      id: 2,
      name: "",
      activity: false,
    },
  ]);
  const updateActivity = (id) => {
   
  
    for(var i=0; i<playerList.length ;i++){
        if(playerList[i].id===id){
          playerList[i].activity=false
        } else{
          playerList[i].activity=true
        }
    }
 
    setPlayers([...playerList])
   

  };

  const submitPlayers = (players) => {
    setPlayers(players);
  };
  const currentFlagValue = (flag) => {
    setFlag(flag);
  };

  return (
    <div className="container">
      <h3> Welcome to A virtual Toss</h3>
      <AddPlayer addPlayerList={submitPlayers} playerList={playerList} />
      {playerList.length > 0 && <Greeting playerList={playerList} />}
      {playerList[0].name && !flag && (
        <ButtonToPlay
          title="Start the game"
          flag={flag}
          getFlagValue={currentFlagValue}
        />
      )}
      {flag && (
        <GamePage playerList={playerList} updateActivity={updateActivity} />
      )}
    
    </div>
  );
}

export default App;
