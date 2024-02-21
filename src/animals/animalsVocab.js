// Animals.js
import { useState } from "react";
import { animalEmojis, animalEmojisLevel2 } from "../Data/data";
import MemoryLogic from "../logic/logic"

const Animals = ({ onCounterIncrement, onCounterReset}) => {
  const [selectedLevel, setSelectedLevel] = useState(1);

  const handleLevelChange = (level) => {
    setSelectedLevel(level);
  };

  return (
    <MemoryLogic
      selectedLevel={selectedLevel}
      onCounterIncrement={onCounterIncrement}
      onCounterReset={onCounterReset} 
      emojis={animalEmojis}
      emojisLevel2={animalEmojisLevel2}
    />
  );
};

export default Animals;
