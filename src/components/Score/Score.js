import React from 'react';
import './Score.css';

const Score = props => (
  <div className="container text-center mb-3">
    <div className="row">
      <div className="col-sm-6">
        <div className="row">
          <p className="Score col-sm-12">{props.msg}</p>
        </div>
      </div>
      <div className="col-sm-6">
        <p className="Score">Score: {props.Score} | High Score: {props.highScore}</p>
      </div>
    </div>
  </div>
)

export default Score;