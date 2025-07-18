import { Router } from "express";

const chessRouter = Router();

chessRouter.post("/newGame", async (req, res) => {
    const { player1, player2, gameId } = req.body;
    
    res.status(200).json({ message: "Game started successfully", gameId });
});

export default chessRouter;
