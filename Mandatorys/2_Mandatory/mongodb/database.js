require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});
const database = mongoose.connection;
database.on("error", (error) => console.error(error));
database.on("open", () => console.error("Connected to Database"));

