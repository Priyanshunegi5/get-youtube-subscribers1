/**
 * A collection of channels endpoints.
 * 
 * An object containing functions for crud operation like:
 * reading, editing, creating, updating, and removing channels.
 * 
 * @type {channel}
 * @typedef {Object} channel
 * @property {Function} all - A function endpoint that reads all channels.
 * @property {Function} read - A function endpoint that reads a channel.
 * @property {Function} create - A function endpoint that creates a channel.
 * @property {Function} update - A function endpoint that updates a channel.
 * @property {Function} delete - A function endpoint that delete a channel.
 * @property {Function} index - A function endpoint that reads subscriber from channel
 */
const channels = {
    all:   require("./v1/channels/all"),
    read:   require("./v1/channels/read"),
    create: require("./v1/channels/create"),
    update: require("./v1/channels/update"),
    delete: require("./v1/channels/delete"),
    index:   require("./v1/channels/index"),
}

/**
 * A collection of subscribers endpoints.
 * 
 * An object containing functions for crud operation like:
 * reading, editing, creating, updating, and removing subscriber.
 * 
 * @type {subscriber}
 * @typedef {Object} subscriber
 * @property {Function} all - A function endpoint that reads all subscriber.
 * @property {Function} read - A function endpoint that reads a subscriber.
 * @property {Function} create - A function endpoint that creates a subscriber.
 * @property {Function} update - A function endpoint that updates a subscriber.
 * @property {Function} delete - A function endpoint that delete a subscriber.
 */
const subscribers = {
    all:   require("./v1/subscribers/all"),
    read:   require("./v1/subscribers/read"),
    create: require("./v1/subscribers/create"),
    update: require("./v1/subscribers/update"),
    delete: require("./v1/subscribers/delete")
}

/**
 * A collection of subscribed endpoints.
 * 
 * An object containing functions for crud operation like:
 * reading, editing, creating, updating, and removing subscribed.
 * 
 * @type {subscribed}
 * @typedef {Object} subscribed
 * @property {Function} all - A function endpoint that reads all subscribed.
 * @property {Function} read - A function endpoint that reads a subscribed..
 * @property {Function} create - A function endpoint that creates a subscribed.
 * @property {Function} update - A function endpoint that updates a subscribed.
 * @property {Function} delete - A function endpoint that delete a subscribed.
 * @property {Function} index - A function endpoint that reads channel and subscriber from subscribed
 */
const subscribed = {
    all:   require("./v1/subscribed/all"),
    read:   require("./v1/subscribed/read"),
    create: require("./v1/subscribed/create"),
    update: require("./v1/subscribed/update"),
    delete: require("./v1/subscribed/delete"),
    index:   require("./v1/subscribed/index"),
}

module.exports = { v1: { subscribers, channels, subscribed } }