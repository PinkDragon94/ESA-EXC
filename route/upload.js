const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

// Set up storage and file naming
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

router.post('/upload', upload.single('sneaker-image'), (req, res) => {
    const sneakerName = req.body['sneaker-name'];
    const description = req.body['description'];
    const image = req.file;

    // Save data to the database or process it as needed
    console.log('Sneaker Name:', sneakerName);
    console.log('Description:', description);
    console.log('Image Path:', image.path);

    res.json({ message: 'Sneaker uploaded successfully' });
});

module.exports = router;
