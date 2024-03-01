type BookRightPropTypes = {
    title: string,
    author: string,
    year_published: number,
    cover: string,
    handleAnswer: (answer: string) => void
  }
  
  export default function BookRight({title, author, year_published, cover, handleAnswer}: BookRightPropTypes) {
  
    return (
      <div className='w-1/2 h-full flex flex-col items-center justify-end gap-3'>

        <div className="flex flex-col gap-1 text-center rounded-lg text-white ">
          <p className="text-xs min-[375px]:text-base md:text-xl lg:text-2xl font-bold leading-3">{title} <span>({year_published})</span></p>
          <p className="text-xs min-[375px]:text-base md:text-lg lg:text-xl font-semibold ">{author}</p>
        </div>

        <img src={cover} alt='book cover' className='w-full sm:w-9/12  md:w-3/5 lg:w-1/2 aspect-[2/3] rounded-lg border border-white'/>
        
        <div className="flex gap-4 w-auto text-xs min-[375px]:text-base md:text-lg  text-white font-semibold">
          <button className='p-2 min-[440px]:px-4 rounded-xl bg-white text-black active:bg-opacity-80 md:hover:opacity-80 ' 
          onClick={() => handleAnswer("-")}>Lower</button>
          <button className='p-2 min-[440px]:px-4 rounded-xl bg-white text-black active:bg-opacity-80 md:hover:opacity-80' 
          onClick={() => handleAnswer("+")}>Higher</button>
        </div>
        
      </div>
    )
  }