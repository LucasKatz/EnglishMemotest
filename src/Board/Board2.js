import React from "react";
import MemoryCard2 from "../memoryCards.js/memoryCard2"; // Importamos MemoryCard2 en lugar de MemoryCard1
import "../Board/Board.css";

const Board2 = ({ animating, handleClick, memoryCard }) => {
  return (
    <main className="board">
      {memoryCard.map((card, i) => {
        // Agregar 1 al índice para que comience desde 1 en lugar de 0
        const cardWithNumber = { ...card, number: i + 1 };
        return (
          <MemoryCard2
            key={`${i}_${card.emoji}`}
            animating={animating} // Pasamos animating
            handleMemoClick={() => handleClick(cardWithNumber)} // No necesitamos pasar animating aquí
            memoryCard={cardWithNumber}
          />
        );
      })}
    </main>
  );
};

export default Board2;
