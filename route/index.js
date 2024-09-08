const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => {
  res.render('index'); // Render 'index.ejs' from 'views' directory
});

module.exports = router;