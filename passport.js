const passport = require('passport');

const localStrategy = require('passport-local').Strategy;
const User = require('./models/User');

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

passport.use(new localStrategy({
    usernameField:'email'
}, function (email, password, done) {
    User.findOne({
        email: email
    }, function (err, doc) {
        if (err) {
            done(err);
        } else {
            if (doc) {
                // Check if password is correct
                if (doc.comparePassword(password, doc.password)) {
                    // Add user info to session
                    done(null, {
                        email: doc.email,
                        id: doc._id
                    });
                } else done(null, false);
            } else done(null, false);
        }
    });
}));

module.exports = passport;