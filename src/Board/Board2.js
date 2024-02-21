import React from "react";
import MemoryCard2 from "../memoryCards.js/memoryCard2";
import { Link } from "react-router-dom";
import "../Board/Board.css";


const Board2 = ({ animating, handleClick, memoryCard, showEmoji, resetBoard }) => {
  return (
    <main className="board">
      {memoryCard.map((card, i) => {
        // Agregar 1 al índice para que comience desde 1 en lugar de 0
        const cardWithNumber = { ...card, number: i + 1 };
        return (
          <MemoryCard2
            key={`${i}_${card.emoji}`}
            animating={animating}
            handleMemoClick={() => handleClick(cardWithNumber)}
            memoryCard={cardWithNumber}
            showEmoji={showEmoji} // Pasa showEmoji como prop
          />
        );
        
      })}
            <button onClick={resetBoard}>Reset</button>
            <Link to={"/"}>
            <button>
              Back to Menu
            </button>
            </Link>
    </main>
  );
};

export default Board2;
