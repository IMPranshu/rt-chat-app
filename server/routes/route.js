import express from "express";

import { addUser, getUser } from "../controller/user-controller.js";
import {
  newConversation,
  getConversation,
} from "../controller/conversation-controller.js";
import { uploadImage } from "../controller/image-controller.js";
import upload from "../utils/upload.js";

import { newMessage, getMessages } from "../controller/message-controller.js";

const route = express.Router();

route.post("/add", addUser);
route.get("/users", getUser);

route.post("/conversation/add", newConversation);
route.post("/conversation/get", getConversation);

route.post("/message/add", newMessage);
route.get("/message/get/:id", getMessages);

route.post("/file/upload", upload.single("file"), uploadImage);

export default route;
