import ProductServices from "../services/product.js";

export default class ProductController {

    static save = async (req, res) => {
        try {
            const data = await ProductServices.save(req.body);
            if (data) {
                return res.status(200).json({ status: 200, message: 'Save Successfully', data });
            }
        } catch (error) {
            return res.status(500).json({ status: 500, message: 'Something went wrong.' });
        }
    }

    static allProducts = async (req, res) => {
        try {
            const data = await ProductServices.getAllProduct();
            if (data.length === 0) return res.status(404).json({ status: 404, message: 'No Products' });
            if (data.length > 0) {
                return res.status(200).json({ status: 200, message: 'All Products', data });
            }

        } catch (error) {
            return res.status(500).json({ status: 500, message: 'Something went wrong.' });
        }
    }

    static updateProduct = async (req, res) => {
        try {
            const product = await ProductServices.getSingleProduct(req.params.id);

            if (!product) return res.status(200).json({ status: 200, message: 'Product Not Found' });

            const data = await ProductServices.updateSingleProduct(req.params.id, req.body);

            if (data) {
                return res.status(200).json({ status: 200, message: 'Product updated successfully', data });
            }

        } catch (error) {
            return res.status(500).json({ status: 500, message: 'Something went wrong.' });
        }
    }

}