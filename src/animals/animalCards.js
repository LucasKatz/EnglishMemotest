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
    shuffleArray(animalEmojis.concat(animalEmojis)).map((item) => ({
      animalEmojis: item,
      isMatched: false, //este es el valor isMatched que tengo qeu pasar como condicional
    }))
  );
  const [revealedCards, setRevealedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [matchedCardsChanged, setMatchedCardsChanged] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isMatched, setIsMatched] = useState(false);

  useEffect(() => {
    if (revealedCards.length === 2) {
      setTimeout(() => {
        checkMatch();
        setRevealedCards([]);
      }, 1000);
    }
  }, [revealedCards]);

  useEffect(() => {
    // Lógica que se ejecuta cuando matchedCards cambia
    console.log("matchedCards changed:", matchedCards);
    setMatchedCardsChanged(true);
  }, [matchedCards]);

  useEffect(() => {
    // Restablecer el estado de revelación después de un tiempo si no hay coincidencia
    if (isRevealed && !isMatched && !matchedCardsChanged) {
      console.log("isMatched", isMatched);
      const timeoutId = setTimeout(() => {
        setIsRevealed(false);
      }, 1000); // Ajusta el tiempo según tus necesidades

      return () => clearTimeout(timeoutId); // Limpia el temporizador al desmontar el componente
    }

    // Reiniciar la variable de estado que indica cambios en matchedCards
    setMatchedCardsChanged(false);
  }, [isRevealed, isMatched, matchedCardsChanged]);

  const onCardClick = (clickedCard) => {
    setRevealedCards((prevCards) => [...prevCards, clickedCard]);
  };

  const checkMatch = () => {
    if (revealedCards.length === 2) {
      const [card1, card2] = revealedCards;
      if (card1.animalEmojis === card2.animalEmojis) {
        console.log("Coinciden");
        card1.isMatched = true;
        card2.isMatched = true;
        setShuffledAnimals((prevAnimals) =>
          prevAnimals.map((item) =>
            item.animalEmojis === card1.animalEmojis || item.animalEmojis === card2.animalEmojis
              ? { ...item, isMatched: true }
              : item
          )
        );
        setMatchedCards((prevMatchedCards) => [...prevMatchedCards, card1, card2]);
      } else {
        console.log("No coinciden");
      }
    }
  };

  return (
    <main>
      <section className="container m-auto flex justify-center items-center gap-12 flex-wrap">
        {shuffledAnimals.map((item, index) => (
          <MemoryCard key={`${item.animalEmojis}_${index}`} item={item} onCardClick={onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Animals;
