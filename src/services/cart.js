import Cart from "../models/card.js";

export default class CartServices {
    static addToCart = async (cart) => {
        const cartData = new Cart(cart);
        const data = await cartData.save();
        return data;
    }

    static alreadyInCart = async (productId, userId) => {
        return await Cart.findOne({ userId, productId });
    }
}