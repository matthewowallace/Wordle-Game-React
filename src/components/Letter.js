import React, {useContext, useEffect} from 'react'
import { AppContext } from './../App';

function Letter({letterPosition, attemptVal}) {
  const { board, correctWord, currentAttempt, disabledLetters, setDisabledLetter} = useContext(AppContext);
  const letterVal = board[attemptVal][letterPosition];

  const correct  = correctWord[letterPosition] === letterVal;
  const almost =  !correct && letterVal !== "" && correctWord.includes(letterVal);

  const letterState = 
    currentAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error"); 


   useEffect (() => {
      if(letterVal !== "" && !correct && !almost){
        setDisabledLetter((prev) => [...prev, letterVal]);
      }

   }, [currentAttempt.attempt]);

  return (
    <div className='letter' id={letterState} >{letterVal}</div>
  );
}

export default Letter;