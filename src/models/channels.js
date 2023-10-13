const mongoose = require('mongoose');

// Get database connection
const conn = mongoose.connection

// Get channels table
const table = mongoose.model(
    "Channels", require("../schemas/channels")
)