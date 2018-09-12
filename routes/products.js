const express = require('express');
const multer = require('multer');
const fs = require('fs');

// Experimenting with some shit
// const path = require('path');
// const crypto = require('crypto');

// Saving files into file system
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
        // Experimenting with some shit
        // const id = crypto.randomBytes(16).toString('hex');
        cb(null, file.originalname);
    },
});
// Rules for uploaded files
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5,
    },
    fileFilter: fileFilter,
});

const router = express.Router();

// Product model
const Product = require('../models/Product');

// @route   GET product
// @desc    Get all products
// @access  Public
router.get('/', (req, res, next) => {
    Product.find()
        .sort({ createdAt: -1 })
        .then((products) => {
            res.status(200).json({
                count: products.length,
                items: products,
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                error: err,
            });
        });
});

// @route   GET product/:id
// @desc    Get product by id
// @access  Public
router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    Product.findById(id)
        .then((product) => {
            if (product) {
                // Product exists, so return it
                res.status(200).json(product);
            } else {
                // Product does not exist
                res.status(404).json({
                    message: 'Product not found',
                    code: 404,
                });
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                error: err,
            });
        });
});

// @route   POST product
// @desc    Create a Product
// @access  Public
router.post('/', upload.array('images'), (req, res, next) => {
    const imagePaths = [];
    if (req.files) {
        req.files.forEach((element) => {
            imagePaths.push(element.path);
        });
    }
    req.body.images = imagePaths;

    const newProduct = new Product(req.body);

    newProduct.save()
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
                item: newProduct,
                errors: err.errors,
            });
        });
});

// @route   DELETE product/:id
// @desc    Delete a Product
// @access  Public
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    Product.findById(id)
        .then((product) => {
            if (product) {
                // Product exists, so remove it

                // // Remove images
                // product.images.forEach((element) => {
                //     fs.unlink(element, (err) => {
                //         if (err) throw err;
                //     });
                // });
                product.remove().then(
                    () => res.status(200).json(product),
                );
            } else {
                // Product does not exist
                res.status(404).json({
                    message: 'Product not found',
                    code: 404,
                });
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                error: err,
            });
        });
});

// @route   PATCH product/:id
// @desc    Update a Product
// @access  Public
router.patch('/:id', upload.array('images'), (req, res, next) => {
    const id = req.params.id;
    const updateObject = req.body;

    const imagePaths = [];
    req.files.forEach((element) => {
        imagePaths.push(element.path);
    });
    updateObject.images = imagePaths;

    Product.findOneAndUpdate(
        { _id: id },
        { $set: updateObject },
        { new: true },
        (err, result) => {
            if (result) {
                res.status(200).json(result);
            } else {
                // Product does not exist
                res.status(404).json({
                    message: 'Product not found',
                    code: 404,
                });
            }
        },
    ).catch((err) => {
        console.log(err);
        res.status(500).json({
            error: err,
        });
    });
});

module.exports = router;