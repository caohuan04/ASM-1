import express from "express";
import dotenv from "dotenv";
import connectMongoDB from "./config/dbconfig.js";
import routes from "./routers/index.js";

dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 5000;
const db_Url = process.env.DB_URL || "mongodb://127.0.0.1:27017/asm";
connectMongoDB(db_Url);
routes(app);
app.listen(port, () => console.log("Kết nối thành công với cổng: "+port));