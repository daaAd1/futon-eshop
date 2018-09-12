const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    descShort: {
        type: String,
        required: true,
    },
    descLong: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        enum: [
            'FUTON',
            'SOFA',
            'BED',
            'ADD-ON',
        ],
        required: true,
    },
    subCategory: {
        type: String,
        required: true,
    },
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Type',
        required: true,
    },
    images: {
        type: Array,
        required: false,
    },
    active: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true, versionKey: false });

ProductSchema.plugin(idValidator);

module.exports = Product = mongoose.model('Product', ProductSchema);
