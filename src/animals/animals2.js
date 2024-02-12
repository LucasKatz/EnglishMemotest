import { useState, useEffect } from 'react';
import Board2 from '../Board/Board2';
import handleMemoClick2 from '../components/memoClick2';

// Define los emojis y las palabras correspondientes
const combinedArray = [
  { emoji: "🐶", word: "dog" },
  { emoji: "🐱", word: "cat" },
  { emoji: "🐭", word: "mouse" },
  { emoji: "🐰", word: "rabbit" },
  { emoji: "🦊", word: "fox" },
  { emoji: "🦁", word: "lion" },
  { emoji: "🐯", word: "tiger" },
  { emoji: "🐻", word: "bear" },
  { emoji: "🐨", word: "koala" },
  { emoji: "🐼", word: "panda" },
  { emoji: "🦓", word: "zebra" },
  { emoji: "🐴", word: "horse" },
  { emoji: "🦄", word: "unicorn" },
  { emoji: "🐮", word: "cow" },
  { emoji: "🐷", word: "pig" },
  { emoji: "🐸", word: "frog" },
  { emoji: "🐔", word: "chicken" },
  { emoji: "🐦", word: "bird" },
  { emoji: "🐧", word: "penguin" },
  { emoji: "🐢", word: "turtle" }
];

const Animals2 = () => {
  const [shuffledCards, setShuffledCards] = useState([]);
  const [selectedMemoBlock, setselectedMemoBlock] = useState(null);
  const [animating, setAnimating] = useState(0);
  const [comparing, setComparing] = useState(false);
  const [showEmoji, setShowEmoji] = useState(true); // Estado para alternar entre emoji y palabra
  
  useEffect(() => {
    // Mezcla el array combinado
    const duplicatedArray = [...combinedArray];
    const duplicatedArrayWithPairs = [...combinedArray];
    
    // Mezcla el array duplicado
    for (let i = duplicatedArrayWithPairs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      [duplicatedArrayWithPairs[i], duplicatedArrayWithPairs[j]] = [duplicatedArrayWithPairs[j], duplicatedArrayWithPairs[i]];
    }

    // Mezcla los emojis y las palabras en un solo array de cartas
    const shuffledCardsArray = [];
    duplicatedArray.forEach((item, i) => {
      shuffledCardsArray.push({ ...item, number: i + 1, flipped: false });
      shuffledCardsArray.push({ emoji: duplicatedArrayWithPairs[i].word, word: item.emoji, number: i + 1, flipped: false });
    });

    // Mezcla el array de cartas
    shuffleArray(shuffledCardsArray);
    
    // Establece el estado con el array de cartas mezclado
    setShuffledCards(shuffledCardsArray);
  }, []);

  const handleClick = (memoBlock) => {
    if (comparing) {
      return;
    }
    if (animating < 2) {
      console.log("Valor de la palabra o emoji:", showEmoji ? memoBlock.word : memoBlock.emoji);
      handleMemoClick2(
        memoBlock,
        shuffledCards,
        setShuffledCards,
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
    <Board2 memoryCard={shuffledCards} handleClick={handleClick} showEmoji={showEmoji} />
  );
}

export default Animals2;

// Función para mezclar un array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}