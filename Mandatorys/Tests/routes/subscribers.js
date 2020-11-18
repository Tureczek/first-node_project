const express = require("express");
const router = express.Router();
const Subscriber = require("../models/subscriber.js");
const bcrypt = require("bcrypt");


// Getting all
router.get("/", async (req, res) => {
    console.log("Finding users")
    try {
        console.log("Entering Try catch")
        const subscribers = await Subscriber.find();
        res.json(subscribers)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

// Getting One
router.get("/:id", getSubscriber, (req, res) => {
    res.json(res.Subscriber);
});

// Creating One
router.post("/", async (req, res) => {

    //const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel,
        password: req.body.password
    })
    try {
        const newSubscriber = await subscriber.save();
        res.status(201).json(newSubscriber);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


router.post("/login", authenticate, (req, res) => {
    res.json(res.subscriber)
});


// Updating One
router.patch("/:id", getSubscriber, async (req, res) => {
    if (req.body.name != null) {
        res.subscriber.name = req.body.name
    }
    // if(req.body.name != null) {
    //     res.subscriber.subscribedToChannel = req.body.subscribedToChannel
    // }
    try {
        const updatedSubscriber = await res.subscriber.save();
        res.json(updatedSubscriber)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});

// Deleting One
router.delete("/:id", getSubscriber, async (req, res) => {
    try {
        await res.subscriber.remove()
        res.json({message: "Deleted Subscriber"});
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});




// Middleware
async function getSubscriber(req, res, next) {
    let subscriber
    try {
        subscriber = await Subscriber.findById(req.params.id)
        if (subscriber == null) {
            return res.status(404).json({ message: "Cannot find subscriber" })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.subscriber = subscriber
    next()
}


async function authenticate(req, res, next) {
    let subscriber;
    let password;
    subscriber = await Subscriber.find( { name: req.body.name, password: req.body.password } )
    //subscriber = await Subscriber.find( subscriber => subscriber.name === req.body.name)
    if (subscriber == null){
        console.log("it is null ")
        return res.status(400).json({ message: "Cannot find subscriber" })
    }
    try {

    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    console.log("Found something")
    console.log(subscriber)
    res.subscriber = subscriber
    next()
}


module.exports = router