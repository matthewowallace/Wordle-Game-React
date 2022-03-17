import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { createContext, useState } from "react"
import { boardDefault } from './Helper/Words';

export const AppContext = createContext();

function App() {

  const [board, setBoard] = useState(boardDefault);
  const [currentAttempt, setCurrentAttempt] = useState({attempt: 0, letterPos: 0});

  const onSelectLetter = (keyVal) => {
    if (currentAttempt.letterPos > 4) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos + 1});
  }

  const onDelete = () => {
    if(currentAttempt.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPos -1] = "";
    setBoard(newBoard);
    setCurrentAttempt({...currentAttempt, letterPos:currentAttempt.letterPos - 1});
  }

  const onEnter = () =>{
    if(currentAttempt.letterPos !== 5) return;
    setCurrentAttempt({attempt: currentAttempt.attempt + 1, letterPos: 0});
  }

  return (
        <div className="App">
          <nav>
            <h1>Wordle Game</h1>
          </nav>
          <AppContext.Provider value={{board, setBoard, currentAttempt, setCurrentAttempt, onSelectLetter, onEnter, onDelete}}>
            <div className='game'>
              <Board />
              <Keyboard />
            </div>
          </AppContext.Provider>
        </div>
  );
}

export default App;
