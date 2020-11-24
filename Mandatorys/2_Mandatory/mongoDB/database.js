require("dotenv").config();
const express = require("express");
const fetch = require("node-fetch");
const app = express();
app.use(express.json());

console.log($);


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
