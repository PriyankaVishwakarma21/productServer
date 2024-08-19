import Product from "../models/product.js";


export default class ProductServices {
    static save = async (productData) => {
        try {
            const product = new Product(productData);
            const data = await product.save();
            return data;
        } catch (error) {
            throw new Error(error);
        }
    }

    static getAllProduct = async () => {
        return await Product.find();
    }

    static getSingleProduct = async (id) => {
        return await Product.findById(id);
    }

    static updateSingleProduct = async (id, data) => {
        const productData = await Product.findByIdAndUpdate(id, data, { new: true });
        return productData;
    }
}