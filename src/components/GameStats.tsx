import React from 'react'
import Health from './Health.tsx'

export default function GameStats(props: {score: number, health: number}) {

  return (
    <div className='bg-white text-black h-1/2'>
      <p>{`Score: ${props.score}`}</p>
      <Health health={props.health}/>
    </div>
  )
}
