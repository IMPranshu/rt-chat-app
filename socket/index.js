import { Server } from "socket.io";
import dotenv from "dotenv";
dotenv.config();

const io = new Server(9001, {
  cors: {
    origin: process.env.FRONTEND_URL,
  },
});

let users = [];

const addUser = (userData, socketId) => {
  !users.some((user) => user.sub === userData.sub) &&
    users.push({ ...userData, socketId });
};

io.on("connection", (socket) => {
  console.log("user connected");

  socket.on("addUsers", (userData) => {
    addUser(userData, socket.id);
    io.emit("getUsers", users);
  });
});
