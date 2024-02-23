import Health from './Health.tsx'

export default function GameStats(props: {score: number, health: number}) {

  return (
    <div className='text-white items-center justify-center'>
      <p className='text-3xl'>Score: {props.score}</p>
      <Health health={props.health}/>
    </div>
  )
}
