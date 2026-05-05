import { createUserSchema } from '../dtos/CreateUserDTO'
import { UserRepository } from '../repositories/User.repository';
import { User } from '../types/Users';
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import { loginSchema } from '../dtos/LoginDTO';
import jwt from 'jsonwebtoken';

const userRepository = new UserRepository;
const JWT_SECRET = process.env.JWT_SECRET || "secret";

export class AuthService {
    async register(data: unknown) {
        const body = createUserSchema.parse(data);

        const userExists: User | null = await userRepository.findByEmail(body.email)
        if(userExists) {
            throw new Error("Usuário já cadastrado!");
        }

        const hashedPassword = await bcrypt.hash(body.password, 10);

        const user = {
            id: uuid(),
            name: body.name,
            email: body.email,
            password: hashedPassword,
            created_at: new Date(),
        };

        await userRepository.create(user);

        return { message: "Usuário criado" }
    }

    async login(data: unknown) {
        const body = loginSchema.parse(data);

        const user = await userRepository.findByEmail(body.email);
        if(!user) {
            throw new Error("Credenciais inválidas");
        }

        const passwordMatch = await bcrypt.compare(body.password, user.password);

        if(!passwordMatch) {
            throw new Error("Credenciais inválidas");
        }

        const token = jwt.sign(
            { userId: user.id },
            JWT_SECRET,
            { expiresIn: '1d' },

        );

        return { token };
    }

    async index(): Promise<User | User[]> {
        return userRepository.index();
    }
}