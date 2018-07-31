const express = require('express');
const router = express.Router();

// Order model
const Order = require('../models/Order');

// @route   GET orders
// @desc    Get all orders
// @access  Public
router.get('/', (req, res, next) => {
    Order.find()
        .sort({ date: -1 })
        .then(orders => res.json(orders));
});

// @route   POST orders
// @desc    Create a Order
// @access  Public
router.post('/', (req, res, next) => {
    const newOrder = new Order({
        name: req.body.name
    });

    newOrder.save().then(Order => res.json(Order));
});

// @route   DELETE orders/:id
// @desc    Delete a Order
// @access  Public
router.delete('/:id', (req, res, next) => {
    Order.findById(req.params.id)
        .then(Order => Order.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;