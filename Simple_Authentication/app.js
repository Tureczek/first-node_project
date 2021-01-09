const express = require("express");
const app = express();
const fs = require("fs");

const port = process.env.DEV_PORT || 80;

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended: false}));


const header = fs.readFileSync(__dirname + "/public/header/header.html").toString();
const footer = fs.readFileSync(__dirname + "/public/footer/footer.html").toString();
const index = fs.readFileSync(__dirname + "/public/index/index.html").toString();
const loginPage = fs.readFileSync(__dirname + "/public/loginPage/loginPage.html").toString();



app.get("/", (req, res) => {
    return res.send(header + index + footer);
});


app.get("/login", (req, res) => {
    return res.send(header + loginPage + footer);
});




app.listen(Number(port), (error) => {
    if(error) {
        console.log("Error starting on port: ", port);
    }
    console.log("Server successfully started on port: ", port);
});