const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    },
    quantity: {
        type: Number,
        required: true,
    },
    // status: {
    //     type: String,
    //     enum: [
    //         'pending',
    //         'in progress',
    //         'complete',
    //     ],
    //     default: 'pending',
    // },
}, { timestamps: true, versionKey: false });

OrderSchema.plugin(idValidator);

module.exports = Order = mongoose.model('Order', OrderSchema);