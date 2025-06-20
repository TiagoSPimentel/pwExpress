import express, { Request, Response } from 'express';
const router = express.Router();

// Rota /hb/hbs1
router.get('/hbs1', (req: Request, res: Response) => {
  res.render('hbs1', {
    mensagem: 'Olá, você está aprendendo Express + Handlebars!',
    layout: false,
  });
});

// Rota /hb/hbs2
router.get('/hbs2', (req: Request, res: Response) => {
  res.render('hbs2', {
    poweredByNodejs: true,
    name: 'Express',
    type: 'Framework',
    layout: false,
  });
});

// Rota /hb/hbs3
router.get('/hbs3', (req: Request, res: Response) => {
  const profes = [
    { nome: 'David Fernandes', sala: 1238 },
    { nome: 'Horácio Fernandes', sala: 1233 },
    { nome: 'Edleno Moura', sala: 1236 },
    { nome: 'Elaine Harada', sala: 1231 }
  ];
  res.render('hbs3', { profes, layout: false });
});

export default router;
