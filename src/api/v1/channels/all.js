const channels = require("./../../../models/channels");

/**
 * Asynchronously read all channels.
 *
 * @param {Object} req - The HTTP request object
 * @param {Object} res - The HTTP response object.
 * @param {Function} next - The next middleware in the routing.
 *
 * On failure,
 * it sends a 200 status response
 * with a null data object, a 500 error code, errors, and an error message.
 * 
 * On success, it sends a 200 status response
 * with the channel's data object, a 200 success code, and an success message.
 */
const all = async (req, res, next) => {
    // Find all records using channels model
    channels.all((records) => {
        if(!records){
            throw "channels not found!"
        }

        // Success response
        res.status(200).json({
            result: {
                code: 200,
                errors: [],
                message: "fetched"
            },
            data: Object.values(records).map(
                (record) => ({
                    id: record?.id,
                    title: record?.title,
                    summary: record?.summary,
                    updatedAt: record?.updatedAt,
                    createdAt: record?.createdAt,
                })
            )
        })

        // Forward to next middleware
        next(record)
     },
     (error) => {
        // Log error to console
        console.error.bind(console, error)

        // Failure response
        res.status(200).json({
            data: null,
            result: {
                code: 500,
                message: "failure",
                errors: ['something went wrong!']
            }
        })

        // Forward to next middleware
        next(error)
    });
}

module.exports = all;