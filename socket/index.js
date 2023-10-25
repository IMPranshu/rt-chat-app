import { Server } from "socket.io";
import dotenv from "dotenv";
dotenv.config();

const io = new Server(9001, {
  cors: {
    origin: process.env.FRONTEND_URL,
  },
});

io.on("connection", (socket) => {
  console.log("user connected");
});
