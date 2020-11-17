const express = require("express");
const app = express();

app.use(express.json()); // Type middleware når vi har en body parser.

require("dotenv").config();

const session = require("express-session");


console.log(process.env.SESSION_SECRET);

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true, // når en client laver et request første gang, så bliver der oprettet en session object til den.
    cookie: { secure: false }
}));

const rateLimiter = require("express-rate-limit");

const authLimiter = rateLimiter({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 100 // limit each IP to 100 requests pr windowMs
});

app.use(authLimiter);


// lave en auth rout og definer de routs der hører med til et auth system.

const uploadRouter = require("./routes/auth.js");
const pagesRouter = require("./pages.js");
const sessionRoutes = require("./session");
app.use(uploadRouter); //app.use("/baseroute", uploadRouter); <- here the page would be http://localhost:8080/baserout/(route page)
app.use(pagesRouter);
app.use(sessionRoutes);



/* Consol.log() on all routes
app.use((req, res, next) =>{
    console.log("This runs on all routs");
    next();
});
*/

function greeting(req, res, next){
    console.log("Wow, nice to see you", req.ip);
    next();
}


app.get("/", greeting, (req, res, next) =>{
    console.log("Hit the first route");
    next(); // Her hopper den til den næste request som matcher, i dette tilfælde, app.get nedenunder.
});

app.get("/", (req, res) =>{
    return res.send({ data: "This is the frontpage" });
});

//Asterix giver os mulighed for at sende den samme besked på sider der ikke eksistere
app.get("/*", (req, res) =>{
    return res.status(501).send({ data: "Could not get the page" });
});

// Status codes:
// 200 - OK
// 4xx
// 401 _ Unauthorized
// 403 - Forbidden
// 5xx
// 500 - Internal Server Error







const port = process.env.PORT || 80;
app.listen(8080, (error) => {
    if(error){
        console.log(`Error was detected, starting the server on port: ${port}`);
    }
});

