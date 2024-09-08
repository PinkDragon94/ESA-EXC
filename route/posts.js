import express from 'express';
const router = express.Router();
import * as postController from '../controllers/postController';

// Get all posts
router.get('/', postController.getAllPosts);

// Get a single post by ID
router.get('/:id', postController.getPostById);

// Create a new post
router.post('/', postController.createPost);

export default router;
