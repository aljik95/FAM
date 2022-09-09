
const express = require('express');
const router = express.Router();

const dashboardController = require('../controllers/dashboardController')


//Dashboard
router.get('/',dashboardController.dashboard_index);

module.exports = router;