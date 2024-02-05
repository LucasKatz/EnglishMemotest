import { createElement } from "react";

const animalEmojis = [
        "🐶",
    "🐱", 
    "🐭", 
    "🐰", 
    "🦊", 
    "🦁", 
    "🐯", 
    "🐻", 
    "🐨", 
    "🐼", 
    "🦓", 
    "🐴", 
    "🦄", 
    "🐮", 
    "🐷", 
    "🐸", 
    "🐔", 
    "🐦", 
    "🐧", 
    "🐢", 
];

const totalAnimals = animalEmojis.concat(animalEmojis);

function delivery(){
    let board = document.querySelector(board);

    board.innerHTML =" "

    totalAnimals.forEach(function(emojis){
        let card = createElement("div")

        card.innerHTML=
        "<div class= 'card'>"
        "<div class= 'cardContent'>"
        emojis
        "</div>"
        "</div>"

        board.appendChild(card)

    })
}
console.log(animalEmojis)

delivery ()