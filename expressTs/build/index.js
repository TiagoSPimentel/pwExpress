"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const loggerMiddleware_1 = require("./loggerMiddleware");
const lorem_1 = __importDefault(require("./routes/lorem"));
const hb_1 = __importDefault(require("./routes/hb"));
const express_1 = __importDefault(require("express"));
const express_handlebars_1 = require("express-handlebars");
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3333;
const hbs = (0, express_handlebars_1.create)({
    helpers: {
        nodeTechnologies: function (tecnologias) {
            return tecnologias.filter(tec => tec.poweredByNodejs);
        }
    }
});
// Configuração do Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path_1.default.join(__dirname, '..', 'views'));
const logFormat = process.env.LOG_FORMAT === 'complete' ? 'complete' : 'simple';
app.use((0, loggerMiddleware_1.loggerMiddleware)(logFormat));
app.get('/', (req, res) => {
    res.send('Hello world com logger!');
});
// Rotas externas
app.use('/lorem', lorem_1.default);
app.use('/hbs', hb_1.default); //http://localhost:3333/hbs/hbs3 ==> para acessar
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
