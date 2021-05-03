const express = require('express');
const router = express.Router();

const users = require('../controllers/user');

router.post('/signin', users.signin);
router.post('/signup', users.signup);

module.exports = router;