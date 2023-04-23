import express, {Express, Request, Response} from 'express'
import cookieParser from 'cookie-parser';
import { geocacheRouter, meetingRouter } from './routers/geocacheRouter';
import { authRouter } from './routers/authRouter';

export const app = express();

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter)
app.use("/api/geocaches", geocacheRouter)
app.use("/api/meetings", meetingRouter)