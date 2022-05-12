
import React, { useState } from 'react'

const ButtonToPlay = ({title, startPlay}) => {

    const flagSetting=()=>{
        startPlay(true)        
    }

  return (
    <div className='play-button-container'>
       <button onClick={flagSetting}>{title}</button>
    </div>
  )
}

export default ButtonToPlay
