// Board.js

import MemoryCard from "../memoryCards.js/memoryCard";
import "../App.css";

const Board = ({ animating, handleMemoClick, memoryCard }) => {
  return (
    <main className="board">
      {memoryCard.map((card, i) => {
        return <MemoryCard key={`${i}_${card.emoji}`} animating={animating} handleMemoClick={handleMemoClick} memoryCard={card} />
      })}
    </main>
  );
}

export default Board;


