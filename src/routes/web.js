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

/**
 * The endpoint for creating a channel.
 * 
 * @auth none
 * @method post
 * @access public
 * @url protocol://domain.tld/api/v1/channels/create
 */
router.post("/channels/create",
    apis.v1.channels.create
);

/**
 * The endpoint for reading all channels.
 * 
 * @auth none
 * @method get
 * @access public
 * @url protocol://domain.tld/api/v1/channels/all
 */
router.get("/channels/all",
    apis.v1.channels.all
);

module.exports = { v1: router }