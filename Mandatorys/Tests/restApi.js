require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection
db.on("error", (error) => console.error(error));
db.on("open", () => console.error("Connected to Database"));

app.use(express.json());

const subscribersRouter = require("./routes/subscribers.js")
app.use("/subscribers", subscribersRouter) // Our URL is: "localhost:3000/subscribers"


app.listen(3000, () => console.log("Server Started"));