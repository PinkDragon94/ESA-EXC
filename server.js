const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('./middleware/logger');
// const authenticate = require('./middleware/authenticate');
const errorHandler = require('./middleware/error-handler');

const app = express();

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

// Middleware
app.use(bodyParser.json());
app.use(logger);
// app.use(authenticate);

// Sample data
const sneakers = [
    { id: 1, name: 'Air Max', brand: 'Nike' },
    { id: 2, name: 'Yeezy Boost', brand: 'Adidas' },
    { id: 3, name: 'Chuck Taylor', brand: 'Converse' }
];

const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' }
];

app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const { name, email } = req.body;

    // Find user by ID
    const user = users.find(u => u.id === userId);

    if (user) {
        // Update user data
        user.name = name || user.name;
        user.email = email || user.email;

        res.send(`User with ID ${userId} has been updated.`);
    } else {
        res.status(404).send('User not found.');
    }
});


const comments = [
    { id: 1, user: 'John Doe', text: 'Great product!' },
    { id: 2, user: 'Jane Doe', text: 'Amazing quality!' }
];

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/sneakers', (req, res) => {
    res.render('sneakers', { sneakers });
});

app.get('/users', (req, res) => {
    res.render('users', { users });
});

app.get('/comments', (req, res) => {
    res.render('comments', { comments });
});
app.get('/vote', (req, res) => {
    res.render('vote', { vote });
});

app.post('/submit', (req, res) => {
    // Access the data sent in the request body
    const { name, email } = req.body;
    
    // You can now use this data (e.g., save it to a database, etc.)
    console.log(`Name: ${name}, Email: ${email}`);

    // Send a response back to the client
    res.send(`Received the data: Name - ${name}, Email - ${email}`);
});

app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);

    // Find the index of the user with the given ID
    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex !== -1) {
        // Remove the user from the array
        users.splice(userIndex, 1);

        res.send(`User with ID ${userId} has been deleted.`);
    } else {
        res.status(404).send('User not found.');
    }
});

// Error Handling
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
;





















