import { Request, Response } from 'express';
import dotenv from 'dotenv';
import { loggerMiddleware } from './loggerMiddleware';
import loremRouter from './routes/lorem';
import hbRouter from './routes/hb';  
import express from 'express';
import { create } from 'express-handlebars';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3333;

const hbs = create({
  helpers: {
    nodeTechnologies: function (technologies: any[]) {
      if (!Array.isArray(technologies)) {
        return [];
      }
      return technologies.filter(tech => tech.poweredByNodejs);
    }
  }
});

// Configuração do Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '..', 'views'));

const logFormat = process.env.LOG_FORMAT === 'complete' ? 'complete' : 'simple';
app.use(loggerMiddleware(logFormat));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world com logger!');
});

// Rotas externas
app.use('/lorem', loremRouter);
app.use('/hbs', hbRouter);//http://localhost:3333/hbs/hbs3 ==> para acessar
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
