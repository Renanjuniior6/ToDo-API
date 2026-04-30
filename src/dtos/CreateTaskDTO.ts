import { z } from 'zod'

export const createTaskSchema = z.object({
    title: z
    .string()
    .min(3, "Título muito curto")
    .max(255, "Título muito longo")
});

export type CreateTaskDTO = z.infer<typeof createTaskSchema>