const express = require("express");
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({extended: true}));
const Subscriber = require("../mongoDB/subscribers")
const getSubscriber = require("../mongoDB/read.js")
const findOneUser = require("../mongoDB/read.js")


router.post("/auth/login", (req, res) => {
    console.log("Called login post method")
    let username = req.body.username
    //let password = req.body.password
    //console.log("req.body.username: " + username)
    // console.log("req.body.password: " + password)
    // console.log(user)


    return res.status(501).send({data: "ok"})

});


router.get("/auth/signout", (req, res) => {
    return res.status(501).send({data: "ok"})
});


module.exports = router