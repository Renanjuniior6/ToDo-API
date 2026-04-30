import { v4 as uuid } from 'uuid';
import { TaskRepository } from "../repositories/Task.repository";
import { Task } from "../types/Task";
import { createTaskSchema } from '../dtos/CreateTaskDTO';
import { updateTaskSchema } from '../dtos/UpdateTaskDTO';

const repository = new TaskRepository;

export class TaskService {
    async listTasks(): Promise<Task[]> {
        return repository.findAll();
    }    

    async create(data: unknown) {
       const body = createTaskSchema.parse(data);
       const id = uuid();

       await repository.create(id, body.title);

       return id;
    }

    async update(id: string, data: unknown) {
        const body = updateTaskSchema.parse(data)
        
        await repository.update(id, body.done);
    }

    async delete(id: string) {
        await repository.delete(id);
    }
}