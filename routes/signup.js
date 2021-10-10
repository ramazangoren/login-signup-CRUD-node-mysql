const express = require('express');
const save = require('../controllers/save')
const router = express.Router();

router.post('/sign/register', save.register)
router.post('/password/reset', save.update)




module.exports = router;