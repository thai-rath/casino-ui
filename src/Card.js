import React from 'react';

function Card({suit, number}) {
  return (
    <div className="card">
      {`suit: ${suit}, number: ${number}`}
    </div>
  );
}

export default Card;
