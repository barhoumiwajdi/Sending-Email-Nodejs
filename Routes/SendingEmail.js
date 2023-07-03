const express = require('express');
const { sendemail, sendingHTML } = require('../Controller/SendingEmailController');



const router = express.Router()

router.post('/sendemail', sendemail)
router.post('/sendemailhtml', sendingHTML)



module.exports = router
