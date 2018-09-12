const express = require('express');

const router = express.Router();

// Models
const Type = require('../models/Type');

// @route   GET type
// @desc    Get all types
// @access  Public
router.get('/', (req, res, next) => {
    Type.find()
        .sort({ createdAt: -1 })
        .then((types) => {
            res.status(200).json({
                count: types.length,
                items: types,
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                error: err,
            });
        });
});

// @route   GET type/:id
// @desc    Get type by id
// @access  Public
router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    Type.findById(id)
        .then((type) => {
            if (type) {
                // Type exists, so return it
                res.status(200).json(type);
            } else {
                // Type does not exist
                res.status(404).json({
                    message: 'Type not found',
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

// @route   POST type
// @desc    Create a Type
// @access  Public
router.post('/', (req, res, next) => {
    const newType = new Type({
        name: req.body.name,
    });

    newType.save()
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
                item: newType,
                errors: err,
            });
        });
});

// @route   DELETE type/:id
// @desc    Delete a Type
// @access  Public
router.delete('/:id', (req, res, next) => {

});

// @route   PATCH type/:id
// @desc    Update a Type
// @access  Public
router.patch('/:id', (req, res, next) => {

});

module.exports = router;