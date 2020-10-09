const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded());

/*
GET             /cars
POST            /cars
PUT PATCH       /cars/id
DELETE          /cars/id
*/

let nextCarId = 3;
// unary expression
// const port = process.env.PORT || 80;
//ternery expression
const port = process.env.PORT ? process.env.PORT : 80;

//enviromental variablre
// If port is defined then that should be the port, otherwise fallback to port 80
console.log(process.env.PORT);


app.listen(port, (error) =>{
    if (error){
        console.log("Error starting server");
    }
    console.log("Server sucessfully started");

});


app.get("/cars", (req, res) =>{
    return res.send(cars);
});

// type coercion ===
app.get("/cars/:id", (req, res)=>{
    const car = cars.find(car => car.id === Number(req.params.id));
    return res.send({data : car});
});


app.post("/cars", (req, res) =>{
    console.log(req.body);
    const newCar = req.body;
    newCar.id = nextCarId++;
    cars.push(newCar);
    return res.send({data : cars});
});


app.patch("/cars/:id", (req, res) =>{
    // find car -> get id -> overwrite in array
    //cars = cars.map(car => car.id === Number(req.params.id));
    cars = cars.map(car =>{
        if(car.id === Number(req.params.id)){
            return {...car, ...req.body, id: car.id};
        }
        return car;
    });
    return res.send({data : cars})
});

app.delete("/cars/:id", (req, res) =>{
    cars = cars.filter(car => car.id !== Number(req.params.id));
    return res.send({data: cars});
});




let cars = [
    {id: 1, model: "Jaguar"},
    {id: 2, model: "Mitsubishi"},
    {id: 3, model: "BMW"}
];

