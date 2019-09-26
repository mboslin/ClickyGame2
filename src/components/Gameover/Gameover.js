import React from 'react';
import './Gameover.css';

const Gameover = (props) => {
  if (props.Score >= 12) {
    return(
      <div className="text-center container-fluid">  
        <button className="new-game btn" onClick={() => props.handleClick(props.Gameover)}>New Game</button>
      </div>
    )
  } else {
    return(
      <div className="container text-center">
        <h1 className="Gameover">{props.countdown}</h1>
      </div>
    )
  }
}
;

export default Gameover;
