const express = require ("express");
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.set('view engine', 'ejs');

app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

app.get('/', (req, res) => {
    res.render('index');
});

app.get("/", function(req, res){
    res.send(`Hello World`);
})

app.listen(port, () => console.log (`Template engine listening port ${port}!`));

//  database (in-memory)
const data = [];

// RESTful API route to get data
app.get('/api/data', (req, res) => {
    res.json(data);
});

// RESTful API route to post data
app.post('/api/data', (req, res) => {
    const { name, email } = req.body;
    const newData = { name, email };
    
    // Add the new data to the  database
    data.push(newData);
    
    res.redirect('/');
});

// RESTful API route to delete data (e.g., based on email)
app.delete('/api/data/:email', (req, res) => {
    const email = req.params.email;
    const index = data.findIndex(entry => entry.email === email);
    
    if (index !== -1) {
        data.splice(index, 1);
        return res.status(200).json({ message: 'Data deleted successfully' });
    }
    
    res.status(404).json({ message: 'Data not found' });
});
function validateData(req, res, next) {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required' });
    }
    next();
}

// Use the middleware for POST requests
app.post('/api/data', validateData, (req, res) => {
    const { name, email } = req.body;
    const newData = { name, email };
    
    data.push(newData);
    
    res.redirect('/');
});
