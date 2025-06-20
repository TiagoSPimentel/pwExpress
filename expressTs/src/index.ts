import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { loggerMiddleware } from './loggerMiddleware';
import loremRouter from './routes/lorem'; // Importação correta

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3333;

const logFormat = process.env.LOG_FORMAT === 'complete' ? 'complete' : 'simple';
app.use(loggerMiddleware(logFormat));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world com logger!');
});

// Aplicando as rotas do lorem
app.use('/lorem', loremRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
