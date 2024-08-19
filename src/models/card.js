import mongoose, { mongo } from "mongoose";

const CartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        require: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Product',
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true
    },
    color: {
        type: String,
        require: true

    },
    size: {
        type: String,
        require: true
    },
    quantity: {
        type: Number,
        default: 1
    }
}, {
    timestamps: true
})

const Cart = mongoose.model('Cart', CartSchema);

export default Cart;