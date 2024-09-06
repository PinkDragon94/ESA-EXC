const comments = require('../models/comments');

exports.getAllComments = (req, res) => {
    res.json(comments);
};

exports.getCommentsByPostId = (req, res) => {
    const postComments = comments.filter(c => c.postId == req.params.id);
    res.json(postComments);
};

exports.createComment = (req, res) => {
    const newComment = {
        id: comments.length + 1,
        postId: req.body.postId,
        userId: req.body.userId,
        content: req.body.content
    };
    comments.push(newComment);
    res.json(newComment);
};
