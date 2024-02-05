import React, { useState } from "react";

const MemoryCard = ({ item, onCardClick, isRevealed }) => {
  const { animalEmojis } = item;

  return (
    <div
      id="memoryCard"
      className={`card-wrapper ${isRevealed ? "revealed" : ""}`}
      onClick={() => onCardClick(item)}
    >
      <div id="cardContent">
        {isRevealed ? animalEmojis : ""}
      </div>
    </div>
  );
};

export default MemoryCard;

