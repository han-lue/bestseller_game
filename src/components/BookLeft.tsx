export default function BookLeft(props: 
  {title: string,
  author: string,
  year_published: number,
  cover: string,
  weeks_number_one: number}) 
  {
    
  return (
    <div className='flex flex-col w-1/2 items-center relative'>
      <img src={props.cover} alt='book cover' className='w-full sm:w-9/12  md:w-3/5 lg:w-1/2 aspect-[2/3] rounded-lg border border-white'/>
      
      <div className="flex flex-col bg-black p-2 gap-2 bg-opacity-80 absolute top-2 sm:top-6 xl:top-12 
      left-1/2 transform -translate-x-1/2 text-center rounded-lg text-white w-10/12 sm:w-auto lg:w-5/12">
        <p className="text-xs min-[375px]:text-base md:text-xl font-bold">{props.title} <span>({props.year_published})</span></p>
        <p className="text-xs min-[375px]:text-base md:text-lg font-semibold">{props.author}</p>
      </div>
      
      <p className="text-xs min-[375px]:text-base md:text-xl w-10/12 sm:w-auto font-semibold bg-black text-white 
      p-2 absolute bottom-2 sm:bottom-6 xl:bottom-12 left-1/2 transform -translate-x-1/2 bg-opacity-80 rounded-lg">
        Weeks #1 on the list: {props.weeks_number_one}</p>
    </div>
  )
}
