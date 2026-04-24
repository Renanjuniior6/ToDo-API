import { TaskRepository } from "../repositories/Task.repository";
import { Task } from "../types/Task";

const repository = new TaskRepository;

export class TaskService {
    async listTasks(): Promise<Task[]> {
        return repository.findAll();
    }    
}