const express = require('express');
const path = require('path');

const app = express();

app.listen(4000, () => {
    console.log(`Server running at http://localhost:4000/`);
});

// Sample posts array
let posts = [
    { id: 1, title: "Post 1", content: "This is post 1" },
    { id: 2, title: "Post 2", content: "This is post 2" },
    { id: 3, title: "Post 3", content: "This is post 3" },
];

// GET all posts with an optional limit query parameter
app.get('/api/posts', (req, res) => {
    const limit = parseInt(req.query.limit);

    if (!isNaN(limit) && limit > 0) {
        res.status(200).json(posts.slice(0, limit)); // 200 OK
    } else {
        res.status(200).json(posts); // 200 OK
    }
});

// GET a single post by ID
app.get('/api/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        res.status(404).json({ message: "Post not found" }); // 404 Not Found
    } else {
        res.status(200).json(post); // 200 OK
    }
});

// Optional: Serve static files (if needed)
app.use(express.static(path.join(__dirname, 'public')));

// Serve the main index.html file (if static folder is configured)
app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'public', 'index.html')); // 200 OK
});

// Serve the about page (if static folder is configured)
app.get('/about', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'public', 'about.html')); // 200 OK
});

// Handle invalid routes
app.use((req, res) => {
    res.status(404).json({ message: "Page not found" }); // 404 Not Found
});