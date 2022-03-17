import React, {useContext} from 'react'
import { AppContext } from './../App';

function Letter({letterPosition, attemptVal}) {
  const { board } = useContext(AppContext);
  const letterVal = board[attemptVal][letterPosition];

  return (
    <div className='letter'>{letterVal}</div>
  )
}

export default Letter