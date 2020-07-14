//we require express module here
const express = require('express');
//creating our custom router
const router = express.Router();
//requiring our controller module here
const controller = require('./../controllers/controllers');

//1st route - /api/hello
router.route('/hello').get(controller.sayHello);
//2nd route - /api/timestamp
router.route('/timestamp').get(controller.showBaseTime);
//3rd route - /api/timestamp/:date_string
router.route('/timestamp/:date_string?').get(controller.showUserTime);

module.exports = router;
