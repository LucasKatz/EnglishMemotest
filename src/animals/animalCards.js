// Animals.js
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
  const [shuffledAnimals, setShuffledAnimals] = useState(shuffleArray(animalEmojis.concat(animalEmojis)));
  const [revealedCards, setRevealedCards] = useState([]);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    if (revealedCards.length === 2) {
      setTimeout(() => {
        checkMatch();
        setRevealedCards([]);
      }, 1000);
    }
  }, [revealedCards]);

  const onCardClick = (clickedCard, isCurrentlyRevealed) => {
    // Manejar directamente el estado isRevealed de la tarjeta clicada
    setRevealedCards((prevCards) => [...prevCards, clickedCard]);
    setIsRevealed(!isCurrentlyRevealed);
  };

  const checkMatch = () => {
    if (revealedCards.length === 2) {
      const [card1, card2] = revealedCards;
      if (card1.animalEmojis === card2.animalEmojis) {
        console.log("Coinciden");
        // Eliminar las tarjetas coincidentes del array de tarjetas
        const updatedAnimals = shuffledAnimals.filter(item => item !== card1.animalEmojis && item !== card2.animalEmojis);
        setShuffledAnimals(updatedAnimals);
      } else {
        console.log("No coinciden");
      }
    }
  };

  // Función para filtrar y devolver los productos no revelados ni coincidentes
  const filterUnrevealedAndUnmatchedCards = () => {
    return shuffledAnimals.filter(item => !revealedCards.some(card => card.item === item));
  };

  return (
    <main>
      <section className="container m-auto flex justify-center items-center gap-12 flex-wrap">
      {shuffledAnimals.map((item) => (
  <MemoryCard
    key={item.id} // Utiliza un identificador único como clave
    item={{ animalEmojis: item }}
    onCardClick={onCardClick}
    isRevealed={revealedCards.some((card) => card === item)}
  />
))}

      </section>
    </main>
  );
}

export default Animals;

