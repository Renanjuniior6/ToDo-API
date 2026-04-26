import { Router } from "express";
import { TaskController } from "../controllers/Task.controller";

const router = Router();
const controller = new TaskController;

router.get('/tasks', controller.index);
router.post('/tasks', controller.create);
router.put('/tasks/:id', controller.update);
router.delete('/tasks/:id', controller.delete);

export default router;