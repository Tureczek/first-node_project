const router = require("express").Router(); //Dummy route, da det ikke er en server instans
const path = require("path"); //path.join

router.post("/form", (req, res) =>{
    console.log(req.body);
    return res.send({data : req.body});
});

// ???
module.exports = router;