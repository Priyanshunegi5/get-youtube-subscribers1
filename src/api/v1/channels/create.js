const channels = require("./../../../models/channels");
const subscribers = require("./../../../models/subscribers");

/**
 * Asynchronously creates a new channel with the provided request data.
 *
 * @param {Object} req - The HTTP request object
 * @param {Object} res - The HTTP response object.
 * @param {Function} next - The next middleware in the routing.
 *
 * @property {Object} data - The body of the request
 * @property {String} data.title - The title of the new channel.
 * @property {String} data.summary - The summary of the new channel.
 *
 * On failure,
 * it sends a 200 status response
 * with a null data object, a 500 error code, errors, and an error message.
 * 
 * On success, it sends a 200 status response
 * with the channel's data object, a 200 success code, and an success message.
 */
const create = async (req, res, next) => {
    // Request payload
    const data = req.body

    const errorHandler = (error) => {
        thrown = error;

        if(typeof error === String){
            error = [error]
        } else {
            error = "something went wrong!";
        }

        // Failure response
        res.status(200).json({
            data: null,
            result: {
                code: 500,
                message: "failure",
                errors: [error]
            }
        })

        // Forward to next middleware
        next(thrown)
    }

    // Find the subscriber using subscribers model
    subscribers.read({ id: data.subscriber }, (subscriber) => {
        if(!subscriber) {
            throw "subscriber not found!";
        }

        // Create record using channels model
        channels.create({
            title: data?.title,
            summary: data?.summary,
            subscriber: subscriber?.id,
        },(record) => {
            if(!record) {
                throw "channel not created!";
            }

            // Success response
            res.status(200).json({
                result: {
                    code: 200,
                    errors: [],
                    message: "created"
                },
                data: {
                    id: record?.id,
                    title: record?.title,
                    summary: record?.summary,
                    updatedAt: record?.updatedAt,
                    createdAt: record?.createdAt,
                    subscriber: record?.subscriber,
                }
            })

            // Forward to next middleware
            next(record)
         },errorHandler);
    }, errorHandler.bind(null, 'subscriber not found!'));
}

module.exports = create;