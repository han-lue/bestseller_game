type GameOverPropTypes = {
  score: number, 
  handlePlayButton: () => void
}

export default function GameOver({score, handlePlayButton}: GameOverPropTypes) {
  return (
    <div className='flex flex-col h-2/3 w-2/3 absolute items-center justify-center text-gray border-white'>
      <p>GAME OVER!</p>
      <p>But hey, at least you got {score} of them correct</p>
      <button className='bg-white text-black  p-4 self-center' onClick={handlePlayButton}>Play Again</button>
    </div>
  )
}
