
const express = require('express');
const router = express.Router();


const add_accountController = require('../controllers/add_accountController')
//add_account
router.get('/',add_accountController.add_index)
 
router.post('/save_user',add_accountController.add_account)

module.exports = router;