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

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const id = await service.create(req.body);

            return res.status(201).json({message: "Task criada", id});

        } catch (error) {
            next(error);
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            await service.update(req.params.id, req.body);

            return res.status(200).json({mensagem: "Task atualizada!"});
        } catch(error) {
            next(error);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            await service.delete(req.params.id);

            return res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}