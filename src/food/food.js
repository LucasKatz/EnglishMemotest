import { useState } from "react";
import MemoryLogic from "../logic/logic"
import { foodEmojis, foodEmojisLevel2 } from "../Data/data";

const Food = ({ onCounterIncrement }) => {
  const [selectedLevel, setSelectedLevel] = useState(1);

  const handleLevelChange = (level) => {
    setSelectedLevel(level);
  };

  return (
    <MemoryLogic
      selectedLevel={selectedLevel}
      onCounterIncrement={onCounterIncrement}
      emojis={foodEmojisLevel2}
      emojisLevel2={foodEmojisLevel2}
    />
  );
};

export default Food;