import { Server } from "socket.io";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
dotenv.config();

const app = express();

app.use(cors());
app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://rt-chat-app.vercel.app"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  next();
});
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "https://rt-chat-app.vercel.app",
    methods: ["GET", "POST"],
  },
});

let users = [];

const addUser = (userData, socketId) => {
  !users.some((user) => user.sub === userData.sub) &&
    users.push({ ...userData, socketId });
};

const getUser = (userId) => {
  return users.find((user) => user.sub === userId);
};

io.on("connection", (socket) => {
  console.log(`User connected ${socket.id}`);

  socket.on("addUsers", (userData) => {
    addUser(userData, socket.id);
    io.emit("getUsers", users);
  });

  socket.on("sendMessage", (data) => {
    const user = getUser(data.receiverId);
    io.to(user.socketId).emit("getMessage", data);
  });
});

server.listen(9001, () => "Server is running on port 9001");
