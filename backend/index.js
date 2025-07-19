import dotenv from "dotenv";
dotenv.config();
import express, { json } from "express";
import cors from "cors";
const app = express();
import mongoose from "mongoose";
import chessRouter from "./routes/ChessRouter.js";

app.use(cors());
app.use(json());

app.use("/Chess", chessRouter);

(async ()=>{
    await mongoose.connect(process.env.MONGO_URL)
    .then(()=>console.log("Connected to MongoDB"))
    .catch((err)=>console.error("Error connecting to MongoDB:", err));

    app.listen(process.env.PORT,()=>console.log(`Server running on port ${process.env.PORT}`));
})();   