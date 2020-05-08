import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="scene scene--card">
        <div className="card">
          <img
            src="img/back_blue.png"
            className="card__face card__face--front"
          />
          <img src="img/queen.jpg" className="card__face card__face--back" />
        </div>
      </div>
    </div>
  );
}

export default App;
