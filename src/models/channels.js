const mongoose = require('mongoose');

// Get database connection
const conn = mongoose.connection

// Get channels table
const table = mongoose.model(
    "Channels", require("../schemas/channels")
)

module.exports = {
    /**
     * Create a record in the channel table.
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
        record.save((error, data) => {
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

    /**
     * Read a record from the channel table.
     * 
     * @property {Function} read
     * 
     * @param {Object|Null} id Identifier for searching record in table
     * @param {Function} success Will be called after creation
     * @param {Function} failure Will be called after failure
     * @return void
     */
    read: function (id, success, failure) {
        // Find the specifed
        // record in the table
        record = table.findOne(id ? id: {})

        // Execute the find instruction in the table
        record.exec((error, data) =>{
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

    /**
     * Update a record in the channel table.
     * 
     * @property {Function} update
     * 
     * @param {Object|Null} id Identifier for searching record in table
     * @param {Object} data Data to be update in table record
     * @param {Function} success Will be called after creation
     * @param {Function} failure Will be called after failure
     * @return void
     */
    update: function (id, data, success, failure) {
        // Update the specifed
        // record in the table
        record = table.findOneAndUpdate(
            id ? id: {}, data
        )

        // Execute the find and update instruction in the table
        record.exec((error, data) =>{
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

    /**
     * Delete a record from the channel table.
     * 
     * @property {Function} delete
     * 
     * @param {Object|Null} id Identifier for searching record in table
     * @param {Function} success Will be called after creation
     * @param {Function} failure Will be called after failure
     * @return void
     */
    delete: function (id, success, failure) {
        // Delete the specifed
        // record from the table
        record = table.findOneAndDelete(id ? id: {})

        // Execute the find and delete instruction in the table
        record.exec((error, data) =>{
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