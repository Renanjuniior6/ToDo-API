import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

export function errorMiddleware(error: any, req: Request, res: Response, next: NextFunction) {

    if(error instanceof ZodError) {
        res.status(400).json({
            error: "Dados inválidos",
            details: error.issues
        });
    }
    console.error(error);

    return res.status(400).json({
        error: error.message || "Erro interno"
    });
}