"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// Rota /hb/hbs1
router.get('/hbs1', (req, res) => {
    res.render('hbs1', {
        mensagem: 'Olá, você está aprendendo Express + Handlebars!',
        layout: false,
    });
});
// Rota /hb/hbs2
router.get('/hbs2', (req, res) => {
    res.render('hbs2', {
        poweredByNodejs: true,
        name: 'Express',
        type: 'Framework',
        layout: false,
    });
});
// Rota /hb/hbs3
router.get('/hbs3', (req, res) => {
    const profes = [
        { nome: 'David Fernandes', sala: 1238 },
        { nome: 'Horácio Fernandes', sala: 1233 },
        { nome: 'Edleno Moura', sala: 1236 },
        { nome: 'Elaine Harada', sala: 1231 }
    ];
    res.render('hbs3', { profes, layout: false });
});
exports.default = router;
