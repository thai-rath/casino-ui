import React from 'react';
import logo from './logo.svg';
import Card from './Card.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Card suit="diamond" number="J" />
      <Card suit="club" number="J" />
      <Card suit="diamond" number="K" />
      <Card suit="spade" number="9" />
      <Card suit="diamond" number="2" />
    </div>
  );
}

export default App;
