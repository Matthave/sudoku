import React, {useState} from 'react';
import StartScreen from "./components/StartScreen";
import GameField from "./components/GameField";

function App() {
  const [startGame, setStartGame ] = useState(false);

  const letStartFunc = () => {
    const startScreen = document.querySelector(".startScreen");
    startScreen.classList.add("startScreenOff");

    setTimeout(() => {
      setStartGame(true);
    }, 500);
  }
  return (
    <div className="app">
      <StartScreen letStartFunc={letStartFunc}/>
      {startGame ? <GameField/> : null}
    </div>
  );
}

export default App;
