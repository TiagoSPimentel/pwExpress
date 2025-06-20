"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/:count', (req, res) => {
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
});
exports.default = router;
