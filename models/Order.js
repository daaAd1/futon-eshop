const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');
require('mongoose-type-email');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

// Validates if id of selectedOption belongs to given attribute
async function belongsToAttribute(value) {
    const attribute = await Attribute.findById(this.attribute);
    return !attribute.options.every(element => value.toString() !== element.id.toString());
}

const CartSchema = new Schema({
    product: {
        type: ObjectId,
        ref: 'Product',
    },
    quantity: {
        type: Number,
        required: true,
    },
    attributes: [{
        _id: false,
        attribute: {
            type: ObjectId,
            ref: 'Attribute',
        },
        selectedOption: {
            type: ObjectId,
            validate: {
                validator: belongsToAttribute,
                message: props => `Given attribute doesn't contain selected option: ${props.value}!`,
            },
        },
    }],
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
        type: String,
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
    cart: [CartSchema],
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