// Create web server
// http://localhost:8080
// http://localhost:8080/comments
// http://localhost:8080/comments/1
// http://localhost:8080/comments/2

// Load modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create express app
const app = express();

// Enable CORS
app.use(cors());

// Use body parser
app.use(bodyParser.json());

// Array holding comments
const comments = [
    { id: 1, author: 'John', text: 'Hello' },
    { id: 2, author: 'Peter', text: 'Hi' }
];

// Create route handlers
app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/comments', (req, res) => {
    res.send(comments);
});

app.get('/comments/:id', (req, res) => {
    const id = Number(req.params.id);
    const comment = comments.find(comment => comment.id === id);
    res.send(comment);
});

app.post('/comments', (req, res) => {
    const comment = req.body;
    comment.id = comments.length + 1;
    comments.push(comment);
    res.send(comment);
});

// Start server
app.listen(8080, () => console.log('Server started'));