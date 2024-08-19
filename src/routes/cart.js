import { Router } from "express";
import CartController from "../controllers/cart.js";
import { verifyUser } from '../utils/functions.js'
const router = Router();

router.post('/addToCart', verifyUser, CartController.addToCart);


export default router;