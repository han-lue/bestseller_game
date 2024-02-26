type BookRightPropTypes = {
  title: string,
  author: string,
  year_published: number,
  cover: string,
  handleAnswer: (answer: string) => void
}

export default function BookRight({title, author, year_published, cover, handleAnswer}: BookRightPropTypes) {

  return (
    <div className='flex flex-col w-1/2 items-center relative'>
      <img src={cover} alt='book cover' className='w-full sm:w-9/12 md:w-3/5 lg:w-1/2 aspect-[2/3] rounded-lg border border-white'/>

      <div className="flex flex-col bg-black p-2 gap-2 bg-opacity-80 absolute top-2 sm:top-6 xl:top-12 
      left-1/2 transform -translate-x-1/2 text-center rounded-lg text-white w-10/12 sm:w-auto lg:w-5/12">
        <p className="text-xs min-[375px]:text-base md:text-xl font-bold">{title} <span>({year_published})</span></p>
        <p className="text-xs min-[375px]:text-base md:text-lg font-semibold">{author}</p>
      </div>
      
      <div 
      className="flex absolute bottom-2 sm:bottom-6 xl:bottom-12 left-1/2 transform 
      -translate-x-1/2 gap-4 w-auto text-xs min-[375px]:text-base">
        <button className='bg-black bg-opacity-80 text-white font-bold p-2 sm:p-4 rounded-xl hover:bg-opacity-90' 
        onClick={() => handleAnswer("-")}>Lower</button>
        <button className='bg-black bg-opacity-80 text-white font-bold p-2 sm:p-4 rounded-xl hover:bg-opacity-90' 
        onClick={() => handleAnswer("+")}>Higher</button>
      </div>
      
    </div>
  )
}
