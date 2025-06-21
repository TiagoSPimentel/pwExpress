import { Request, Response } from "express";

/**
 * Controller: Responsável por lidar com as requisições das páginas Handlebars.
 */

export const index = (req: Request, res: Response) => {
  res.send('Hello world com logger!');
};

export const hb1 = (req: Request, res: Response) => {
  res.render("main/hb1", {
    mensagem: "Olá, você está aprendendo Express + Handlebars!",
    layout: false,
  });
};

export const hb2 = (req: Request, res: Response) => {
  res.render("main/hb2", {
    poweredByNodejs: true,
    name: "Express",
    type: "Framework",
    layout: false,
  });
};

export const hb3 = (req: Request, res: Response) => {
  const profes = [
    { nome: "David Fernandes", sala: 1238 },
    { nome: "Horácio Fernandes", sala: 1233 },
    { nome: "Edleno Moura", sala: 1236 },
    { nome: "Elaine Harada", sala: 1231 },
  ];
  res.render("main/hb3", { profes, layout: false });
};

export const hb4 = (req: Request, res: Response) => {
  const technologies = [
    { name: "Express", type: "Framework", poweredByNodejs: true },
    { name: "Laravel", type: "Framework", poweredByNodejs: false },
    { name: "React", type: "Library", poweredByNodejs: true },
    { name: "Handlebars", type: "Engine View", poweredByNodejs: true },
    { name: "Django", type: "Framework", poweredByNodejs: false },
    { name: "Docker", type: "Virtualization", poweredByNodejs: false },
    { name: "Sequelize", type: "ORM tool", poweredByNodejs: true },
  ];
  res.render("main/hb4", { technologies, layout: false });
};


export const gerarLorem = (req: Request, res: Response) => {
  const { count } = req.params;
  const numParagrafos = parseInt(count, 10);

  if (isNaN(numParagrafos) || numParagrafos <= 0) {
    return res.status(400).json({ error: 'Parâmetro inválido. Informe um número inteiro positivo.' });
  }

  const loremText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

  const paragrafos = Array(numParagrafos)
    .fill(`<p>${loremText}</p>`)
    .join('\n');

  res.send(paragrafos);
};