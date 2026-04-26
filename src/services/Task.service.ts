import { TaskRepository } from "../repositories/Task.repository";
import { Task } from "../types/Task";

const repository = new TaskRepository;

export class TaskService {
    async listTasks(): Promise<Task[]> {
        return repository.findAll();
    }    

    async create(title: string) {
        if(!title || title.trim() === '') {
            throw new Error("Título é obrigatório");
        }

        return await repository.create(title);
    }
}