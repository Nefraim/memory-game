import { useState } from 'react';
import './App.css';

const cardImages = [
  { "src": "/img/earth.png" },
  { "src": "/img/mars.png" },
  { "src": "/img/moon.png" },
  { "src": "/img/neptune.png" },
  { "src": "/img/sun.png" },
  { "src": "/img/uranus.png" }
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffledCards)
    setTurns(0)
  }

  console.log(cards, turns)
  return (
    <div className="App">
      <h1>Planet Match</h1>
      <button onClick={shuffleCards}>Start New Game</button>
    </div>
  );
}

export default App;
