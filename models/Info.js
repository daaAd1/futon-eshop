const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const InfoSchema = new Schema({
    _id: {
        type: String,
        default: 'MAIN',
    },
    contact: {
        type: String,
    },
    showroom: {
        type: String,
    },
    delivery: {
        type: String,
    },
    faq: {
        type: String,
    },
    businessTerms: {
        type: String,
    },
}, { timestamps: true, versionKey: false });

module.exports = Info = mongoose.model('Info', InfoSchema);