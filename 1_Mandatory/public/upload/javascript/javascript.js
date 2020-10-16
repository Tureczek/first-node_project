const specialParagraph = document.querySelector("#pStyle2");

specialParagraph.addEventListener("click", updateName);

function updateName(){
    let name = prompt("Enter a new name");
    specialParagraph.textContent = "Player 1: " + name;
}