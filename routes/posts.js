const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// gets back all the posts
router.get('/', async (req, res) => {
  try {
    const posts = await post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// Add more routes to post
// router.get('/specific', (req, res) => {
//   res.send('We are at specific');
// });

// submits the posts
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description.description,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//specific post
router.get('/:postId', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete a post
router.delete('/:postId', async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//update a post
router.patch('/:postId', async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
