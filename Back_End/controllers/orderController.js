import Order from '../models/orderModel.js';
import Dish from '../models/dishModel.js';

// Function to create an order
export const createOrder = async (req, res) => {
    const { list_id_dish, username, status } = req.body;

    // Check required fields
    if (!list_id_dish || !username) {
        return res.status(400).json({ message: 'Please fill in all fields' });
    }

    if (!Array.isArray(list_id_dish) || list_id_dish.length === 0) {
        return res.status(400).json({ message: 'The list of dish IDs must be a non-empty array' });
    }

    try {
        const newOrder = new Order({ list_id_dish, username, status });
        await newOrder.save();
        res.status(201).json({ message: 'Order created successfully', order: newOrder });
    } catch (err) {
        res.status(500).json({ message: 'Error creating the order', error: err });
    }
};

// Function to get all orders for a username
export const getOrders = async (req, res) => {
    const { username } = req.params;

    try {
        const orders = await Order.find({ username }).populate('list_id_dish');

        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving orders', error: err });
    }
};

// Function to get an order by ID
export const getOrderByID = async (req, res) => {
    const { id } = req.params; // Get the order ID from the route

    try {
        // Search for an order by its ID
        const order = await Order.findById(id);

        // If no order is found
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        // Return the found order
        res.json(order);
    } catch (err) {
        // Handle potential errors
        res.status(500).json({ message: 'Error retrieving the order', error: err.message });
    }
};

// Function to get orders by status
export const getOrdersByState = async (req, res) => {
    const { status, username } = req.params; // Get the status and username from the route parameters

    try {
        // Search for orders based on the status
        const orders = await Order.find({ username, status });

        // If no orders are found for this status
        if (orders.length === 0) {
            return res.status(404).json({ message: 'No orders found for this status' });
        }

        // Return the found orders
        res.json(orders);
    } catch (err) {
        // Handle potential errors
        res.status(500).json({ message: 'Error retrieving the orders', error: err.message });
    }
};

// Function to update the status of a command
export const updateOrderStatus = async (req, res) => {
    const { id } = req.params; // Get the order ID from the route
    const { status } = req.body; // Get the new status from the request body

    if (!status) {
        return res.status(400).json({ message: 'Status is required' });
    }

    try {
        // Search for the order from its id and update the status
        const order = await Order.findByIdAndUpdate(
            id, 
            { status }, 
            { new: true } // Return the updated order
        );

        // If no order is found with the provided ID
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        // Return the updated order
        res.json(order);
    } catch (err) {
        // Handle potential errors
        res.status(500).json({ message: 'Error updating the order', error: err.message });
    }
};