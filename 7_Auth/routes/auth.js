const router = require("express").Router();

const bcrypt = require("bcrypt");

const saltRounds = 12;

const plainTextPassword = "SimpeltPassword!";
const hashedPassword = "$2b$12$Nh/bRUqoT0/E24VeNxXaoexRG3vqHy4V2gBM4AayFs4ue4Iti8Itu";

// How to hash a password.
bcrypt.hash(plainTextPassword, saltRounds, (error, hash) => {
    console.log(hash);
})

// How to autherize a password.
bcrypt.compare(plainTextPassword, hashedPassword, (error, result) => {
    console.log(result);
})


router.post("/auth/login", (req, res) => {
    return res.status(501).send();
});

router.post("/auth/register", (req, res) => {
    return res.status(501).send();
});

router.get("/auth/logout", (req, res) => {
    return res.status(501).send();
});

module.exports = router;