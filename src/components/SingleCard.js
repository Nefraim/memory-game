import "./SingleCard.css";

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
    handleChoice(card);
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          onClick={handleClick}
          className="back"
          src="/img/back.png"
          alt="card back"
        />
        <img
          onClick={handleClick}
          className="back"
          src="/img/back.png"
          alt="card back"
        />
      </div>
    </div>
  );
}
