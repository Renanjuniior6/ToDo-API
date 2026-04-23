import mysql from 'mysql2/promise';
import dotenv from 'dotenv'

dotenv.config();

export const connection = mysql.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
});

export async function getConnection() {
    try {
        const conn = await connection.getConnection();
        console.log('Banco conectado com sucesso!');
        conn.release();
    } catch (error) {
        console.error('Erro ao conectar ao banco:', error);
        process.exit(1);
    }
}