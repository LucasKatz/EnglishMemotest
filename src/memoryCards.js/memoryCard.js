// memoryCard.js

import '../memoryCards.js/memoryCard.css';

const MemoryCard = ({ animating, handleMemoClick, memoryCard }) => (
  <div className="memo-block" onClick={() => (!memoryCard.flipped && !animating) && handleMemoClick(memoryCard)}>
    <div className={`memo-block-inner ${memoryCard.flipped && 'memo-block-flipped'}`}>
      <div className="memo-block-front">
      </div>
      <div className="memo-block-back">
        {memoryCard.emoji}
      </div>
    </div>
  </div>
)

export default MemoryCard;


