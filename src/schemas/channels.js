const mongoose = require('mongoose');
const { v4: uuidv4 } = require("uuid");

const channelSchema = new mongoose.Schema({
    // Identifier
    id: {
        type: String,
        required: true,
        default: () => uuidv4()
    },

    // Data
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
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

channelSchema.pre('remove', (callback) => {
    // Remove the channel
    // from the subscribed table
    this.model('Subscribed').remove(
        { channel: this.id }, callback
    )
})

module.exports = channelSchema