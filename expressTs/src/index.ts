import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { loggerMiddleware } from './loggerMiddleware';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3333;

// Escolhe o formato de log com base no .env
const logFormat = process.env.LOG_FORMAT === 'complete' ? 'complete' : 'simple';
app.use(loggerMiddleware(logFormat));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world com logger!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
