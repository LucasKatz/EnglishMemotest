import React, { useState } from "react";

const MemoryCard = ({ item }) => {
  const { animalEmojis } = item;
  const [revealed, setRevealed] = useState(false);

  const handleClick = () => {
    console.log("Click!");
    setRevealed(!revealed);
  };

  return (
    <div id="memoryCard" onClick={handleClick} className={`card-wrapper ${revealed ? 'revealed' : ''}`}>
      <div id="cardContent">
        {animalEmojis}
      </div>
    </div>
  );
};

export default MemoryCard;


