const mongoose = require('mongoose');

// Get database connection
const conn = mongoose.connection

// Get subscribed table
const table = mongoose.model(
    "Subscribed", require("./../schemas/subscribed")
)