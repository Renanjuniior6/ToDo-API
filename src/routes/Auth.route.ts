import { Router } from 'express';
import { AuthController } from '../controllers/Auth.controller';

const router = Router();
const controller = new AuthController();

router.post("/register", controller.register);
router.post("/login", controller.login);
router.get("/users", controller.index);

export default router;
