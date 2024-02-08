
// animalsBoard.js

import MemoryCard from "../memoryCards.js/memoryCard";
import "../App.css";

const Board = ({ animating, handleMemoClick, shuffledAnimals }) => (
  <main>
    <section className="container m-auto flex justify-center items-center gap-12 flex-wrap">
      {shuffledAnimals.map((item, index) => (
        <MemoryCard
          key={`${item.animalEmojis}_${index}`}
          isMatched={item.isMatched}
          isRevealed={item.isRevealed}
          handleClick={() => handleMemoClick(item.id)}  // Assuming you have an id property in item
          animalEmojis={item.animalEmojis}
        />
      ))}
    </section>
  </main>
);

export default Board;

