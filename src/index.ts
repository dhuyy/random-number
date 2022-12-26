import express from 'express';
import type { Request, Response } from 'express';

const app = express();

const HOST = process.env.HOST ?? 'localhost';
const PORT = process.env.PORT ?? 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript server');
});

app.listen(Number(PORT), HOST, () => {
  console.log(`⚡️[server]: Server is running at https://${HOST}:${PORT}`);
});
