const mongoose = require('mongoose');
const { v4: uuidv4 } = require("uuid");

const subscriberSchema = new mongoose.Schema({
    // Identifier
    id: {
        type: String,
        required: true,
        default: () => uuidv4()
    },

    // Data
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },

    // Timestamps
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
})

module.exports = subscriberSchema