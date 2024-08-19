import { Router } from "express";
import UserController from "../controllers/user.js";

const router = Router();

router.post('/create', UserController.create);
router.post('/login', UserController.login)

export default router;