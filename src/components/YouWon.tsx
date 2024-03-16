import { motion } from "framer-motion"

type YouWonPropTypes = {
  score: number, 
  handlePlayButton: () => void
}

export default function YouWon({score, handlePlayButton}: YouWonPropTypes) {
  return (
    <motion.div initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.5, ease: "easeOut"}}
     className="w-screen h-screen absolute flex items-center justify-center backdrop-blur-sm">
      <div className='flex flex-col w-4/5 aspect-square md:h-3/5 md:w-auto absolute 
      bg-black items-center justify-center drop-shadow-2xl rounded-lg border-2 border-white text-center p-4 gap-6'>
        <p className="c-font-headline font-bold">YOU WON</p>
        <p className="c-font-author">Good job nerd! You got all {score} answers correct.</p>
        <button className='bg-white text-black p-4 self-center rounded-lg c-font-text font-semibold hover:bg-opacity-80' onClick={handlePlayButton}>Play Again</button>
      </div>
    </motion.div>
    
  )
}
