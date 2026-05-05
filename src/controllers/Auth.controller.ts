import { NextFunction, Request, Response } from "express";
import { AuthService } from "../services/Auth.service";

const service = new AuthService();

export class AuthController {
    async register(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await service.register(req.body);
            return res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    }

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await service.login(req.body);
            return res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }

    async index(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await service.index();
            return res.status(200).json(result);
        } catch (error) {
            next(error)
        }
    }
}