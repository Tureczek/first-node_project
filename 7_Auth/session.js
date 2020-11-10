const router = require("express").Router();
const path = require("path");


router.get("/setSession", (req, res)=>{
    rew.session.mySecret = req.query.secret;
    //  req.session.mySecret = "This is my secret";
   // req.session.isLoggedIn = true;
    return res.send({ data: "Session set"});
});

router.get("/getSession", (req, res)=>{
    console.log(req.session.isLoggedIn);
    return res.send({ data: req.session.mySecret });
});

module.exports = router;