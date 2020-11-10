const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));
const fetch = require("node-fetch");


app.get("/", (req, res) => {
    return res.sendfile(__dirname + "/public/upload/index.html");
});

app.get("/npm", (req, res) => {
    return res.sendfile(__dirname + "/public/upload/npm/npmpage.html");
});

app.get("/javascript", (req, res) => {
    return res.sendfile(__dirname + "/public/upload/javascript/javascript.html");
});

app.get("/jquery", (req, res) => {
    return res.sendfile(__dirname + "/public/upload/jquery/jquery.html");
});

app.get("/restful", (req, res) => {
    return res.sendfile(__dirname + "/public/upload/restful/restful.html");
});


/*
http://sahatyalkabov.com/jsrecipes/#!/backend/parsing-query-string-post-and-url-parameters
GET & POST
Query string example
*/
app.get("/rest", (req, res) => {
    res.send("Your query: " + req.query.q + "\n");
});



// for testing
let nextCarId = 4;

let cars = [
    {id: 1, model: "Jaguar"},
    {id: 2, model: "Mitsubishi"},
    {id: 3, model: "BMW"}
];


app.get("/cars", (req, res) => {
    return res.send(cars);
});


app.get("/cars/:id", (req, res) => {
    const car = cars.find(car => car.id === Number(req.params.id));
    return res.send({data: car});
});


app.post("/cars", (req, res) => {
    console.log(req.body);
    const newCar = req.body;
    newCar.id = nextCarId++;
    cars.push(newCar);
    return res.send({data: cars});
});

// find car -> get id -> overwrite in array
//cars = cars.map(car => car.id === Number(req.params.id));
app.patch("/cars/:id", (req, res) => {
    cars = cars.map(car => {
        if (car.id === Number(req.params.id)) {
            return {...car, ...req.body, id: car.id}; //spread operator
        }
        return car;
    });
    return res.send({data: cars})
});

app.delete("/cars/:id", (req, res) => {
    cars = cars.filter(car => car.id !== Number(req.params.id));
    return res.send({data: cars});
});


//Kig lige lidt ekstra på denne hvis der er tid.
app.get("/proxy", (req, res) => {
    fetch("https://en.wikipedia.org/wiki/Node.js")
        .then(result => result.textConverted())
        .then(body => {
            return res.send(body);
        });
});


const port = process.env.PORT || 80;
app.listen(80, (error) => {

    if (error) {
        console.log("Error starting server " + error);
    }
    console.log("server is running on port", Number(port));
});
