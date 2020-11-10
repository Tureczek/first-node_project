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

setTimeout(taskOne, 2000);
taskTwo();

document.querySelector("#callbackButton")
    .addEventListener("click", function (){
        console.log("A user has pressed the Try me button")
    });



$(".firstExample").css({
    "font-weight" : "bold",
    "margin-left" : "7%"
});

$(".space1").css("margin-left", "2.5em");

$(".space2").css("margin-left", "5em");

$("#app_js").css({
   "height": "50%",
    "width": "46%"
});

$("#moreExamples").css("text-decoration", "underline");