const express = require('express');
const passport = require('passport');

const router = express.Router();

// User model
const User = require('../models/User');

router.get('/profile', function (req, res) {
    res.send(req.session);
});

router.post('/login', passport.authenticate('local'), function (req, res) {
    res.send(req.session);
});

router.get('/logout', function (req, res) {
    req.logout();
    res.send(req.session);
});

router.post('/signup', function (req, res) {

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({
        email: email
    }, function (err, doc) {
        if (err) {
            res.status(500).send('Error occured');
        } else {
            if (doc) {
                res.status(500).send('E-mail already exists');
            } else {
                var record = new User();
                record.email = email;
                record.password = record.hashPassword(password);
                record.save(function (err, user) {
                    if (err) {
                        res.status(500).send('DB error');
                    } else {
                        res.json(user);
                    }
                });
            }
        }
    });
});

module.exports = router;