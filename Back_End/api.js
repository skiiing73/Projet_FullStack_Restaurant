// Import necessary modules
const { user,password,address } = require('../config.js');
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const bodyParser = require('body-parser');
const path = require('path');

// Import des routes
const dishRoutes = require('./routes/dishRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3000;

// MongoDB URI with authentication
const uri = `mongodb://${user}:${password}@${address}:27017/?authMechanism=DEFAULT&authSource=admin`;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connexion à MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// Utilisation des routes
app.use('/dish', dishRoutes);
app.use('/user', userRoutes);







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
