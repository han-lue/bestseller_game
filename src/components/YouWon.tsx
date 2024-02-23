import React from 'react'

type YouWonPropTypes = {
  score: number, 
  handlePlayButton: () => void
}

export default function YouWon({score, handlePlayButton}: YouWonPropTypes) {
  return (
    <div className='flex flex-col h-2/3 w-2/3 absolute bg-pink-300 items-center justify-center'>
      <p>YOU WON!</p>
      <p>You got all {score} of them correct</p>
      <button className='bg-blue-400 text-white p-4 self-center' onClick={handlePlayButton}>Play Again</button>
    </div>
  )
}
