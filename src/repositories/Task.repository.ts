import { connection } from '../database/connection';
import { Task } from '../types/Task';

export class TaskRepository {
    async findAll(): Promise<Task[]> {
        const [rows] = await connection.query("SELECT * FROM tasks");
        return rows as Task[]
    }

    async create(title: string) {
        const [result]: any = await connection.query('INSERT INTO tasks (title) VALUES (?)', [title]);

        return result.insertId;
    }

    async update(id: number, done: boolean) {
        await connection.query('UPDATE tasks SET done = ? WHERE id = ?', [done, id]);
    }

    async delete(id: number) {
        await connection.query('DELETE FROM tasks WHERE id = ?', [id]);
    }
}