import express from 'express';

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
    return res.json({ status: 'ok'});
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});