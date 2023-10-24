import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

import Connection from "./database/db.js";
import Route from "./routes/route.js";

const PORT = process.env.PORT;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

const app = express();
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
Connection(DB_USER, DB_PASS);

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", Route);
