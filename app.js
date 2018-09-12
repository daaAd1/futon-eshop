const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const morgan = require('morgan');

const mongoURI = require('./config/keys').mongoURI;

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Import routes
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');
const typeRoutes = require('./routes/types');
const attributeRoutes = require('./routes/attributes');

// Handeling CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Origin, X-Request-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Headers', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    return next();
});

// Use routes
app.use('/product', productRoutes);
app.use('/order', orderRoutes);
app.use('/type', typeRoutes);
app.use('/attribute', attributeRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
            code: error.status,
        },
    });
});

module.exports = app;