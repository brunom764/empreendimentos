import express, { Application, json } from 'express';
import 'express-async-errors';
import routes  from './routes';
import cors from 'cors';

export const app: Application = express();

app.use(json());

app.use(cors());

app.use('/', routes);
