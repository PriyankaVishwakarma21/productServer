import CartServices from "../services/cart.js";

export default class CartController {
    static addToCart = async (req, res) => {
        try {
            const alreadtInCart = await CartServices.alreadyInCart(req.body.productId, req.user._id);
            if (alreadtInCart) return res.status(200).json({ status: 200, message: 'Already in Cart' });
            const data = await CartServices.addToCart({ ...req.body, userId: req.user._id });

            if (data) {
                res.status(200).json({ status: 200, message: 'Product Added Successfully', data });
            }

        } catch (error) {
            res.status(500).json({ status: 500, message: 'Something went wrong' });

        }
    }
}