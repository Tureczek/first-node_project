const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'me',
    password : 'secret',
    database : 'my_db'
});
connection.connect();

connection.query('INSERT INTO top_stupid_questions (question VARCHAR(1024));');

connection.query('INSERT INTO top_stupid_questions VALUES("Is a monky a type of snake?");', (error, results, fields) => {
    console.log(results);
    console.log("************************************************************");
    console.log(fields);
});

connection.query(`SELECT * FROM top_stupid_questions;`, (error, result, fields) => {
    console.log(results);
    console.log("************************************************************");
    console.log(fields);

});

connection.closed()