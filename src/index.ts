import express from 'express';
import { getConnection } from './database/connection';
import TaskRoutes from './routes/Task.route';
import AuthRoutes from './routes/Auth.route';
import { errorMiddleware } from './middlewares/error.middleware';

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
    return res.json({ status: 'ok'});
})

app.use(AuthRoutes);
app.use(TaskRoutes);
app.use(errorMiddleware);

async function startServer() {
    await getConnection();

    app.listen(3000, () => {
        console.log('Servidor rodando na porta 3000');
    });
}

startServer();

