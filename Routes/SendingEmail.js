const express = require('express');
const { sendemail } = require('../Controller/SendingEmailController');



const router = express.Router()

router.post('/sendemail', sendemail)



module.exports = router
