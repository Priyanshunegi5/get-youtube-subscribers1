const router = require("express").Router()
const apis = require("./../api/endpoints")

/////////////////////////////////////////////////////////////////////////////
// Channel Crude Endpoints version: (V1)
/////////////////////////////////////////////////////////////////////////////
/**
 * The endpoint for reading all subscriber from channel.
 * 
 * @auth none
 * @method post
 * @access public
 * @url protocol://domain.tld/api/v1/channels
 */
router.get("/channels",
    apis.v1.channels.index
);

module.exports = { v1: router }