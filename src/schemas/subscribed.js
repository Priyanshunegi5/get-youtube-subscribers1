const mongoose = require('mongoose');
const { v4: uuidv4 } = require("uuid");

const subscribedSchema = new mongoose.Schema({
    // Identifier
    id: {
        type: String,
        required: true,
        default: () => uuidv4()
    },

    // Data
    channel: {
        type: String,
        required: true,
        ref:'Channels'
    },
    subscriber: {
        type: String,
        required: true,
        ref:'Subscribers'
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

module.exports = subscribedSchema