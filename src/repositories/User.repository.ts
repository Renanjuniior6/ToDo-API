import { connection } from "../database/connection";
import { User } from "../types/Users";
import { v4 } from "uuid";

export class UserRepository {
    async findByEmail(email: string): Promise<User | null> {
       const [rows]: any = await connection.query("SELECT * FROM users WHERE id = ?", [email]);

       return rows[0] || null;
        
    }

    async create(user: User) {
        await connection.query(
            "INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)", 
            [user.id, user.name, user.email, user.password]
        );
    }

}