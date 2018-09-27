const express = require('express');

const router = express.Router();

// Models
const Attribute = require('../models/Attribute');

// @route   GET attribute
// @desc    Get all attributes
// @access  Public
router.get('/', (req, res, next) => {
    Attribute.find()
        .sort({ createdAt: -1 })
        .then((attributes) => {
            res.status(200).json({
                count: attributes.length,
                items: attributes,
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                error: err,
            });
        });
});

// @route   GET attribute/:id
// @desc    Get attribute by id
// @access  Public
router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    Attribute.findById(id)
        .then((attribute) => {
            if (attribute) {
                // Attribute exists, so return it
                res.status(200).json(attribute);
            } else {
                // Attribute does not exist
                res.status(404).json({
                    message: 'Attribute not found',
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

// @route   POST attribute
// @desc    Create an Attribute
// @access  Public
router.post('/', (req, res, next) => {
    const newAttribute = new Attribute({
        name: req.body.name,
        type: req.body.type,
        options: req.body.options,
    });

    newAttribute.save()
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
                item: newAttribute,
                errors: err,
            });
        });
});

// @route   DELETE attribute/:id
// @desc    Delete an Attribute
// @access  Public
router.delete('/:id', (req, res, next) => {
    Attribute.findByIdAndDelete(req.params.id)
        .then((response) => {
            if (response) {
                res.status(200).json({
                    status: 'success',
                    item: response,
                    errors: {},
                });
            } else {
                res.status(404).json({
                    message: 'Attribute not found',
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

// @route   PATCH ttribute/:id
// @desc    Update an Attribute
// @access  Public
router.patch('/:id', (req, res, next) => {
    const id = req.params.id;
    const updateObject = req.body;

    Attribute.findOneAndUpdate(
        { _id: id },
        { $set: updateObject },
        { new: true },
        (err, result) => {
            if (result) {
                res.status(200).json(result);
            } else {
                // Product does not exist
                res.status(404).json({
                    message: 'Attribute not found',
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