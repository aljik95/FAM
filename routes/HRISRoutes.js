
const express = require('express');
const router = express.Router();

const HRISController = require('../controllers/HRISController')


//Dashboard
router.get('/Employee201',HRISController.employee_list);
router.get('/Employee201',HRISController.employee_details);


module.exports = router;