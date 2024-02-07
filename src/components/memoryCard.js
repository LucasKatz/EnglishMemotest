import React, { useState, useEffect } from "react";

const MemoryCard = ({ item, onCardClick }) => {
  const { animalEmojis, isMatched } = item;

  const [isRevealed, setIsRevealed] = useState(false);

  const handleClick = () => {
    if (!isMatched) {
      // Solo procesar el clic si la tarjeta no está emparejada
      setIsRevealed(true);
      onCardClick(item, isRevealed);
    }
  };

  /*useEffect(() => {
    // Restablecer el estado de revelación después de un tiempo si no hay coincidencia
    if (animalEmojis.value === animalEmojis.value) {
      console.log("isMatched", isMatched)
      console.log("values", animalEmojis)
      const timeoutId = setTimeout(() => {
        setIsRevealed(false);
      }, 3000); // Ajusta el tiempo según tus necesidades

      return () => clearTimeout(timeoutId); // Limpia el temporizador al desmontar el componente
    }
  }, [isRevealed, isMatched]);*/

  return (
    <div className={`card-wrapper ${isRevealed ? 'flipped' : ''}`}>
      <div
        id="memoryCard"
        className={`card ${isMatched ? 'matched' : ''}`}
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



