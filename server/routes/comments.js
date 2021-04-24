const express = require('express');
const router = express.Router();

const comments = require('../controllers/comments');

router.get('/',comments.getComments);
router.post('/',comments.createComment)

module.exports = router;