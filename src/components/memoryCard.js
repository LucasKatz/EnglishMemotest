import React, { useState } from "react";

const MemoryCard = ({ item, onCardClick, isRevealed }) => {
  const { animalEmojis } = item;

  const handleClick = () => {
    if (!isRevealed) {  // Solo ejecutar si la tarjeta no está revelada
      onCardClick(item);
    }
  };

  return (
    <div
      id="memoryCard"
      className={`card-wrapper ${isRevealed ? "revealed" : ""}`}
      onClick={handleClick}
    >
      <div id="cardContent">
        {isRevealed ? animalEmojis : ""}
      </div>
    </div>
  );
};

export default MemoryCard;


