export default function BookLeft(props: 
  {title: string,
  author: string,
  year_published: number,
  cover: string,
  weeks_number_one: number}) 
  {
    
  return (
    <div className='flex flex-col w-1/2 items-center relative'>
      <img src={props.cover} alt='book cover' className='w-full sm:w-4/5 md:w-3/5 lg:w-1/2 aspect-[2/3] rounded-lg'/>
      
      <div className="flex flex-col bg-white p-2 gap-2 bg-opacity-90 absolute top-6 xl:top-12 
      left-1/2 transform -translate-x-1/2 text-center rounded-lg text-black w-10/12 sm:w-auto">
        <p className="text-xs min-[375px]:text-base md:text-xl font-bold">{props.title} <span>({props.year_published})</span></p>
        <p className="text-xs min-[375px]:text-base md:text-lg font-semibold">{props.author}</p>
      </div>
      
      <p className="text-xs min-[375px]:text-base md:text-xl w-10/12 sm:w-auto font-semibold bg-white text-black p-2 absolute bottom-6 md:bottom-12 left-1/2 transform 
      -translate-x-1/2 text-center bg-opacity-90 rounded-lg">Weeks #1 on the list: {props.weeks_number_one}</p>
    </div>
  )
}
