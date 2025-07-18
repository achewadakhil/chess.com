import express, { json } from "express";
import cors from "cors";
const app = express();
import mongoose from "mongoose";
import chessRouter from "./routes/ChessRouter.js";

app.use(cors());
app.use(json());

app.use("/Chess", chessRouter);


app.listen(8080,()=>{console.log("Serve is running on port 8080")});