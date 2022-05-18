import React, { useEffect, useState } from "react";

const Players = ({ playerValue, updateActivity }) => {
  const [winCount, setWinCount] = useState(0);
  const [lossCount, setLossCount] = useState(0);

  const onsubmitForm = (e) => {
    e.preventDefault();

    const value = Math.floor(Math.random() * 1000) + 1;
    checkWinLoss(value);

    if (winCount + lossCount == 4) {
     
      updateActivity(playerValue.id);
      setWinCount(0)
      setLossCount(0)
    }
  };
  const checkWinLoss = (value) => {
    const result = isEvenNumebr(value);
    result ? setWinCount(winCount + 1) : setLossCount(lossCount + 1);
  };

  var isEvenNumebr = (value) => {
    return value % 2 == 0 ? true : false;
  };

  return (
    <div className="player-scope">
      <form
        className="show-form form-control"
        onSubmit={(e) => onsubmitForm(e)}
      >
        <input
          type="text"
          name={playerValue.nane}
          id={playerValue.id}
          readOnly
          value={playerValue.name}
        />
        <input
          type="submit"
          className={` ${!playerValue.activity ? "form-disable btn" : ""} `}
          value={!playerValue.activity ? "No More your turn"+playerValue.activity : "Your turn"}
        />
        <div className="player-score">
          <label>Win: {winCount} times </label>
          <label>Loss: {lossCount} times</label>
        </div>
      </form>
    </div>
  );
};

export default Players;
