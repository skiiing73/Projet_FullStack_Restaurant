// Import necessary modules
const { user,password,address } = require('../config.js');
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;


// MongoDB URI with authentication
const uri = `mongodb://${user}:${password}@${address}:27017/?authMechanism=DEFAULT&authSource=admin`;

// Initialize MongoDB client
const client = new MongoClient(uri);

// Database and collection variables
let messagesCollection;

// Connect to MongoDB
async function connectToMongo() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        db = client.db('borne_restaurant'); // Use your desired database
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
    }
}

connectToMongo();

// Middleware
app.use(bodyParser.urlencoded({ extended: true })); // Parse form data
// Use the express.json() middleware to parse JSON request bodies
app.use(express.json());
app.use(express.static('public')); // Serve static files

// Routes
// http://localhost:3000/add_message?message=bonjour+thomas
// POST: Add a new message
app.post('/add_dish', async (req, res) => {
    const Collection = db.collection('dish');
    const newDish = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        type: req.body.type
    };

    try {
        await Collection.insertOne(newDish);
        res.redirect('/'); // Redirect back to the main page
    } catch (err) {
        res.status(500).send('Error adding message');
    }
});

// Serve the frontend page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
