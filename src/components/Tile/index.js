import "./tile.css";

const Tile = function ({ tile, id, onTileClick, backgroundColor }) {
  return (
    <div className="tile" onClick={() => onTileClick(id)}>
      {tile.isRevealed && (
        <img className="tile-image" src={tile.url} alt={tile.name} />
      )}
    </div>
  );
};

export default Tile;
