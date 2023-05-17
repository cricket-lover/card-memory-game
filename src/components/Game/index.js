import { useEffect, useState } from "react";
import Board from "../Board";
import "./game.css";
import { getInitialTiles } from "../../initialTiles";

const Game = function () {
  const [tiles, setTiles] = useState([]);
  const [moves, setMoves] = useState(0);
  const [matchedTiles, setMatchedTiles] = useState([]);
  const [meterValue, setMeterValue] = useState(0);

  useEffect(() => {
    const initialTiles = getInitialTiles();
    setTiles(initialTiles);
  }, []);

  useEffect(() => {
    setMeterValue(matchedTiles.length / 2);
  }, [matchedTiles]);

  const resetGame = function () {
    setTiles(getInitialTiles());
    setMoves(0);
    setMatchedTiles([]);
  };

  const isGameOver = matchedTiles.length === tiles.length && tiles.length !== 0;

  return (
    <div className="game">
      <Board
        onMove={setMoves}
        tiles={tiles}
        setTiles={setTiles}
        matchedTiles={matchedTiles}
        setMatchedTiles={setMatchedTiles}
      />
      <section className="game-details">
        <h2 className="game-over">{isGameOver && "Yo Mama! Game Over"}</h2>
        <div className="no-of-moves">
          No of Moves: <span className="moves-count">{moves}</span>
        </div>
        <button
          onClick={() => {
            resetGame();
          }}
          className="reset-btn"
        >
          Reset
        </button>
        <div className="pairs-matched">
          <meter
            id="no-of-matched-pairs"
            className="meter"
            value={meterValue}
            min="0"
            max="8"
          ></meter>
          <div className="no-of-matched-pairs">Pairs Matched:</div>
          <div className="no-of-moves">
            <span className="moves-count">{meterValue}</span> / 8
          </div>
        </div>
      </section>
    </div>
  );
};

export default Game;
