const mongoose = require('mongoose');

// Get database connection
const conn = mongoose.connection

// Get subscribers table
const table = mongoose.model(
    "Subscribers", require("./../schemas/subscribers")
)

module.exports = {
    //
}