const channels = require("./../../../models/channels");
const subscribed = require("./../../../models/subscribed");
const subscribers = require("./../../../models/subscribers");

/**
 * Asynchronously update a subscribed with the provided request data.
 *
 * @param {Object} req - The HTTP request object
 * @param {Object} res - The HTTP response object.
 * @param {Function} next - The next middleware in the routing.
 *
 * @property {Object} params - The parameter of the request
 * @property {String} params.id - The id of the subscribed to be find.
 * @property {Object} data - The body of the request
 * @property {String} data.title - The title of the subscribed.
 * @property {String} data.summary - The summary of the subscribed.
 *
 * On failure,
 * it sends a 200 status response
 * with a null data object, a 500 error code, errors, and an error message.
 * 
 * On success, it sends a 200 status response
 * with the subscribed's data object, a 200 success code, and an success message.
 */
const update = async (req, res, next) => {
    // Request payload
    const data = req.body
    // Request param
    const param = req.params

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
    subscribers.read({id: data?.subscriber }, (subscriber) => {
        if(!subscriber) {
            throw "subscriber not found!";
        }

        // Find the channel using channels model
        channels.read({ id: data?.channel }, (channel) => {
            if(!channel) {
                throw "channel not found!";
            }

            // Update a record using subscribed model
            subscribed.update({ id: param?.id }, {
                channel: channel?.id,
                subscriber: subscriber?.id,
                updatedAt: Date.now()
            },(record) => {
                if(!record) {
                    throw "subscribed not updated!";
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
                        channel: record?.channel,
                        subscriber: record?.subscriber,
                        updatedAt: record?.updatedAt,
                        createdAt: record?.createdAt,
                    }
                })
                // Forward to next middleware
                next(record)
            },errorHandler);
        }, errorHandler.bind(null, 'channel not found!'));
    }, errorHandler.bind(null, 'subscriber not found!'));
}

module.exports = update;