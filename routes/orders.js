const express = require('express');

const router = express.Router();

// Models
const Order = require('../models/Order');
const Product = require('../models/Product');

// @route   GET order
// @desc    Get all orders
// @access  Public
router.get('/', (req, res, next) => {
    Order.find()
        .sort({ createdAt: -1 })
        .populate('product', 'name price type')
        .then((orders) => {
            res.status(200).json({
                count: orders.length,
                items: orders,
            });
        })
        .catch((err) => {
            res.status(500).json({
                error: err,
            });
        });
});

// @route   GET order/:id
// @desc    Get order by id
// @access  Public
router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    Order.findById(id)
        .populate('product', '-createdAt -updatedAt')
        .then((order) => {
            if (order) {
                res.status(200).json(order);
            } else {
                res.status(404).json({
                    message: 'Order not found',
                    code: 404,
                });
            }
        })
        .catch((err) => {
            res.status(500).json({
                error: err,
            });
        });
});

// @route   POST order
// @desc    Create an Order
// @access  Public
router.post('/', (req, res, next) => {
    const newOrder = new Order({
        product: req.body.product,
        quantity: req.body.quantity,
    });

    newOrder.save()
        .then((response) => {
            res.status(201).json({
                status: 'success',
                item: response,
                errors: {},
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                status: 'error',
                item: newOrder,
                errors: err.errors,
            });
        });
});

// @route   DELETE order/:id
// @desc    Delete an Order
// @access  Public
router.delete('/:id', (req, res, next) => {
    Order.findByIdAndDelete(req.params.id)
        .then((response) => {
            if (response) {
                res.status(200).json({
                    status: 'success',
                    item: response,
                    errors: {},
                });
            } else {
                res.status(404).json({
                    message: 'Order not found',
                    code: 404,
                });
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                status: 'error',
                errors: err,
            });
        });
});

module.exports = router;