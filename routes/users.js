const express = require('express');
const router = express.Router();

// User model
const User = require('../models/User');

// @route   GET user
// @desc    Get all users
// @access  Public
router.get('/', (req, res, next) => {
    User.find()
        .sort({ date: -1 })
        .then(users => res.json(users));
});

// @route   DELETE user/:id
// @desc    Delete a User
// @access  Public
router.delete('/:id', (req, res, next) => {
    User.findById(req.params.id)
        .then(user => user.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;