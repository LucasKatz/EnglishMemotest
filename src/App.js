import { useEffect, useState } from "react";
import Board from "./Board/Board";

const animalEmojis = [..."🐶 🐱"];

export const metadata = {
  title: 'Memory Game Online',
  description: 'Generated by create next app',
  developer: "Lucas Katz",
  keywords: "games - school - English - vocabulary"
}

const App = () => {
  const [shuffledAnimals, setShuffledAnimals] = useState([]);

  useEffect(() => {
    const shuffledArray = [...animalEmojis, ...animalEmojis];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    const formattedArray = shuffledArray.map((emoji, i) => ({ index: i, emoji, flipped: false }));
    setShuffledAnimals(formattedArray);
  }, []);

  return (
    <Board memoryCard={shuffledAnimals} />
  );
}

export default App;
