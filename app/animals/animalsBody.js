// animals.js
"use client"
import MemoryCard from "@/componentes/memoryCard";



const animalEmojis = [
    "🐶", "🐱", "🐭", "🐰", "🦊", "🦁", "🐯", "🐻", "🐨", "🐼", "🦓", "🐴", "🦄", "🐮", "🐷", "🐸", "🐔", "🐦", "🐧", "🐢",
];

const totalAnimals = animalEmojis
  .map((emoji) => ({ animalEmojis: emoji }))
  .concat(animalEmojis.map((emoji) => ({ animalEmojis: emoji })));


function Animals() {
  return (
    <main>
      <section className="container m-auto flex justify-center items-center gap-12 flex-wrap">
        {totalAnimals.map((item, index) => (
            <MemoryCard key={index} item={item} />
        ))}
      </section>
    </main>
  );
}

export default Animals;
