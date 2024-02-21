// MemoryLogic.js
import { useEffect, useState } from "react";
import Board2 from "../Board/Board2"; 
import handleMemoClick2 from "../components/memoClick2";

// Función para barajar un array
const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const MemoryLogic = ({ selectedLevel, onCounterIncrement, emojis, emojisLevel2 }) => {
  const [shuffledArray, setShuffledArray] = useState([]);
  const [selectedMemoBlock, setselectedMemoBlock] = useState(null);
  const [animating, setAnimating] = useState(0); 
  const [comparing, setComparing] = useState(false); 

  const resetBoard = () => {
    const selectedArray = (selectedLevel === 1)
      ? emojisLevel2.slice(0, emojisLevel2.length / 2).concat(emojisLevel2.slice(0, emojisLevel2.length / 2))
      : (selectedLevel === 2) ? emojisLevel2.concat(emojisLevel2) : emojis;

    const shuffledArray = shuffleArray(selectedArray);
    const formattedArray = shuffledArray.map((item, i) => ({ index: i, ...item, flipped: false }));
    setShuffledArray(formattedArray);

    // Restablecer otros estados si es necesario
    setselectedMemoBlock(null);
    setAnimating(0);
    setComparing(false);
  };

  useEffect(() => {
    const selectedArray = (selectedLevel === 1)
      ? emojisLevel2.slice(0, emojisLevel2.length / 2).concat(emojisLevel2.slice(0, emojisLevel2.length / 2))
      : (selectedLevel === 2) ? emojisLevel2.concat(emojisLevel2) : emojis;

    const shuffledArray = shuffleArray(selectedArray);
    const formattedArray = shuffledArray.map((item, i) => ({ index: i, ...item, flipped: false }));
    setShuffledArray(formattedArray);
  }, [selectedLevel, emojis, emojisLevel2]);

  const handleClick = (memoBlock) => {
    if (comparing) {
      return;
    }

    if (animating < 2) {
      handleMemoClick2(
        memoBlock,
        shuffledArray,
        setShuffledArray,
        selectedMemoBlock,
        setselectedMemoBlock,
        animating,
        setAnimating,
        comparing,
        setComparing,
        emojis
      );
      if (animating === 1) {
        onCounterIncrement();
      }
    }
  };

  return (
    <Board2 memoryCard={shuffledArray} handleClick={handleClick} resetBoard={resetBoard} />
  );
};

export default MemoryLogic;



