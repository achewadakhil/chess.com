import { Chess } from 'chess.js';
//doing frontend first and then the backend
const chess = new Chess()

while (!chess.game_over()) {
    const moves = chess.moves()
    console.log("Moves",moves);
    const move = moves[Math.floor(Math.random() * moves.length)]
    chess.move("Move",move);
}
console.log("Png");
console.log(chess.pgn())