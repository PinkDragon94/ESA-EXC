import express from 'express';
const router = express.Router();

// Import controllers for sneaker-related logic
import * as sneakerController from '../controllers/sneakerController';

// Get all sneakers in a specific category
router.get('/', sneakerController.getAllSneakers);

// Get a single sneaker by ID
router.get('/:id', sneakerController.getSneakerById);

// Create a new sneaker
router.post('/', sneakerController.createSneaker);

// Update an existing sneaker
router.put('/:id', sneakerController.updateSneaker);

// Delete a sneaker
router.delete('/:id', sneakerController.deleteSneaker);

// Add a vote to a sneaker
router.post('/vote/:id', sneakerController.voteSneaker);

export default router;



