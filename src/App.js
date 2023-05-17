import Game from "./components/Game";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <h1 className="heading">Memory Game</h1>
      </header>
      <main>
        <Game />
      </main>
    </div>
  );
}

export default App;
