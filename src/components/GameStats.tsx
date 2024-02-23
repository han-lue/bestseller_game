import React from 'react'
import Health from './Health.tsx'

export default function GameStats(props: {score: number, health: number}) {

  return (
    <div className='text-white justify-center'>
      <p>{`Score: ${props.score}`}</p>
      <Health health={props.health}/>
    </div>
  )
}
