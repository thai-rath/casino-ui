import React from 'react';

function Card({suit, number}) {
  return (
    <div className="card">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 140" >
        <text
          x="50%"
          y="40px"
          dominant-baseline="middle"
          text-anchor="middle">{number}</text>
        <text
          x="50%"
          y="100px"
          dominant-baseline="middle"
          text-anchor="middle">{suit}</text>
      </svg>
    </div>
  );
}

export default Card;
