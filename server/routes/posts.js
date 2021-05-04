const express = require("express");
const router = express.Router();

const posts = require("../controllers/posts");
const auth = require("../middleware/auth");

router.get("/", posts.getPosts);
router.post("/", auth, posts.createPost);
router.patch("/:id", auth, posts.updatePost);
router.patch("/:id/likePost", auth, posts.likePost);
router.delete("/:id", auth, posts.deletePost);

module.exports = router;
