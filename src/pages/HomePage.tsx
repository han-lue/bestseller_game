import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className='h-screen w-screen bg-gray text-white'>
      <div className='flex flex-col w-full h-full justify-center items-center gap-12 p-4 relative'>
          <a href="https://github.com/han-lue/bestseller_game" target="_blank" className="hover:underline c-font-title absolute top-4 font-semibold">Source code</a>
          <p className="c-font-headline text-center">This is a simple higher or lower game where you guess which book stayed longer in The New York Times Best Seller List between 1931-2023</p>
          <Link to="/game" relative="path"><button className='bg-white text-black p-4 c-font-text self-center rounded-lg font-semibold hover:bg-opacity-80'>Start Playing</button></Link>
      </div>
    </div>
  )
}
