export default async function startGame(player1, player2, gameId) {
    ///bug here
    //also add a bull to retriete first and then dgo for war
    const res = await fetch(`${import.meta.env.VITE_BASE}/Chess/newGame`, {
        method: 'POST',     
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            player1,
            player2,
            gameId
        }),
    });
}