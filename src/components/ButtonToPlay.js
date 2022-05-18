import React, { useState } from "react";

const ButtonToPlay = ({ title, flag, getFlagValue }) => {
  return (
    <div className="play-button-container">
      <button onClick={() => getFlagValue(!flag)}>{title}</button>
    </div>
  );
};

export default ButtonToPlay;
