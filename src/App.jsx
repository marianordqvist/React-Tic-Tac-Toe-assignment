import React from "react";
import Game from "./components/Game";

function App() {
  return (
    <>
      <div className="game-container">
        <h1 className="game-heading">Tic-Tac-Toe</h1>
        <Game />
      </div>
    </>
  );
}

export default App;
