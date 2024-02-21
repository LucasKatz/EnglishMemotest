// Animals2.js
import { useState } from "react";
import MemoryLogic from "../logic/logic";
import { animalEmojis, animalEmojisLevel2 } from "../Data/data";

const Animals = ({ onCounterIncrement }) => {
  const [selectedLevel, setSelectedLevel] = useState(1);

  const handleLevelChange = (level) => {
    setSelectedLevel(level);
  };

  return (
    <MemoryLogic
      selectedLevel={selectedLevel}
      onCounterIncrement={onCounterIncrement}
      emojis={animalEmojis}
      emojisLevel2={animalEmojisLevel2}
    />
  );
};

export default Animals
