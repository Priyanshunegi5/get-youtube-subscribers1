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

module.exports = { v1: { channels } }