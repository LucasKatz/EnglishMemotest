const MemoryCard = ({ isMatched, isRevealed, handleClick, animalEmojis }) => {
  return (
    <div className={`card-wrapper ${isRevealed ? 'flipped' : ''}`}>
      <div
        id="memoryCard"
        className={`card ${isMatched ? 'matched' : ''}`}
        onClick={handleClick}
      >
        <div id="cardContent">
          {isRevealed ? animalEmojis : ' '} {/* Solo muestra el emoji si la tarjeta está revelada */}
        </div>
      </div>
    </div>
  );
}

export default MemoryCard


