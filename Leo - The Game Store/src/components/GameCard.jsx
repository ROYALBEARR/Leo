function GameCard({ game }) {

    function addFavourite() {
        alert(`Added ${game.title} to favourites`);
    }
  return (
    <div className="game-card">
        <div className="game-poster">
            <img src={game.link} alt={game.title} />
            <div className="game-overlay">
                <button className="favourite" onClick={addFavourite}>❤</button>
            </div>
        </div>
        <div className="game-info">
            <h3>{game.title}</h3>
            <h5>{game.genere}</h5>
        </div>
    </div>
  );
}

export default GameCard;