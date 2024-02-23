import React from 'react'

type GameOverPropTypes = {
  score: number, 
  handlePlayButton: () => void
}

export default function GameOver({score, handlePlayButton}: GameOverPropTypes) {
  return (
    <div className='flex flex-col h-2/3 w-2/3 absolute bg-pink-300 items-center justify-center'>
      <p>GAME OVER!</p>
      <p>But hey, at least you got {score} of them correct</p>
      <button className='bg-blue-400 text-white p-4 self-center' onClick={handlePlayButton}>Play Again</button>
    </div>
  )
}
