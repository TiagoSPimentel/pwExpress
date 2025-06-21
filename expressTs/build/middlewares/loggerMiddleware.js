"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerMiddleware = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const logDir = process.env.LOG_DIR || 'logs';
// Garante que a pasta de logs existe
if (!fs_1.default.existsSync(logDir)) {
    fs_1.default.mkdirSync(logDir);
}
const loggerMiddleware = (format) => {
    return (req, res, next) => {
        const timestamp = new Date().toISOString();
        const logParts = [`[${timestamp}]`, req.method, req.url];
        if (format === 'complete') {
            logParts.push(`HTTP/${req.httpVersion}`);
            logParts.push(req.get('User-Agent') || '');
        }
        const logLine = logParts.join(' | ') + '\n';
        const logFilePath = path_1.default.join(logDir, 'access.log');
        fs_1.default.appendFile(logFilePath, logLine, (err) => {
            if (err) {
                console.error('Erro ao gravar o log:', err);
            }
        });
        next();
    };
};
exports.loggerMiddleware = loggerMiddleware;
