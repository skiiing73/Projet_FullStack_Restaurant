import express from 'express';
import {
    createOrder,
    getOrders,
    getOrderByID,
    getOrdersByState,
} from '../controllers/orderController.js';

const router = express.Router();

// Route to create an order
router.post('/create', createOrder);

// Route to get all orders
router.get('/getAll/:username', getOrders);

// Route to get an order by ID
router.get('/getByID/:id', getOrderByID);

// Route to get all orders by state and username (e.g., 'in_progress', 'completed')
router.get('/getByState/:state/:username', getOrdersByState);

export default router;