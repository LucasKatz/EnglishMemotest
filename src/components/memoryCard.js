import React, { useState } from "react";

const MemoryCard = ({ item, onCardClick, isRevealed }) => {
  const { animalEmojis } = item;

  // Estado local para manejar si la tarjeta está revelada o no
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    // Cambiar el estado de isClicked al contrario de su valor actual
    setIsClicked(!isClicked);
    onCardClick(item);
  };

  // Establecer los estilos en línea dependiendo del estado de la tarjeta
  const cardStyles = {
    backgroundColor: isClicked ? "blue" : "red",
    transform: isClicked ? "rotateY(180deg)" : "rotateY(0)",
    transformStyle: "preserve-3d",
    transition: "transform 0.5s ease"
  };

  return (
    <div
      id="memoryCard"
      className="card-wrapper"
      style={cardStyles} // Aplicar los estilos en línea
      onClick={handleClick}
    >
      <div id="cardContent">
        {animalEmojis}
      </div>
    </div>
  );
};

export default MemoryCard;




