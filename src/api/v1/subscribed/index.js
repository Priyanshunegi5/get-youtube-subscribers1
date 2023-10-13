const subscribed = require("./../../../models/subscribed");

/**
 * Asynchronously read all channel and subscriber from subscribed.
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
 * with the subscribed's data object, a 200 success code, and an success message.
 */
const index = async (req, res, next) => {
    // Read all channel and subscriber using subscribed model
    subscribed.index((records) => {
        if(!records){
            throw "subscribed not found!"
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
                    channel: record?.channels[0]?.title,
                    subscriber: record?.subscribers[0]?.name,
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

module.exports = index;