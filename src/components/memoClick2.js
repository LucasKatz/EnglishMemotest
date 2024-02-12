const handleMemoClick2 = (memoBlock, shuffledMemoBlocks, setShuffledMemoBlocks, selectedMemoBlock, setselectedMemoBlock, flippedCount, setFlippedCount, animating, setAnimating, animalEmojis) => {

  // Función para verificar si hay un match entre las tarjetas seleccionadas
  const checkMatch = (memoBlock1, memoBlock2) => {
    const animal1 = animalEmojis.find(animal => animal.id === memoBlock1.id);
    const animal2 = animalEmojis.find(animal => animal.id === memoBlock2.id);
    console.log("Comparando tarjetas:");
    console.log("Tarjeta 1:", memoBlock1);
    console.log("Tarjeta 2:", memoBlock2);

    return animal1 && animal2 && animal1.id === animal2.id;
  };

  // Verificar si ya hay dos tarjetas volteadas
  if (flippedCount === 2) {
    // Si ya hay dos tarjetas volteadas, no hacer nada
    return;
  }

  const flippedMemoBlock = { ...memoBlock, flipped: true };
  let shuffledMemoBlocksCopy = [...shuffledMemoBlocks];
  shuffledMemoBlocksCopy.splice(memoBlock.index, 1, flippedMemoBlock);
  setShuffledMemoBlocks(shuffledMemoBlocksCopy);

  if (selectedMemoBlock === null) {
    setselectedMemoBlock(memoBlock);
  } else {
    // Verificar si hay un match entre las tarjetas seleccionadas
    const isMatch = checkMatch(selectedMemoBlock, memoBlock);

    if (isMatch) {
      // Si hay un match, marcar como match y reiniciar la selección
      setselectedMemoBlock(null);
    } else {
      setAnimating(true);
      setTimeout(() => {
        shuffledMemoBlocksCopy.splice(memoBlock.index, 1, memoBlock);
        shuffledMemoBlocksCopy.splice(selectedMemoBlock.index, 1, selectedMemoBlock);
        setShuffledMemoBlocks(shuffledMemoBlocksCopy);
        setselectedMemoBlock(null);
        setAnimating(false);
      }, 1000);
    }
  }

  // Incrementar o reiniciar el contador de tarjetas volteadas
  if (flippedCount === 1) {
    setFlippedCount(0);
  } else {
    setFlippedCount(flippedCount + 1);
  }
};

export default handleMemoClick2;


