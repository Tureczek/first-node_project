const specialParagraph = document.querySelector("#pStyle2");

specialParagraph.addEventListener("click", updateName);

function updateName(){
    let name = prompt("Enter a new name");
    specialParagraph.textContent = "Player 1: " + name;
}

function taskOne() {
    console.log("Task 1");
}

function  taskTwo(){
    console.log("Task 2");
}

taskOne();
taskTwo();








$(".stripeTop").css("margin-top", "60%");
$(".stripeBottom").css("margin-top", "7.1%");

$(".firstExample").css({
    "font-weight" : "bold",
    "margin-left" : "7%"
});
