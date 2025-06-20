"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const loggerMiddleware_1 = require("./loggerMiddleware");
const lorem_1 = __importDefault(require("./routes/lorem")); // Importação correta
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3333;
const logFormat = process.env.LOG_FORMAT === 'complete' ? 'complete' : 'simple';
app.use((0, loggerMiddleware_1.loggerMiddleware)(logFormat));
app.get('/', (req, res) => {
    res.send('Hello world com logger!');
});
// Aplicando as rotas do lorem
app.use('/lorem', lorem_1.default);
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
