const express = require('express');
const app = express();


const userSchema = require("./models/subscribers");

app.use(express.json())
app.use(express.urlencoded({ extended: false }));


// Your code goes here
app.get("/subscribers", async (req, res, next) => {
    try {
        let subscribers = await userSchema.find();
        // Retrieve all subscribers from the schema/model
        res.status(200).json(subscribers);
        // Send the subscribers as a JSON response with a status of 200 (OK)
    } catch (err) {
        res.status(400);
        // Set the response status to 400 (Bad Request)
        next(err);
        // Pass the error to the error handling middleware
    }
});

app.get("/subscribers/names", async (req, res, next) => {
    try {
        let subscribers = await userSchema.find(
            {},
            { name: 1, subscribedChannel: 1, _id: 0 }
        ); // Retrieve subscribers with only the name and subscribedChannel fields from the schema/model
        res.status(200).json(subscribers); // Send the subscribers as a JSON response with a status of 200 (OK)
    } catch (err) {
        res.status(400);
        // Set the response status to 400 (Bad Request)
        next(err);
        // Pass the error to the error handling middleware
    }
});

app.get("/subscribers/:id", async (req, res) => {
    try {
        const id = req.params.id;
        // Extract the ID parameter from the request URL
        if (!id) {
            res.status(400).json({ message: "No ID provided" });
            // Send a JSON response with a status of 400 (Bad Request)
            return;
        }
        const subscriber = await userSchema.findById(id);
        // Find a subscriber with the given ID in the schema/model
        if (!subscriber) {
            res.status(404).json({ message: "Subscriber not found" });
            // Send a JSON response with a status of 404 (Not Found)
            return;
        }
        res.send(subscriber);
        // Send the subscriber details as the response
    } catch (error) {
        res.status(400).json({ message: error.message });
        // Send a JSON response with a status of 400 (Bad Request) and the error message
    }
});




module.exports = app;
