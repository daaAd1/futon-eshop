const express = require('express');
const router = express.Router();

// Product model
const Product = require('../models/Product');

// @route   GET product
// @desc    Get all products
// @access  Public
router.get('/', (req, res, next) => {
    Product.find()
        .sort({ date: -1 })
        .then(products => {
            res.status(200).json(products);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

// @route   GET product/:id
// @desc    Get product by id
// @access  Public
router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    Product.findById(id)
        .then(product => {
            if (product) {
                // Product exists, so return it
                res.status(200).json(product);
            } else {
                // Product does not exist
                res.status(404).json({
                    message: "Product not found",
                    code: 404
                });
            }
        })
        // Internal error
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

// @route   POST product
// @desc    Create a Product
// @access  Public
router.post('/', (req, res, next) => {
    const newProduct = new Product({
        name: req.body.name,
        desc_short: req.body.desc_short,
        desc_long: req.body.desc_long,
        price: req.body.price,
        type: req.body.type,
    });

    newProduct.save()
        .then(product => {
            res.status(201).json(product);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

// @route   DELETE product/:id
// @desc    Delete a Product
// @access  Public
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    Product.findById(id)
        .then(product => {
            if (product) {
                // Product exists, so remove it
                product.remove().then(
                    () => res.status(200).json(product)
                )
            } else {
                // Product does not exist
                res.status(404).json({
                    message: "Product not found",
                    code: 404
                });
            }
        })
        // Internal error
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

// @route   PATCH product/:id
// @desc    Update a Product
// @access  Public
router.patch('/:id', (req, res, next) => {
    const id = req.params.id;
    var updateObject = req.body;

    Product.findOneAndUpdate({_id: id}, {$set: updateObject}, {new: true}, (err, result) => {
        if (result) {
            res.status(200).json(result);
        } else {
            // Product does not exist
            res.status(404).json({
                message: "Product not found",
                code: 404
            });
        }
    });
});

module.exports = router;