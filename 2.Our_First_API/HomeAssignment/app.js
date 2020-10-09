const express = require("express");
const fetch = require('node-fetch');
const encoding = require("encoding");
const app = express();
const obj = require("../../1_intro/1_Exercieses/object");
app.use(express.json());
app.use(express.urlencoded());


//ALDRIG VAR!!! - brug let eller const
app.listen(8080, (error) =>{
    if (error){
        console.log("Error starting server");
    }
    console.log("server is running on port", 8080);
});

app.get("/", (req, res) => {
   return res.send("<h1>Hello, World!</h1>");
});



//Redirecting
app.get("/greeting", (req, res) =>{
    res.redirect("/");
});

app.get("/proxy", (req, res) =>{
    fetch('https://www.google.dk/')
        .then(result => result.textConverted())
        .then(body => {
            //const page = encoding.convert(body);
            return res.send(body);
        });
    });

//Sendfile tager imod absolute path
app.get("/documentation", (req, res) =>{
    console.log(__dirname); // fortæller hvor kommandoen bliver kørt fra.
    return res.sendfile(__dirname + "/documentation.html");
});

//Getting catFact html
app.get("/catfact", (req, res) => {
    return res.sendfile(__dirname + "\\catfacts.html");
});


app.get("/documentation2", (req, res) =>{
    console.log(__dirname); // fortæller hvor kommandoen bliver kørt fra.

    return res.sendfile(__dirname + "/documentation2.html");
});




//Getting current time
app.get("/time", (req, res) =>{
    const date_obj = new Date();
    const time = date_obj.getHours() + ":" + date_obj.getMinutes();
    return res.send({time});
});



//Getting date

const months = {
    0 : "January",
    1 : "Febuary",
    2 : "March",
    3 : "April",
    4 : "May",
    5 : "June",
    6 : "July",
    7 : "August",
    8 : "September",
    9 : "October",
    10 : "November",
    11 : "December"
};

// Getting day
const days = {
    0 : "Sunday",
    1 : "Monday",
    2 : "Tusday",
    3 : "Wedensday",
    4 : "Thursday",
    5 : "Friday",
    6 : "Saturday"
};

const daysArr = ["Sunday", "Monday", "Tusday", "Wedensday", "Thursday", "Friday", "Saturday"];



app.get("/month", (req, res) =>{
    const date = new Date();
    const month = date.getMonth();
    return res.send({month : months[month]});
});

app.get("/day", (req, res) => {
    const date = new Date();
    const day = date.getDay();
//    return res.send({day : days[day]});
    return res.send({day : daysArr[day]});
});


app.get("/me", (req, res) => {
    return res.send({"name" : "Nicholas"});
});

//Her kan informationer skrives i url -> efter endt adresse ?key=value&key2=value2
app.get("/querystring", (req, res) =>{
    console.log(req);
   return res.send({query : req.query});
});

// Querystrings og path variable er 2 metoder til at sende data gennem url
app.get("/message/:message", (req, res) =>{
    return res.send({message : req.params.message,
        queryString: req.query});
});

//boddy ligger i request
app.post("/showmethebody", (req, res) => {
    console.log(req.body);
    return res.send(req.body);
});