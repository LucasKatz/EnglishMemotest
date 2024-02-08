const handleMemoClick = (memoBlock, shuffledMemoBlocks, setShuffledMemoBlocks, selectedMemoBlock, setselectedMemoBlock, animating, setAnimating) => {
    const flippedMemoBlock = { ...memoBlock, flipped: true };
    let shuffledMemoBlocksCopy = [...shuffledMemoBlocks];
    shuffledMemoBlocksCopy.splice(memoBlock.index, 1, flippedMemoBlock);
    setShuffledMemoBlocks(shuffledMemoBlocksCopy);
  
    if (selectedMemoBlock === null) {
      setselectedMemoBlock(memoBlock);
    } else if (selectedMemoBlock.emoji === memoBlock.emoji) {
      setselectedMemoBlock(null);
    } else {
      // Verificar si hay menos de dos tarjetas animando
      if (animating < 2) {
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
  };
  
  export default handleMemoClick;
  
  