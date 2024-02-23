type YouWonPropTypes = {
  score: number, 
  handlePlayButton: () => void
}

export default function YouWon({score, handlePlayButton}: YouWonPropTypes) {
  return (
    <div className='flex flex-col h-2/3 w-2/3 absolute bg-gray items-center justify-center drop-shadow-2xl rounded-lg border border-white'>
      <p>YOU WON!</p>
      <p>You got all {score} of them correct</p>
      <button className='bg-white text-black  p-4 self-center' onClick={handlePlayButton}>Play Again</button>
    </div>
  )
}
