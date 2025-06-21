"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gerarLorem = exports.hb4 = exports.hb3 = exports.hb2 = exports.hb1 = exports.index = void 0;
/**
 * Controller: Responsável por lidar com as requisições das páginas Handlebars.
 */
const index = (req, res) => {
    res.send('Hello world com logger!');
};
exports.index = index;
const hb1 = (req, res) => {
    res.render("main/hb1", {
        titulo: "Página HB1",
        mensagem: "Olá, você está aprendendo Express + Handlebars!",
    });
};
exports.hb1 = hb1;
const hb2 = (req, res) => {
    res.render("main/hb2", {
        poweredByNodejs: true,
        name: "Express",
        type: "Framework",
        layout: false,
    });
};
exports.hb2 = hb2;
const hb3 = (req, res) => {
    const profes = [
        { nome: "David Fernandes", sala: 1238 },
        { nome: "Horácio Fernandes", sala: 1233 },
        { nome: "Edleno Moura", sala: 1236 },
        { nome: "Elaine Harada", sala: 1231 },
    ];
    res.render("main/hb3", { profes, layout: false });
};
exports.hb3 = hb3;
const hb4 = (req, res) => {
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
exports.hb4 = hb4;
const gerarLorem = (req, res) => {
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
exports.gerarLorem = gerarLorem;
