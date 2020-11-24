const express = require("express");
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({extended: true}));
const getSubscriber = require("../mongoDB/read.js")
const findOneUser = require("../mongoDB/read.js")


router.post("/auth/login", findOneUser, (req, res) => {
    console.log("Called login post method")
    return res.status(501).send({data: "ok"})
});




router.get("/auth/signout", (req, res) => {
    return res.status(501).send({data: "ok"})
});


module.exports = router