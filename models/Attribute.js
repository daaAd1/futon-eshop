const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const Schema = mongoose.Schema;

const AttributeSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Type',
        required: true,
    },
    values: Schema.Types.Mixed,
}, { versionKey: false });

AttributeSchema.plugin(idValidator);

module.exports = Attribute = mongoose.model('Attribute', AttributeSchema);