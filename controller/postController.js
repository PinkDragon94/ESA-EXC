const posts = require('../models/posts');

exports.getAllPosts = (req, res) => {
    res.json(posts);
};

exports.getPostById = (req, res) => {
    const post = posts.find(p => p.id == req.params.id);
    if (post) {
        res.json(post);
    } else {
        res.status(404).send('Post not found');
    }
};

exports.createPost = (req, res) => {
    const newPost = {
        id: posts.length + 1,
        userId: req.body.userId,
        title: req.body.title,
        content: req.body.content
    };
    posts.push(newPost);
    res.json(newPost);
};
