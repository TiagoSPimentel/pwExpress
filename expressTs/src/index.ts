import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { create } from 'express-handlebars';
import { loggerMiddleware } from './middlewares/loggerMiddleware';

import mainRoutes from './routes/mainRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3333;

// Configuração do Handlebars
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

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Middleware de logger
const logFormat = process.env.LOG_FORMAT === 'complete' ? 'complete' : 'simple';
app.use(loggerMiddleware(logFormat));


// Rotas externas
app.use('/', mainRoutes);
app.use('/hbs', mainRoutes);  // ← Aqui está usando as rotas novas com controller separado

// Start do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

//http://localhost:3333/hbs/hb3 ==> para acessar