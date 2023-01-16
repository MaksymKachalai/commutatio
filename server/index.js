import express from "express";
import { Server } from "socket.io";
import cors from "cors";

const app = express();

app.use(cors());

const server = app.listen(process.env.PORT || 3001);

const io = new Server(server, {
	cors: {
		origin: "http://localhost:3000",
	},
});

app.get("/", (req, res) => {
	res.send("Hello world!");
});

io.on("connection", (socket) => {});
