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

/////////////////////////////////////////////////////////////////////////////
// In this section we parse incomming request payload 
/////////////////////////////////////////////////////////////////////////////
//Process incomming json request payload.
app.use(express.json())
//Process incomming urlencoded request payload.
app.use(express.urlencoded({ extended: false }));

/////////////////////////////////////////////////////////////////////////////
// In this section we register our router
// which register all routes in the application
/////////////////////////////////////////////////////////////////////////////
app.use('/api/v1/', router.v1 )
// Handle internal server error - (500)
app.use((err, req, res, next) => {
    return res.status(500).send({
        data: null,
        result: {
            code: 500,
            message: "failure",
            errors: [ err ]
        }
    });
});
// Handle route not found - (404)
app.use((req, res, next) => {
    return res.status(404).send({
        data: null,
        result: {
            code: 404,
            message: "failure",
            errors: [`path: ${req.url} not found.`]
        }
    });
});

/////////////////////////////////////////////////////////////////////////////
// Connect to our mongoose database
/////////////////////////////////////////////////////////////////////////////
mongoose.connect(env.DATABASE_URL,{
    useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true
}).catch(err =>{
    // Catch all database connection errors
    console.error(err.stack)
    process.exit(1)
}).then(async client => {
    // After successfully 
    // connecting with database we listen to 
    // incomming request to our server application.
    app.listen(env.APP_PORT, () => {
        console.log('info',
            `Server is running at port: ${env.APP_PORT}`
        );
    });
});