import express from 'express';
const router = express.Router();

import * as commentController from '../controllers/commentController';

// Define routes for comments
router.get('/', commentController.getAllComments);
router.get('/posts/:id', commentController.getCommentsByPostId);
router.post('/', commentController.createComment);

export default router;
