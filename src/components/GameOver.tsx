type GameOverPropTypes = {
  score: number, 
  handlePlayButton: () => void
}

export default function GameOver({score, handlePlayButton}: GameOverPropTypes) {
  return (
    <div className='flex flex-col w-4/5 aspect-square md:h-3/5 md:w-auto absolute
    bg-black items-center justify-between drop-shadow-2xl rounded-lg border border-white text-center p-4'>
      <p className="text-2xl font-bold">GAME OVER</p>
      <p className="text-lg">But hey, at least you got {score} of them correct</p>
      <button className='bg-white text-black p-4 self-center rounded-lg' onClick={handlePlayButton}>Play Again</button>
    </div>
  )
}
