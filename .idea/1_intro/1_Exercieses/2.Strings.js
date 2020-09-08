// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const calculate = parseFloat(numberOne) + parseFloat(numberTwo);
console.log(calculate);

// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const calculate2 = parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo);
console.log(calculate2.toFixed(2));

// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals
const avg = ((one + two + three)/3);
console.log(avg.toFixed(5));




// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"
const cIndex = letters.charAt(2);
const cIndex2 = letters[2];
console.log(cIndex);




// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript
// Gør kun det første j stort.
const factMod = fact.replace("javascript", "Javascript");
console.log(factMod);

// --------------------------------------