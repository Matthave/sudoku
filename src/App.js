import React, {useState} from 'react';
import StartScreen from "./components/StartScreen";
import GameField from "./components/GameField";

function App() {
  const [startGame, setStartGame ] = useState(false);
  const [levelScreen, setLevelScreen ] = useState("");
  const [chooseLevel, setLevel ] = useState("");

  const letStartFunc = (level) => {
    const startScreen = document.querySelector(".startScreen");
    startScreen.classList.add("startScreenOff");
    setLevel(level);

    setTimeout(() => {
      setStartGame(true);
    }, 500);
  }

  const chooseGameLevelScreenFunc = () => {
    setLevelScreen (true);
  }
  return (
    <div className="app">
      <StartScreen chooseGameLevelScreenFunc={chooseGameLevelScreenFunc} levelScreen={levelScreen} letStartFunc={letStartFunc}/>
      {startGame ? <GameField chooseLevel={chooseLevel}/> : null}
    </div>
  );
}

export default App;
