
//Accessing let before initialization throws an error
// console.log(name);
let name = "Nicholas";

{
    {
        let scopeVar = 123;
    }
    //Let sticks to its scope or below
     //console.log(scopeVar);
};

// når man arbejder med json, skal der anførselstegn om key, dette er ikke nødvendigt i JavaScript
const myObj = {
    key : "value"
};


//Arrays
/*
const fruits = ["Apple", "Banana"];
fruits.push("Pear");
console.log(fruits);
console.log(fruits[1]);
//Removes
fruits.pop();
fruits.pop();
console.log(fruits);
*/

const foo = [ 123, 456 ]
foo = 789