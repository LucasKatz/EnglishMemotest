"use client"
import { useState } from "react";
import MemoryCard from "@/componentes/memoryCard";

const animalEmojis = ["🐶", "🐱"];

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function Animals({ initialShuffledAnimals }) {
  const [shuffledAnimals, setShuffledAnimals] = useState(initialShuffledAnimals || shuffleArray(animalEmojis.concat(animalEmojis)));
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [isWaiting, setIsWaiting] = useState(false);

  const handleCardResult = () => {
    if (selectedCards.length === 2) {
      const [firstCard, secondCard] = selectedCards;

      if (firstCard === secondCard) {
        console.log("Match!");
        setMatchedCards([...matchedCards, firstCard]);
        setIsWaiting(true);

        setTimeout(() => {
          setIsWaiting(false);
          setSelectedCards([]);
        }, 2000);
      } else {
        console.log("Oops, try again!");

        setTimeout(() => {
          setIsWaiting(false);
          setSelectedCards([]);
        }, 1000);
      }
    }
  };

  const handleClick = (index) => {
    console.log("Click!", shuffledAnimals[index]);

    if (!isWaiting) {
      setSelectedCards([...selectedCards, shuffledAnimals[index]]);
      handleCardResult();
    }
  };

  return (
    <main>
      <section className="container m-auto flex justify-center items-center gap-12 flex-wrap">
        {shuffledAnimals.map((item, index) => (
          <MemoryCard key={index} item={{ animalEmojis: item }} matchedCards={matchedCards} onClick={() => handleClick(index)} />
        ))}
      </section>
    </main>
  );
}

export default Animals;

