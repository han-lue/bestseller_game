import { motion } from "framer-motion"

export default function BookLeft(props: 
    {
    title: string,
    author: string,
    year_published: number,
    cover: string,
    weeks_number_one: number
    }) 
  
  {
  return (
    <div className="w-1/2 h-full flex flex-col items-center justify-end gap-3">
      <div className="flex flex-col gap-1 text-center rounded-lg text-white w-full sm:w-9/12  md:w-3/5 lg:w-1/2">
        <p className="c-font-title font-extrabold">{props.title} <span>({props.year_published})</span></p>
        <p className="c-font-author font-semibold">{props.author}</p>
      </div>

      <motion.img initial={{opacity: 0.1}} animate={{opacity: 1}} transition={{duration: 1, ease: "easeOut"}}
      key={props.cover} src={props.cover} alt='book cover' className='w-full sm:w-9/12  md:w-3/5 lg:w-1/2 aspect-[2/3] rounded-lg border border-white'/>
      
      <div className="flex items-center justify-center p-2">
        <p className="c-font-text font-bold text-white">
        Weeks #1: {props.weeks_number_one}</p>
      </div>
    </div>
  )
}
