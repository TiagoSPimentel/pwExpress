"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showHb4 = exports.showHb3 = exports.showHb2 = exports.showHb1 = void 0;
/**
 * Controller: Responsável por lidar com as requisições das páginas Handlebars.
 */
const showHb1 = (req, res) => {
    res.render("main/hb1", {
        mensagem: "Olá, você está aprendendo Express + Handlebars!",
        layout: false,
    });
};
exports.showHb1 = showHb1;
const showHb2 = (req, res) => {
    res.render("main/hb2", {
        poweredByNodejs: true,
        name: "Express",
        type: "Framework",
        layout: false,
    });
};
exports.showHb2 = showHb2;
const showHb3 = (req, res) => {
    const profes = [
        { nome: "David Fernandes", sala: 1238 },
        { nome: "Horácio Fernandes", sala: 1233 },
        { nome: "Edleno Moura", sala: 1236 },
        { nome: "Elaine Harada", sala: 1231 },
    ];
    res.render("main/hb3", { profes, layout: false });
};
exports.showHb3 = showHb3;
const showHb4 = (req, res) => {
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
exports.showHb4 = showHb4;
