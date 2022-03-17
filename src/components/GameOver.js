import React, { useContext } from 'react'
import { AppContext } from './../App';

function GameOver() {

   const {gameOver, correctWord, currentAttempt} = useContext(AppContext) 

  return (
    <div className='gameOver'>
        <h3>{gameOver.guessedWord ? "You Correctly Guess the Word" : "You Failed"}</h3>
        <h1>Correct: {correctWord}</h1>
        {gameOver.guessedWord && (
            <h3>You guess in {currentAttempt} attempts</h3>
        )}
    </div>
  )
}

export default GameOver