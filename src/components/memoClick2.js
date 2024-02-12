const handleMemoClick2 = (memoBlock, shuffledMemoBlocks, setShuffledMemoBlocks, selectedMemoBlock, setselectedMemoBlock, flippedCount, setFlippedCount, animating, setAnimating) => {
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
    } else if (selectedMemoBlock.emoji === memoBlock.emoji && selectedMemoBlock.word === memoBlock.word) {
      // Si hay un match entre el emoji y su definición en palabras, marcar como match
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
  
    // Incrementar o reiniciar el contador de tarjetas volteadas
    if (flippedCount === 1) {
      setFlippedCount(0);
    } else {
      setFlippedCount(flippedCount + 1);
    }
};

export default handleMemoClick2;

