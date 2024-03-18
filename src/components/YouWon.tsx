import { motion } from "framer-motion"

type YouWonPropTypes = {
  score: number, 
  handlePlayButton: () => void
}

export default function YouWon({score, handlePlayButton}: YouWonPropTypes) {
  return (
    <motion.div initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.5, ease: "easeOut"}}
     className="w-screen h-screen absolute flex items-center justify-center backdrop-blur-sm">
      <div className='flex flex-col w-4/5 min-[600px]:w-auto aspect-[3/2] absolute bg-black items-center justify-between drop-shadow-2xl rounded-lg 
      border border-white text-center p-6 min-[400px]:p-12 gap-6'>
        <p className="c-font-score font-bold">YOU WON</p>
        <p className="c-font-headline">Good job nerd! You got all {score} answers correct.</p>
        <button className='bg-white text-black p-4 self-center rounded-lg c-font-text font-semibold hover:bg-opacity-80' onClick={handlePlayButton}>Play Again</button>
      </div>
    </motion.div>
  )
}
