import { NextFunction, Request, Response } from "express";

export function errorMiddleware(error: any, req: Request, res: Response, next: NextFunction) {
    console.error(error);

    return res.status(400).json({
        error: error.message || "Erro interno"
    });
}