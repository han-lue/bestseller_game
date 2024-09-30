import { motion } from "framer-motion"

type GameOverPropTypes = {
  score: number, 
  handlePlayButton: () => void
}

export default function GameOver({score, handlePlayButton}: GameOverPropTypes) {
  
  return (
    <motion.div initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.5, ease: "easeOut"}}
      className="w-screen h-screen absolute flex items-center justify-center backdrop-blur-sm">
        
      <div className='flex flex-col w-4/5 sm:w-auto aspect-[3/2] absolute bg-black items-center justify-between drop-shadow-2xl rounded-lg 
      border border-white text-center p-6 min-[440px]:p-12 gap-6'>
        <p className="c-font-score font-bold">GAME OVER</p>
        <p className="c-font-headline break-words">Don't be upset. At least you got {score} of them correct.</p>
        <button className='bg-white text-black p-4 self-center rounded-lg c-font-text font-semibold hover:bg-opacity-80' onClick={handlePlayButton}>Play Again</button>
      </div>
    </motion.div> 
  )
}
