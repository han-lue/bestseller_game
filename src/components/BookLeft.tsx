export default function BookLeft(props: 
    {title: string,
    author: string,
    year_published: number,
    cover: string,
    weeks_number_one: number}) 
    {


  return (
    <div className="w-1/2 h-full flex flex-col items-center justify-end gap-3">
        
        <div className="flex flex-col gap-1 text-center rounded-lg text-white">
            <p className="text-xs min-[375px]:text-base md:text-xl lg:text-2xl font-bold leading-3">{props.title} <span>({props.year_published})</span></p>
            <p className="text-xs min-[375px]:text-base md:text-lg lg:text-xl font-semibold">{props.author}</p>
        </div>

        <img src={props.cover} alt='book cover' className='w-full sm:w-9/12  md:w-3/5 lg:w-1/2 aspect-[2/3] rounded-lg border border-white'/>
        
        <div className="h-[34px] min-[375px]:h-[42px] md:h-[46px] flex items-center justify-center">
          <p className="text-xs min-[375px]:text-base md:text-lg lg:text-xl font-semibold text-white">
          Weeks #1 on the list: {props.weeks_number_one}</p>
        </div>

        
    </div>
  )
}
