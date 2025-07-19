import { Router } from "express";
import gameModel from "../model/gameModel.js";

const chessRouter = Router();

chessRouter.post("/newGame", async (req, res) => {
    const { p1, p2, gameId } = req.body;
    //lets assume we are making them to play bltz only we will add random time later
    const white = {
        userId : "p1",
        timeRemaining : 300, 

    }
    const black = {
        userId : "p2",
        timeRemaining : 300, 
    }
    try{
        await gameModel.create({
            players : {
                white,
                black
            },
            gameId,
            moves: [],
            status: "ongoing",
        });
        res.status(200).json({ message: "Game started successfully", gameId }); 
    }catch(err){
        res.status(500).json({ message: "Error starting game", error: err.message });
    }
});

export default chessRouter;
