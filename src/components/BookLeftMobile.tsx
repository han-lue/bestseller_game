export default function BookLeftMobile(props: 
    {title: string,
    author: string,
    year_published: number,
    cover: string,
    weeks_number_one: number}) 
    {


  return (
    <div className="w-1/2 h-screen items-center relative">
        
        <div className="flex flex-col gap-2 text-center rounded-lg text-white absolute">
            <p className="text-xs min-[375px]:text-base font-bold">{props.title} <span>({props.year_published})</span></p>
            <p className="text-xs min-[375px]:text-base font-semibold">{props.author}</p>
        </div>

        <img src={props.cover} alt='book cover' className='w-full aspect-[2/3] rounded-lg border border-white 
        absolute top-1/2 transform -translate-y-1/2'/>

        <p className="text-xs min-[375px]:text-base font-semibold text-white absolute">
        Weeks #1 on the list: {props.weeks_number_one}</p>
    </div>
  )
}
