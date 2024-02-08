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
    shuffleArray(animalEmojis.concat(animalEmojis)).map((item, index) => ({
      id: index,
      animalEmojis: item,
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
    console.log("matchedCards changed:", matchedCards);
    setMatchedCardsChanged(true);
  }, [matchedCards]);

  useEffect(() => {
    if (isRevealed && !matchedCardsChanged) {
      const timeoutId = setTimeout(() => {
        setIsRevealed(false);
      }, 1000);

      return () => clearTimeout(timeoutId);
    }

    setMatchedCardsChanged(false);
  }, [isRevealed, matchedCardsChanged]);

  const handleMatch = (id) => {
    setShuffledAnimals((prevAnimals) =>
      prevAnimals.map((item) =>
        item.id === id ? { ...item, isMatched: true } : item
      )
    );
  };

  const onCardClick = (clickedCard, isRevealed) => {
    if (!isRevealed) {
      setRevealedCards((prevCards) => [...prevCards, clickedCard]);
    }
  };

  const checkMatch = () => {
    if (revealedCards.length === 2) {
      const [card1, card2] = revealedCards;
      if (card1.animalEmojis !== card2.animalEmojis) {
        console.log("No Coinciden");
  
        // Después de un tiempo, establece isMatched en true
        setTimeout(() => {
          setShuffledAnimals((prevAnimals) =>
            prevAnimals.map((item) =>
              item.id === card1.id || item.id === card2.id
                ? { ...item, isMatched: true }
                : item
            )
          );
          setMatchedCards((prevMatchedCards) => [...prevMatchedCards, card1, card2]);
          setIsMatched(true);
        }, 1000); // Ajusta el tiempo según tus necesidades
      } else {
        console.log("Coinciden");
  
        // Después de un tiempo, oculta las cartas reveladas
        setTimeout(() => {
          setShuffledAnimals((prevAnimals) =>
            prevAnimals.map((item) =>
              item.id === card1.id || item.id === card2.id
                ? { ...item, isMatched: false }
                : item
            )
          );
          setIsRevealed(false);
        }, 3000); // Ajusta el tiempo según tus necesidades
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
