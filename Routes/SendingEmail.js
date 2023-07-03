const express = require('express');
const { sendemail, sendingHTML, sendingattachement } = require('../Controller/SendingEmailController');



const router = express.Router()

router.post('/sendemail', sendemail)
router.post('/sendemailhtml', sendingHTML)
router.post('/sendingemailattachement', sendingattachement)



module.exports = router
