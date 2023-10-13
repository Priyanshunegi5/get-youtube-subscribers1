const mongoose = require('mongoose');

// Get database connection
const conn = mongoose.connection

// Get subscribed table
const table = mongoose.model(
    "Subscribed", require("./../schemas/subscribed")
)

module.exports = {
    /**
     * Create a record in the subscribed table.
     * 
     * @property {Function} create
     * 
     * @param {Object} data Data to be saved in table as record
     * @param {Function} success Will be called after creation
     * @param {Function} failure Will be called after failure
     * @return void
     */
    create: function (data, success, failure) {
        // Create new record in
        // table with given data.
        record = new table(data)

        // Save the record in the table
        record.save((error, data) =>{
            if (error) {
                // Call failure
                return failure(error)
            }

            try {
                // Call success
                return success(data)
            } catch(caught){
                // Call failure
                return failure(error,caught)
            }
        });
    },
}