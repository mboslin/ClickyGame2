import React from 'react';
import './PlayerCard.css';

const PlayerCard = props => (
  <div
      id={props.name}
      onClick={() => props.handleClick(props.name)}
    >
      <img className="img-thumbnail" alt={props.name} src={props.img_url} />
  </div>
);

export default PlayerCard;