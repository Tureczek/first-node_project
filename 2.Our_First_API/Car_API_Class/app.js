const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded());




let cars = [
    {id: 1, model: "Jaguar"},
    {id: 2, model: "Mitsubishi"},
    {id: 3, model: "BMW"}
];

let nextCarId = 3;



app.listen(8080, (error) =>{
    if (error){
        console.log("Couldn't start server");
    }
    console.log("Server started up on server ", 8080);
});


app.get("/cars", (req, res) =>{
   return res.send({data : cars});
});

// type coercion ===
app.get("/cars/:id", (req, res)=>{
    const car = cars.find(car => car.id === Number(req.params.id));
    return res.send({data : car});
});


app.get("/", (req, res) =>{
    return res.send(pack);
});

app.post("/cars", (req, res) =>{
    console.log(req.body);
    const newCar = req.body;
    newCar.id = nextCarId++;
    cars.push(newCar);
    return res.send({data : cars});
});

