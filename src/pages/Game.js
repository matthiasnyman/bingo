import React, { useState, useEffect } from 'react';
import './App.css';
import Card from '../components/Card';

function App() {
  const [cards, setCards] = useState([]);
  const layout = [];

  React.useEffect(() => {
    fetch("http://localhost:1337/cards").then(res => res.json()).then(val => setCards(val))
  }, [])

  for (let i = 0; i < 9; i++) {
    if(cards[i] === undefined){break};
    let card = cards[i];
    layout.push(
      <div className="cell">
        <Card name={card.name} backgroundImg={card.img.url} key={i} />
      </div>
    );
  }
  return <div className="grid">{layout}</div>;
}

export default App;
