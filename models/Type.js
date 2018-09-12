const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TypeSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
}, { timestamps: true, versionKey: false });

module.exports = Type = mongoose.model('Type', TypeSchema);