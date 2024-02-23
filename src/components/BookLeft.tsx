export default function BookLeft(props: 
  {title: string,
  author: string,
  year_published: number,
  cover: string,
  weeks_number_one: number}) 
  {
    
  return (
    <div className='flex flex-col text-blue-400 w-1/2 items-center'>
      <p>{props.title} <span>{props.year_published}</span></p>
      <p>{props.author}</p>
      <img src={props.cover} alt='book cover' className='w-1/2 aspect-[2/3]'/>
      <p>Weeks number one: {props.weeks_number_one}</p>
    </div>
  )
}