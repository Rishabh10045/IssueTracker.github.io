const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.home);


router.use('/project', require('./project'));


router.use('/api', require('./api'));

module.exports = router;