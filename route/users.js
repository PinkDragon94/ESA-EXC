import express from 'express';
const router = express.Router();
import * as userController from '../controllers/userController';  // Update to correct user controller

// Get all users
router.get('/', userController.getAllUsers);

// Get a single user by ID
router.get('/:id', userController.getUserById);

// Create a new user
router.post('/', userController.createUser);

export default router;
