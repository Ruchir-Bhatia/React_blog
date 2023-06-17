const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3001;

mongoose.connect('mongodb://localhost/blog-website', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to the database');
});

app.use(express.static('build'));

app.get('/blogs', async (req, res) => {
    try {
        const Blog = mongoose.model('Blog', {
            title: String,
            content: String,
        });

        const blogs = await Blog.find({});
        res.json(blogs);
    } catch (error) {
        console.error('Error fetching blogs:', error);
        res.sendStatus(500);
    }
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
