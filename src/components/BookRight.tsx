import { motion } from "framer-motion"

type BookRightPropTypes = {
  title: string,
  author: string,
  year_published: number,
  cover: string,
  showAnswer: boolean,
  weeks_number_one: number,
  handleAnswer: (answer: string) => void
}
  
  export default function BookRight({title, author, year_published, cover, showAnswer, weeks_number_one, handleAnswer}: BookRightPropTypes) {
  
    return (
      <div className='w-1/2 h-full flex flex-col items-center justify-end gap-3 relative'>
        
        
          <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 2, ease: "linear"}}>
            <p className={`absolute bg-black p-2 c-font-text font-bold rounded-lg left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
            ${showAnswer ? 'block' : 'hidden'}`}>Weeks #1: {weeks_number_one}</p>
          </motion.div>


        <div className="flex flex-col gap-1 text-center rounded-lg text-white ">
          <p className="c-font-title font-extrabold">{title} <span>({year_published})</span></p>
          <p className="c-font-author font-semibold ">{author}</p>
        </div>

        <img src={cover} alt='book cover' className='w-full sm:w-9/12  md:w-3/5 lg:w-1/2 aspect-[2/3] rounded-lg border border-white '/>
        
        <div className="flex gap-4 w-full c-font-text text-white font-semibold items-center justify-center">
          <button className='p-2 min-[440px]:px-4 rounded-xl bg-white text-black active:bg-opacity-80 md:hover:opacity-80 ' 
          onClick={() => handleAnswer("-")}>Lower</button>
          <button className='p-2 min-[440px]:px-4 rounded-xl bg-white text-black active:bg-opacity-80 md:hover:opacity-80' 
          onClick={() => handleAnswer("+")}>Higher</button>
        </div>
        
      </div>
    )
  }