const express = require('express');
const router = express.Router();
const users = require('../models/users');  // Import the users model

// Get all users
router.get('/', (req, res) => {
    res.json(users);
});

// Get a single user by ID
router.get('/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

// Create a new user
router.post('/', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };
    users.push(newUser);
    res.json(newUser);
});

module.exports = router;

