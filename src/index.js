const dotenv = require("dotenv")
const express = require("express")
const mongoose = require("mongoose")
const router = require("./routes/web")

/////////////////////////////////////////////////////////////////////////////
// Create application (app)
/////////////////////////////////////////////////////////////////////////////
const app = express()
// Get parsed env file
const env = dotenv.config().parsed