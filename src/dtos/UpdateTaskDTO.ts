import { z } from 'zod'

export const updateTaskSchema = z.object({
    done: z.boolean()
});

export type UpdateTaskDTO = z.infer<typeof updateTaskSchema>