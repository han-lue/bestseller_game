import Health from './Health.tsx'

export default function GameStats(props: {score: number, health: number, gameOver: boolean, youWon: boolean}) {

  return (
    <div className={`text-white items-center self-start flex flex-col w-full gap-4 absolute top-4`}>
      <p className='c-font-headline font-bold'>Score: {props.score}</p>
      <Health health={props.health}/>
    </div>
  )
}
