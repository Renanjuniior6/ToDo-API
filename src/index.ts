import express from 'express';
import { getConnection } from './database/connection';

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
    return res.json({ status: 'ok'});
})

async function startServer() {
    await getConnection();

    app.listen(3000, () => {
        console.log('Servidor rodando na porta 3000');
    });
}

startServer();

