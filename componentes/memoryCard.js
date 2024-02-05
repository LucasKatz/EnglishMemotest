import React, { useState } from "react";

const MemoryCard = ({ item, matchedCards, onClick }) => {
  const { animalEmojis } = item;
  const [revealed, setRevealed] = useState(false);

  const handleClick = () => {
    setRevealed(!revealed);
    onClick();
  };

  return (
    <div
      id="memoryCard"
      onClick={handleClick}
      className={`card-wrapper ${revealed ? 'revealed' : ''} ${matchedCards.includes(animalEmojis) ? 'matched' : ''}`}
    >
      <div id="cardContent">
        {animalEmojis}
      </div>
    </div>
  );
};

export default MemoryCard;



