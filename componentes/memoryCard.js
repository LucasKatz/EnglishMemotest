
const MemoryCard = ({ item }) => {
    const { animalEmojis } = item;
  
    return (
      <div className="">
        <div  id="memoryCard" >
          {animalEmojis}
        </div>
      </div>
    );
  };
  
  export default MemoryCard;
  