const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static('public'));

// Parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/post', (req, res) => {
    res.render('post');
});

app.get('/signup', (req, res) => {
    res.render('signup');
});

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    // Fetch user data based on userId and pass it to the template
    res.render('user', { userId });
});

app.get('/users', (req, res) => {
    // Fetch a list of users and pass it to the template
    const users = [{ name: 'John Doe' }, { name: 'Jane Smith' }];
    res.render('users', { users });
});

// 404 route (keep this as the last route)
app.use((req, res) => {
    res.status(404).render('404');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});





















