import React from "react";
import MemoryCard2 from "../memoryCards.js/memoryCard2";

const Board2 = ({ memoryCard, handleClick, showEmoji }) => {
  return (
    <main className="board">
      {memoryCard.map((card, i) => {
        return (
          <MemoryCard2
            key={`${i}_${card.emoji}`}
            emoji={showEmoji ? card.emoji : null}
            word={showEmoji ? null : card.word}
            flipped={card.flipped}
            handleClick={() => handleClick(card)}
          />
        );
      })}
    </main>
  );
};

export default Board2;
