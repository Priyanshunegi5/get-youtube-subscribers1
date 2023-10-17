const channels = require("./../../../models/channels");

/**
 * Asynchronously delete a channel with the provided request data.
 *
 * @param {Object} req - The HTTP request object
 * @param {Object} res - The HTTP response object.
 * @param {Function} next - The next middleware in the routing.
 *
 * @property {Object} params - The parameter of the request
 * @property {String} params.id - The id of the channel to be find.
 *
 * On failure,
 * it sends a 200 status response
 * with a null data object, a 500 error code, errors, and an error message.
 * 
 * On success, it sends a 200 status response
 * with the channel's data object, a 200 success code, and an success message.
 */
const remove = async (req, res, next) => {
    // Request param
    const param = req.params

    // Delete a record using channels model
    channels.delete({ id: param?.id },(record) => {
        if(!record) {
            throw "channel not deleted!";
        }

        // Success response
        res.status(200).json({
            result: {
                code: 200,
                errors: [],
                message: (record
                    ? "deleted"
                    : "already deleted"
                )
            },
            data: !record ? null: {
                id: record?.id,
                title: record?.title,
                summary: record?.summary,
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

module.exports = remove;