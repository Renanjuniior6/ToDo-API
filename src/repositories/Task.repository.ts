import { connection } from '../database/connection';
import { Task } from '../types/Task';

export class TaskRepository {
    async findAll(): Promise<Task[]> {
        const [rows] = await connection.query("SELECT * FROM tasks")
        return rows as Task[]
    }

    async create() {

    }

    async update() {

    }

    async delete() {

    }
}