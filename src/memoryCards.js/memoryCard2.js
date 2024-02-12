import React from 'react'; // Importamos React
import '../memoryCards.js/memoryCard.css'; // Importamos el archivo CSS

const MemoryCard2 = ({ animating, handleMemoClick, memoryCard }) => (
  <div className="memo-block" onClick={() => (!memoryCard.flipped && !animating) && handleMemoClick(memoryCard)}>
    <div className={`memo-block-inner ${memoryCard.flipped && 'memo-block-flipped'}`}>
      <div className="memo-block-front">
        <span className="card-number">{memoryCard.number}</span>
      </div>
      <div className="memo-block-back">
        {memoryCard.emoji}
      </div>
    </div>
  </div>
);

export default MemoryCard2;

