import express from 'express';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();

app.use(cors());

const server = app.listen(process.env.PORT || 3001);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
  },
});

io.on('connection', socket => {
  console.log('connection');
});

io.emit('connect', () => {
  console.log('connect');
});
