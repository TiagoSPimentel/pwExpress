import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const logDir = process.env.LOG_DIR || 'logs';

// Garante que a pasta de logs existe
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

export const loggerMiddleware = (format: 'simple' | 'complete') => {
  return (req: Request, res: Response, next: NextFunction) => {
    const timestamp = new Date().toISOString();
    const logParts = [`[${timestamp}]`, req.method, req.url];

    if (format === 'complete') {
      logParts.push(`HTTP/${req.httpVersion}`);
      logParts.push(req.get('User-Agent') || '');
    }

    const logLine = logParts.join(' | ') + '\n';

    const logFilePath = path.join(logDir, 'access.log');
    fs.appendFile(logFilePath, logLine, (err) => {
      if (err) {
        console.error('Erro ao gravar o log:', err);
      }
    });

    next();
  };
};
