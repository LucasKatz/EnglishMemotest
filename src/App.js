import { useEffect, useState } from "react";
import Board from "./Board/Board";
import handleMemoClick from "./components/memoClick";

const animalEmojis = [..."🐶🐱🐭🐰🦊🦁🐯🐻🐨🐼🦓🐴🦄🐮🐷🐸🐔🐦🐧🐢"];

export const metadata = {
  title: 'Memory Game Online',
  description: 'Generated by create next app',
  developer: "Lucas Katz",
  keywords: "games - school - English - vocabulary"
}

const App = () => {
  const [shuffledAnimals, setShuffledAnimals] = useState([]);
  const [selectedMemoBlock, setselectedMemoBlock] = useState(null);
  const [animating, setAnimating] = useState(0); // Nuevo estado para contar las tarjetas animando
  const [comparing, setComparing] = useState(false); // Estado para indicar si se está comparando

  useEffect(() => {
    const shuffledArray = [...animalEmojis, ...animalEmojis];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    const formattedArray = shuffledArray.map((emoji, i) => ({ index: i, emoji, flipped: false }));
    setShuffledAnimals(formattedArray);
  }, []);

  const handleClick = (memoBlock) => {
    // Si se está comparando, no hacer nada
    if (comparing) {
      return;
    }

    // Verificar si ya hay dos tarjetas animando
    if (animating < 2) {
      handleMemoClick(
        memoBlock,
        shuffledAnimals,
        setShuffledAnimals,
        selectedMemoBlock,
        setselectedMemoBlock,
        animating,
        setAnimating, // Pasa setAnimating a handleMemoClick
        comparing,
        setComparing // Pasa setComparing a handleMemoClick
      );
    }
  };

  return (
    <Board memoryCard={shuffledAnimals} handleClick={handleClick} />
  );
}

export default App;

