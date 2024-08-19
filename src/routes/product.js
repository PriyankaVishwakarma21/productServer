import { Router } from "express";
import ProductController from "../controllers/product.js";

const router = Router();

router.post('/save', ProductController.save);
router.get('/', ProductController.allProducts);
router.put('/update/:id', ProductController.updateProduct);

export default router;
