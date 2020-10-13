import express from 'express';
import http from 'http';
import { appRouter } from './routes';
import { AppSocket } from './lib/appSocket'

const app = express();
app.use(express.json());
app.use(appRouter);

const server = http.createServer(app);
const socket = new AppSocket(server);

server.listen(7781);