const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');
require('mongoose-type-email');

const Schema = mongoose.Schema;

const cartSchema = mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    },
    quantity: {
        type: Number,
        required: true,
    },
}, { _id: false });

const OrderSchema = new Schema({
    customerName: {
        type: String,
        required: true,
    },
    email: {
        type: mongoose.SchemaTypes.Email,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    postalCode: {
        type: Number,
        required: true,
    },
    cart: [cartSchema],
    paymentMethod: {
        type: String,
        enum: [
            'PREVODOM',
            'DOBIERKA',
        ],
        default: 'DOBIERKA',
    },
    status: {
        type: String,
        enum: [
            'PENDING',
            'PROCESSING',
            'COMPLETE',
        ],
        default: 'PENDING',
    },
    delivery: {
        type: String,
        enum: [
            'TOPTRANS',
            'NONE',
        ],
        required: true,
    },
    note: {
        type: String,
        required: false,
    },
}, { timestamps: true, versionKey: false });

OrderSchema.plugin(idValidator);

module.exports = Order = mongoose.model('Order', OrderSchema);