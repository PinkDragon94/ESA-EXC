const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => {
  res.render('index'); 
});
router.get('/upload', (req, res) => {
  res.render('upload'); 
});
router.get('/signup', (req, res) => {
  res.render('signup'); 
});
router.get('/users', (req, res) => {
  res.render('users'); y
});

module.exports = router;