// En MemoryCard.js
import React, { useState, useEffect } from "react";

const MemoryCard = ({ item, onCardClick }) => {
  const { animalEmojis } = item;

  const [isRevealed, setIsRevealed] = useState(false);

  const handleClick = () => {
    setIsRevealed(!isRevealed);
    onCardClick(item, isRevealed); // Pasa el estado de revelación actual
  };

  useEffect(() => {
    // Restablecer el estado de revelación después de un tiempo si no hay coincidencia
    if (!isRevealed) {
      const timeoutId = setTimeout(() => {
        setIsRevealed(false);
      }, 1000); // Ajusta el tiempo según tus necesidades

      return () => clearTimeout(timeoutId); // Limpia el temporizador al desmontar el componente
    } else {
      // Restablecer el estado flipped si ambas cartas tienen isRevealed igual a true
      const timeoutId = setTimeout(() => {
        setIsRevealed(false);
      }, 1500); // Ajusta el tiempo según tus necesidades
    }
  }, [isRevealed]);

  return (
    <div className={`card-wrapper ${isRevealed ? 'flipped' : ''}`}>
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




