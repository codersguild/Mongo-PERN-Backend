const { check, validationResult } = require('express-validator');
var express = require('express');
var router = express.Router();

/**
 * @swagger
 * /endpoint1 :
 *  get:
 *    description: Endpoint 1
 *    responses:
 *      '200':
 *        description: EndPoint-1 Service Running Status
 */
router.get('/', (async (req, res, next) => {
    res.status(200).json({
      message : '[Success] Enpoint-1 Controller.',
      timestamp : Date(Date.now()).toString()
   	});
}));


module.exports = router;
