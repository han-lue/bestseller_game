type BookRightMobilePropTypes = {
    title: string,
    author: string,
    year_published: number,
    cover: string,
    handleAnswer: (answer: string) => void
  }
  
  export default function BookRightMobile({title, author, year_published, cover, handleAnswer}: BookRightMobilePropTypes) {
  
    return (
      <div className='flex flex-col h-screen w-1/2 items-center relative'>

        <div className="flex flex-col gap-2 text-center rounded-lg text-white absolute">
          <p className="text-xs min-[375px]:text-base font-bold">{title} <span>({year_published})</span></p>
          <p className="text-xs min-[375px]:text-base font-semibold">{author}</p>
        </div>

        <img src={cover} alt='book cover' className='w-full aspect-[2/3] rounded-lg border border-white
        absolute top-1/2 transform -translate-y-1/2'/>
        
        <div className="flex gap-4 w-auto text-xs min-[375px]:text-base absolute">
          <button className='bg-white  text-black font-bold p-2 sm:p-4 rounded-xl hover:bg-opacity-90' 
          onClick={() => handleAnswer("-")}>Lower</button>
          <button className='bg-white text-black font-bold p-2 sm:p-4 rounded-xl hover:bg-opacity-90' 
          onClick={() => handleAnswer("+")}>Higher</button>
        </div>
        
      </div>
    )
  }
  