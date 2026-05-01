import { connection } from '../database/connection';
import { Task } from '../types/Task';

export class TaskRepository {
    async findAll(): Promise<Task[]> {
        const [rows] = await connection.query("SELECT * FROM tasks");
        return rows as Task[]
    }

    async create(id: string, title: string) {
        await connection.query('INSERT INTO tasks (id, title) VALUES (?, ?)', [id, title]);
    }

    async update(id: string, done: boolean) {
        await connection.query('UPDATE tasks SET done = ? WHERE id = ?', [done, id]);
    }

    async delete(id: string) {
        await connection.query('DELETE FROM tasks WHERE id = ?', [id]);
    }
}