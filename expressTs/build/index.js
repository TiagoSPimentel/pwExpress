"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const express_handlebars_1 = require("express-handlebars");
const loggerMiddleware_1 = require("./middlewares/loggerMiddleware");
const mainRoutes_1 = __importDefault(require("./routes/mainRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3333;
// Configuração do Handlebars
const hbs = (0, express_handlebars_1.create)({
    helpers: {
        nodeTechnologies: function (technologies) {
            if (!Array.isArray(technologies)) {
                return [];
            }
            return technologies.filter(tech => tech.poweredByNodejs);
        }
    }
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path_1.default.join(__dirname, 'views'));
// Middleware de logger
const logFormat = process.env.LOG_FORMAT === 'complete' ? 'complete' : 'simple';
app.use((0, loggerMiddleware_1.loggerMiddleware)(logFormat));
// Rotas externas
app.use('/', mainRoutes_1.default);
app.use('/hbs', mainRoutes_1.default); // ← Aqui está usando as rotas novas com controller separado
// Start do servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
//http://localhost:3333/hbs/hb3 ==> para acessar
