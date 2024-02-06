import React, { useState } from "react";

const MemoryCard = ({ item, onCardClick }) => {
  const { animalEmojis } = item;

  // Estado local para manejar si la tarjeta está revelada o no
  const [isRevealed, setIsRevealed] = useState(false);

  const handleClick = () => {
    // Cambiar el estado de isRevealed al contrario de su valor actual
    setIsRevealed(!isRevealed);
    // Llamar a la función onCardClick pasando la tarjeta y su estado de revelación actual
    onCardClick(item);

  };

  return (
    <div className={`card-wrapper ${isRevealed ? 'revealed' : ''}`}>
      <div
        id="memoryCard"
        className="card"
        onClick={handleClick}
      >
        <div id="cardContent">
          {animalEmojis}
        </div>
      </div>
    </div>
  );
}

export default MemoryCard;

