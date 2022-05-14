import React, { useState } from 'react'

const Players = ({playerName}) => {
  const player = playerName;
 
  const [winCount,setWinCount] = useState(0)
  const [lossCount,setLossCount] = useState(0) 

  const onsubmitForm = (e)=>{
    e.preventDefault();
    const value=  Math.floor(Math.random()*1000) +1
    console.log('Random number... '+value)
    checkWinLoss(value);
    
    // console.log('form 1 ... '+document.getElementById("myid").value)
    // console.log('form 1 value... '+value)
  }
  var checkWinLoss= (value)=>{
    const result = isEvenNumebr(value)
    console.log("result::"+result)
    result?setWinCount(winCount+1):setLossCount(lossCount+1)
    
    
  }
  var isEvenNumebr=(value)=>{
    return (value % 2  == 0) ? true : false
  }
  
  // const onsubmitForm2 = (e)=>{
  //   e.preventDefault();
  //   console.log('form 2... ')
  // }


  return (
    <div className='player-scope'>
    
     <form className='show-form form-control' onSubmit= {(e)=>onsubmitForm(e)}>
       <input type='text' name='playerName' id="myid" readOnly value ={player} />
       <input type='submit' value ="Your turn" />
       <div className='player-score'>
          <label>Win:  {winCount} times</label>
          <label>Loss: {lossCount} times</label>
      </div> 
     </form>
    
     {/* <form className='show-form form-control' onSubmit= {(e)=>onsubmitForm(e)}>
       <input type='text' name='playerName' id="myid" readOnly value ={playerList[1]} />
       <input type='submit' value ="Your turn" />
       <div className='player-score'>
          <label>Win:  {winCount[1]} times</label>
          <label>Loss: {lossCount[1]} times</label>
      </div> 
     </form> */}
     
    </div>
  )
}

export default Players
