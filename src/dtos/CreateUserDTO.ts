import { z } from 'zod';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const createUserSchema = z.object({
    name: z.string().min(3),
    email: z.string().refine((value) => emailRegex.test(value), {
    message: 'Email inválido',
  }),
    password: z.string().min(6),
});

export type CreateUserDTO = z.infer<typeof createUserSchema>