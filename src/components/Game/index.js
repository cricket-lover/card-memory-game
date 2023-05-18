import { useEffect, useState } from "react";
import Board from "../Board";
import { getInitialTiles } from "../../initialTiles";

import "./game.css";

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
        <div className="game-over">{isGameOver && "Game Over"}</div>
        <meter
          id="no-of-matched-pairs"
          className="meter"
          value={meterValue}
          min="0"
          max="8"
        ></meter>
        <div className="pairs-matched">
          <div className="no-of-matched-pairs">Pairs Matched:</div>
          <div className="count">
            <span className="moves-count">{meterValue}</span> / 8
          </div>
        </div>
        <div className="count">
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
      </section>
    </div>
  );
};

export default Game;
