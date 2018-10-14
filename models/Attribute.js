const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const OptionSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

const AttributeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: ObjectId,
        ref: 'Type',
        required: true,
    },
    options: [OptionSchema],
}, { versionKey: false });

AttributeSchema.plugin(idValidator);

module.exports = Option = mongoose.model('Option', OptionSchema);
module.exports = Attribute = mongoose.model('Attribute', AttributeSchema);