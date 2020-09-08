function myFirstFunction() {
    return "Hello World";
}

console.log(myFirstFunction());

const myVariableFunction = function () {
    console.log("Hi there from the anonymous function");
};

console.log(myVariableFunction());



const myArrowFunction = () => {
    console.log("Hi there from the myArrowFunction function");
};


// 1. pass the function as an argument
// 2. call the function later

function sayHiLater(anyFunctionReferance) {
    anyFunctionReferance();
};

sayHiLater(myArrowFunction);


//Callback function

const poke = (name) => "poke " + name;

function interact(genericInteraction, name){
    console.log(genericInteraction(name))
};

interact(poke, 'Nicholas');

const hug = (name) => "hug " + name;

interact((name) => "hug " + name, "Myself");

// 1. give arguments to interact on line 36
// 2. Define parameters in interact on line 32
// 3. define the body of interact
// Add hug.