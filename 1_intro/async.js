// Promises er bare callbacks, men bruger en anden syntax
// Two states
// Pending
// Fulfilled
// - resolve, reject

/*
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Everything went well");
    }, 3000);
}).then(output => console.log(output));
*/

/*
new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Everything went well");
    }, 3000);
}).then(output => console.log(output))
    .catch(output => console.log("Hardcoded inside of catch block"));
*/

/*
new Promise((resolve, reject) =>{
    try {
        setTimeout(() => {
            resolve("Everything went well");
        }, 3000);
    } catch {
        reject("Something went wrong");
    }
}).then(output => console.log(output))
.catch(output => console.log(output));
*/


//Return a function that returns a promise after 5 seconds

function myPromiseFunction() {
    // When returning new Promise, it knows that we use res, rej
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Everything went well from promise function");
        }, 4000);
    });
}

//try to call the promise function
/*
function callMyPromise() { // <-- this could also be a anonymous function
    myPromiseFunction().then(console.log); // <-- .then(message => console.log(message); <- it is the same as an injection.
}
callMyPromise();
 */
// Runs function in the same lines of code line 57 - 59 Self executing functions
(function callMyPromise() { // <-- this could also be a anonymous function
    myPromiseFunction().then(console.log); // <-- .then(message => console.log(message); <- it is the same as an injection.
})();


//  async / await
(async function callMyPromise2() {
    const output = await myPromiseFunction();
    console.log(output)
})();


// so like above, but with an arrow function
(async () => {
    try {
        const output = await myPromiseFunction();
        console.log(output + " from async arrow");
    } catch {
        // Handle catch here
    }
})();


