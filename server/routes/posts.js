const express = require('express')
const router = express.Router();

const posts = require('../controllers/posts');

router.get('/',posts.getPosts);
router.post('/',posts.createPost);
router.patch('/:id',posts.updatePost);
router.patch('/:id/likePost',posts.likePost);
router.delete('/:id',posts.deletePost);

module.exports = router;
