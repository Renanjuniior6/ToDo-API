import { z } from 'zod';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const loginSchema = z.object({
    email: z.string().refine((value) => emailRegex.test(value), {
        message: "E-mail inváido",
    }),
    password: z.string().min(6),
});