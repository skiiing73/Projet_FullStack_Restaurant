// Import MongoDB credentials
import { user, password, address } from './config.js';

// Import necessary modules with ES syntax
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

// Import routes
import dishRoutes from './routes/dishRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
const port = 3000;

// MongoDB URI with authentication
const uri = `mongodb://${user}:${password}@${address}:27017/borne_restaurant?authMechanism=DEFAULT&authSource=admin`;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// Use routes
app.use('/dish', dishRoutes);
app.use('/user', userRoutes);

// POST: Add a new dish
app.post('/add_dish', async (req, res) => {
    const Collection = mongoose.connection.collection('dish');
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
        res.status(500).send('Error adding dish');
    }
});

// Serve the frontend page
app.get('/', (req, res) => {
    res.send('Welcome to the Restaurant API');
});


// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});