/*import MemoryCard from "../memoryCards.js/memoryCard";
import "../Board/Board.css";

const Board = ({ animating, handleClick, memoryCard }) => {
  return (
    <main className="board">
      {memoryCard.map((card, i) => {
        // Agregar 1 al índice para que comience desde 1 en lugar de 0
        const cardWithNumber = { ...card, number: i + 1 };
        return (
          <MemoryCard
            key={`${i}_${card.emoji}`}
            animating={animating}
            handleMemoClick={() => handleClick(cardWithNumber, animating)}
            memoryCard={cardWithNumber}
          />
        );
      })}
    </main>
  );
};

export default Board;*/



