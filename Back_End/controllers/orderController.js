import Order from '../models/orderModel.js';
import Dish from '../models/dishModel.js';
import mongoose from 'mongoose';

// Function to create an order
export const createOrder = async (req, res) => {
    const { list_of_dish_id, username } = req.body;

    if (!list_of_dish_id || !username) {
        return res.status(400).json({ message: 'Please fill in all fields' });
    }

    if (!Array.isArray(list_of_dish_id) || list_of_dish_id.length === 0) {
        return res.status(400).json({ message: 'The list of dish IDs must be a non-empty array' });
    }

    if (!list_of_dish_id.every(id => mongoose.Types.ObjectId.isValid(id))) {
        return res.status(400).json({ message: 'Invalid dish ID(s) provided' });
    }

    try {
        const newOrder = new Order({ list_id_dish: list_of_dish_id, username, status: 'in_progress' });
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
        const orders = await Order.find({ username })
            .populate('list_id_dish')
            .sort({ createdAt: -1 }); // Orders sorted by creation date

        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving orders', error: err });
    }
};

// Function to get an order by ID
export const getOrderByID = async (req, res) => {
    const { id } = req.params;

    try {
        const order = await Order.findById(id).populate('list_id_dish');
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.json(order);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving the order', error: err.message });
    }
};

// Function to get orders by status
export const getOrdersByState = async (req, res) => {
    const { status, username } = req.params;

    try {
        const orders = await Order.find({ username, status }).populate('list_id_dish');

        if (orders.length === 0) {
            return res.status(404).json({ message: 'No orders found for this status' });
        }

        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving the orders', error: err.message });
    }
};

// Function to update the status of an order
export const updateOrderStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const validStatuses = ['in_progress', 'completed', 'cancelled'];
    if (!validStatuses.includes(status)) {
        return res.status(400).json({ message: 'Invalid status provided' });
    }

    try {
        const order = await Order.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.json(order);
    } catch (err) {
        res.status(500).json({ message: 'Error updating the order', error: err.message });
    }
};
