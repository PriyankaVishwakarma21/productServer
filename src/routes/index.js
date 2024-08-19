import { Router } from "express";
import products from './product.js';
import users from './user.js';
import cart from './cart.js';

const routers = Router();

routers.use('/products', products);
routers.use('/users', users);
routers.use('/cart', cart);

export default routers;

