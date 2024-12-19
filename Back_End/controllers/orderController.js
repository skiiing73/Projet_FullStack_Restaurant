import Order from '../models/orderModel.js';

// Function to create an order
export const createOrder = async (req, res) => {
    const { list_of_dish_id, username } = req.body;

    // Check required fields
    if (!list_of_dish_id || !username) {
        return res.status(400).json({ message: 'Please fill in all fields' });
    }

    if (!Array.isArray(list_of_dish_id) || list_of_dish_id.length === 0) {
        return res.status(400).json({ message: 'The list of dish IDs must be a non-empty array' });
    }

    try {
        const newOrder = new Order({ list_of_dish_id, username });
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
        const orders = await Order.find({ username }).populate('dish');

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
    const { state, username } = req.params; // Get the state and username from the route parameters

    try {
        // Search for orders based on the state
        const orders = await Order.find({ username, state });

        // If no orders are found for this state
        if (orders.length === 0) {
            return res.status(404).json({ message: 'No orders found for this state' });
        }

        // Return the found orders
        res.json(orders);
    } catch (err) {
        // Handle potential errors
        res.status(500).json({ message: 'Error retrieving the orders', error: err.message });
    }
};