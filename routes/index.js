const { check, validationResult } = require('express-validator');
var endpointOneRouter = require('./endpoint-1');
var endpointTwoRouter = require('./endpoint-2');
var jwt = require('jsonwebtoken');
var express = require('express');
var router = express.Router();

/**
 * @swagger
 * /:
 *  get:
 *    description: Services Running Status
 *    responses:
 *      '200':
 *        description: Object for services running response. Returns ```message```
 */
router.get('/', async (req, res, next) => {
  res.status(200).json({
    message : "Backend Service Running.",
    timestamp : Date(Date.now()).toString()
  })
}); 

// Wrap in a router.use() for middleware use. 
function generateNewAccessToken(data) {
  return jwt.sign({
    payload : data
  }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '30000s'
  })
}

router.use('/endpoint-1', endpointOneRouter);
router.use('/endpoint-2', endpointTwoRouter);

module.exports = router;
