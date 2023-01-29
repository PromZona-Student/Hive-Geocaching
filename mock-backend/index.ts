import express, { Express, Request, Response } from 'express';
import { app } from './src/app';
import http from 'http';

const PORT = 3001;
const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});