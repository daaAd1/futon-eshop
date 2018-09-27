const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const Schema = mongoose.Schema;

const typeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
}, { _id: false });

const AttributeSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    options: [typeSchema],
}, { versionKey: false });

AttributeSchema.plugin(idValidator);

module.exports = Attribute = mongoose.model('Attribute', AttributeSchema);