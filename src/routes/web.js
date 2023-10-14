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

/**
 * The endpoint for reading a channel.
 * 
 * @auth none
 * @method get
 * @access public
 * @url protocol://domain.tld/api/v1/channels/read/{id}
 */
router.get("/channels/read/:id",
    apis.v1.channels.read
);

/**
 * The endpoint for updating a channel.
 * 
 * @auth none
 * @method patch
 * @access public
 * @url protocol://domain.tld/api/v1/channels/update/{id}
 */
router.patch("/channels/update/:id",
    apis.v1.channels.update
);

/**
 * The endpoint for deleting a channel.
 * 
 * @auth none
 * @method delete
 * @access public
 * @url protocol://domain.tld/api/v1/channels/delete/{id}
 */
router.delete("/channels/delete/:id",
    apis.v1.channels.delete
);

/////////////////////////////////////////////////////////////////////////////
// Subscriber Crude Endpoints version: (V1)
/////////////////////////////////////////////////////////////////////////////
/**
 * The endpoint for creating a subscriber.
 * 
 * @auth none
 * @method post
 * @access public
 * @url protocol://domain.tld/api/v1/subscribers/create
 */
router.post("/subscribers/create",
    apis.v1.subscribers.create
);

module.exports = { v1: router }