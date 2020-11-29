require("dotenv").config();
const express = require("express");
const fetch = require("node-fetch");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});
const database = mongoose.connection;
database.on("error", (error) => console.error(error));
database.on("open", () => console.error("Connected to Database"));

console.log($)
function getUploads(){
    fetch("/database")
        .then(result => result.json())
        .then(json => {
            console.log(json.data[0].name)
            for(let i = 0; i<2; i++){
                const name = json.data[i].name;
                $('#database').append('<li>' + name + '</li>')
                console.log(name)
            }
        })
}

getUploads();


$('database').append('<li>Hej</li>')
