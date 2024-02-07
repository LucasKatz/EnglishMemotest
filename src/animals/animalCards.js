import React, { useState, useEffect } from "react";
import MemoryCard from "../components/memoryCard";
import "../App.css";

const animalEmojis = ["🐶", "🐱"];

function shuffleArray(animalEmojis) {
  const shuffledArray = [...animalEmojis];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function Animals() {
  const [shuffledAnimals, setShuffledAnimals] = useState(
    shuffleArray(animalEmojis.concat(animalEmojis)).map(item => ({ animalEmojis: item, isMatched: false }))
  );
  const [revealedCards, setRevealedCards] = useState([]);

  useEffect(() => {
    if (revealedCards.length === 2) {
      setTimeout(() => {
        checkMatch();
        setRevealedCards([]);
      }, 1000);
    }
  }, [revealedCards]);

  const onCardClick = (clickedCard) => {
    setRevealedCards((prevCards) => [...prevCards, clickedCard]);
  };

  const checkMatch = () => {
    if (revealedCards.length === 2) {
      const [card1, card2] = revealedCards;
      if (card1.animalEmojis === card2.animalEmojis) {
        console.log("Coinciden");
        // Establecer isMatched en true para las tarjetas coincidentes
        card1.isMatched = true;
        card2.isMatched = true;       
      } else {
        console.log("No coinciden");
      }
    }
  };

  return (
    <main>
      <section className="container m-auto flex justify-center items-center gap-12 flex-wrap">
        {shuffledAnimals.map((item, index) => (
          <MemoryCard
            key={`${item.animalEmojis}_${index}`} 
            item={item}
            onCardClick={onCardClick}
          />
        ))}
      </section>
    </main>
  );
}

export default Animals;

