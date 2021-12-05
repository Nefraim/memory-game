import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import './App.css';
import SingleCard from './components/SingleCard';

const cardImages = [
  { "src": "/img/earth.png", matched: false },
  { "src": "/img/mars.png", matched: false },
  { "src": "/img/moon.png", matched: false },
  { "src": "/img/neptune.png", matched: false },
  { "src": "/img/sun.png", matched: false },
  { "src": "/img/uranus.png", matched: false }
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)

//shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }))
    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
    setTurns(0)
  }

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

//start new game automatically
  useEffect(() => {
    shuffleCards()
  },[])

//compare selected cards
  useEffect(() => {
    setDisabled(true)
    if(choiceOne && choiceTwo) {
      if(choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if(card.src === choiceOne.src) {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 1000 )
      }
    }
  },[choiceOne, choiceTwo])

//reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns +1)
    setDisabled(false)
  }

  return (
    <div className="App">
      <h1>Planet Match</h1>
      <button onClick={shuffleCards}>Start New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard 
          key={card.id} 
          card={card}
          handleChoice={handleChoice}
          flipped={card === choiceOne || card === choiceTwo || card.matched}
          disabled={disabled}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
}

export default App;
