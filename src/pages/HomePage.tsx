import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className='h-screen w-screen bg-gray text-white'>

      <div className='flex flex-col w-full h-full justify-center items-center gap-12'>
            <p>This is a simple higher or lower game where you try to guess which book stayed longer in the New York Times Bestseller List</p>
            <Link to="/game" relative="patch"><button className='bg-white text-black p-4 self-center rounded-lg font-semibold hover:bg-opacity-80'>Start Playing</button></Link>
        </div>

    </div>
  )
}
