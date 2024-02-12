import { useState, useEffect } from 'react';
import Board from '../Board/Board';
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
    const [shuffledAnimals, setShuffledAnimals] = useState([]);
    const [selectedMemoBlock, setselectedMemoBlock] = useState(null);
    const [animating, setAnimating] = useState(0);
    const [comparing, setComparing] = useState(false);
  
    useEffect(() => {
      // Duplica el array combinado para tener 20 emojis y 20 palabras
      const duplicatedArray = [...combinedArray, ...combinedArray];
      
      // Mezcla el array duplicado
      for (let i = duplicatedArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [duplicatedArray[i], duplicatedArray[j]] = [duplicatedArray[j], duplicatedArray[i]];
      }
      
      // Formatea el array para incluir un índice y una propiedad flipped
      const formattedArray = duplicatedArray.map((item, i) => ({ index: i, emoji: item.emoji, word: item.word, flipped: false }));
      
      // Establece el estado con el array mezclado
      setShuffledAnimals(formattedArray);
    }, []);

  const handleClick = (memoBlock) => {
    if (comparing) {
      return;
    }
    if (animating < 2) {
        console.log("Valor de la tarjeta:", memoBlock);
        handleMemoClick2(
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

export default Animals2;


