import express, {Express, Request, Response} from 'express'
import { geocacheRouter } from './routers/geocacheRouter';

export const app = express();

app.use(express.json());
app.use("/api/geocaches", geocacheRouter);
