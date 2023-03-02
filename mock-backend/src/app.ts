import express, {Express, Request, Response} from 'express'
import { geocacheRouter } from './routers/geocacheRouter';
import { authRouter } from './routers/authRouter';

export const app = express();

app.use(express.json());
app.use("/api/auth", authRouter)
app.use("/api/geocaches", geocacheRouter)
