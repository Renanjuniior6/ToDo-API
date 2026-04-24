import { NextFunction, Request, Response } from "express";
import { TaskService } from "../services/Task.service";

const service = new TaskService;

export class TaskController {
    async index(req: Request, res: Response, next: NextFunction) {
        try {
            const tasks = await service.listTasks();
            return res.status(200).json(tasks);
        } catch (error) {
            next(error);
        }
    }
}