const { check, validationResult } = require('express-validator');
var express = require('express');
var router = express.Router();

/**
 * @swagger
 * /endpoint2 :
 *  get:
 *    description: Team Router
 *    responses:
 *      '200':
 *        description: Team Services Running Status
 */
router.get('/', (async (req, res, next) => {
    res.status(200).json({
      message : '[Success] Enpoint-2 Controller.',
      timestamp : Date(Date.now()).toString()
   	});
}));


module.exports = router;
