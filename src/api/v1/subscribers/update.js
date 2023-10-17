const subscribers = require("./../../../models/subscribers");

/**
 * Asynchronously update a subscriber with the provided request data.
 *
 * @param {Object} req - The HTTP request object
 * @param {Object} res - The HTTP response object.
 * @param {Function} next - The next middleware in the routing.
 *
 * @property {Object} params - The parameter of the request
 * @property {String} params.id - The id of the subscriber to be find.
 * @property {Object} data - The body of the request
 * @property {String} data.title - The title of the  subscriber.
 * @property {String} data.summary - The summary of the  subscriber.
 *
 * On failure,
 * it sends a 200 status response
 * with a null data object, a 500 error code, errors, and an error message.
 * 
 * On success, it sends a 200 status response
 * with the subscriber's data object, a 200 success code, and an success message.
 */
const update = async (req, res, next) => {
    // Request payload
    const data = req.body
    // Request param
    const param = req.params

    // Update a record using subscribers model
    subscribers.update({ id: param?.id }, {
        name: data?.name,
        email: data?.email,
        updatedAt: Date.now()
    },(record) => {
        if(!record) {
            throw "subscriber not updated!";
        }

        // Success response
        res.status(200).json({
            result: {
                code: 200,
                errors: [],
                message: "updated"
            },
            data: {
                id: record?.id,
                name: record?.name,
                email: record?.email,
                updatedAt: record?.updatedAt,
                createdAt: record?.createdAt,
            }
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

module.exports = update;