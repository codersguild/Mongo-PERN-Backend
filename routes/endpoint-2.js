const { check, validationResult } = require('express-validator');
var express = require('express');
var router = express.Router();

/**
 * @swagger
 * /endpoint2 :
 *  get:
 *    description: EndPoint 2 
 *    responses:
 *      '200':
 *        description: EndPoint-2 Service Running Status
 */
router.get('/', (async (req, res, next) => {
    res.status(200).json({
      message : '[Success] Enpoint-2 Controller.',
      timestamp : Date(Date.now()).toString()
   	});
}));


module.exports = router;
