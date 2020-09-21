const express = require("express"); // importere
const obj = require("../1_intro/1_Exercieses/object");
const app = express();
// const app = require("express")();

app.get("/", (req, res) => {
    return res.send(obj);
});

app.listen(8080, (error) => {
    if (error){
        console.log("Error starting server");
    }
    console.log("Server is running on port ", 8080)
});