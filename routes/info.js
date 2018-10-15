const express = require('express');

const router = express.Router();

// Models
const Info = require('../models/Info');

// @route   GET info
// @desc    Get all info
// @access  Public
router.get('/', (req, res, next) => {
    Info.findOne()
        .then((info) => {
            res.status(200).json({
                info,
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                error: err,
            });
        });
});

// @route   POST info
// @desc    Create Info
// @access  Public
router.post('/', (req, res, next) => {
    const newInfo = new Info({
        contact: req.body.contact,
        showroom: req.body.showroom,
        delivery: req.body.delivery,
        faq: req.body.faq,
        businessTerms: req.body.businessTerms,
    });

    newInfo.save()
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
                item: newInfo,
                errors: err,
            });
        });
});


// @route   DELETE info
// @desc    Delete Info
// @access  Public
router.delete('/', (req, res, next) => {
    Info.findByIdAndDelete('MAIN')
        .then((response) => {
            if (response) {
                res.status(200).json({
                    status: 'success',
                    item: response,
                    errors: {},
                });
            } else {
                res.status(404).json({
                    message: 'Info not found',
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

// @route   PATCH info
// @desc    Update Info
// @access  Public
router.patch('/', (req, res, next) => {
    const updateObject = req.body;

    Info.findOneAndUpdate(
        { _id: 'MAIN' },
        { $set: updateObject },
        { new: true },
        (err, result) => {
            if (result) {
                res.status(200).json(result);
            } else {
                // Info does not exist
                res.status(404).json({
                    message: 'Info not found',
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