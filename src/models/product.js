import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    color: {
        type: [String],
        require: true

    },
    size: {
        type: [String],
        require: true
    },
}, {
    timestamps: true
})

const Product = mongoose.model('Product', ProductSchema);

export default Product;