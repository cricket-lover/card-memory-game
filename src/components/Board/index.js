import { useState } from "react";
import Tile from "../Tile";
import "./board.css";

const deepCloneTiles = (tiles) => {
  return tiles.map((tile) => ({ ...tile }));
};

const Board = ({ onMove, tiles, setTiles, matchedTiles, setMatchedTiles }) => {
  const [openTiles, setOpenTiles] = useState([]);

  const isTileRevealed = (matchedTiles, tileClicked) => {
    return matchedTiles.some((card) => card.name === tileClicked.name);
  };

  const revealBothCards = function (index) {
    setTimeout(() => {
      const tempTiles = deepCloneTiles(tiles);
      tempTiles[index].isRevealed = false;
      tempTiles[openTiles[0].id].isRevealed = false;
      setTiles(tempTiles);
      setOpenTiles([]);
    }, 1000);
  };

  const evaluate = (tempTiles, index) => {
    const areTilesMatched = openTiles[0].name === tempTiles[index].name;

    if (areTilesMatched) {
      setMatchedTiles((matchedTiles) => [
        ...matchedTiles,
        { ...openTiles[0] },
        { ...tempTiles[index] },
      ]);
      setOpenTiles([]);
    } else {
      revealBothCards(index);
    }
    onMove((moves) => moves + 1);
  };

  const handleTileClick = (index) => {
    const tempTiles = deepCloneTiles(tiles);
    if (isTileRevealed(matchedTiles, tempTiles[index])) {
      return;
    }
    if (openTiles.length === 0) {
      tempTiles[index].isRevealed = true;
      setOpenTiles([{ ...tempTiles[index], id: index }]);
      setTiles(tempTiles);
    }

    if (openTiles.length === 1 && openTiles[0].id !== index) {
      setOpenTiles(tempTiles[index]);
      tempTiles[index].isRevealed = true;
      setTiles(tempTiles);
      evaluate(tempTiles, index);
    }
  };

  return (
    <div className="board">
      {tiles.map((tile, index) => (
        <Tile
          tile={tile}
          id={index}
          key={index}
          onTileClick={handleTileClick}
        />
      ))}
    </div>
  );
};

export default Board;
