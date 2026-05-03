import { connection } from "../database/connection";
import { User } from "../types/Users";

export class UserRepository {
    async findByEmail(email: string): Promise<User | null> {
       const [rows]: any = await connection.query("SELECT * FROM users WHERE email = ?", [email]);

       return rows[0] || null;
        
    }

    async index() {
       const [rows]: any = await connection.query("SELECT * FROM users");

       return rows[0] || null
    }

    async create(user: User) {
        await connection.query(
            "INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)", 
            [user.id, user.name, user.email, user.password]
        );
    }

}