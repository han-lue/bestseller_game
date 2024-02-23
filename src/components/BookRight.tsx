import React from 'react'

type BookRightPropTypes = {
  title: string,
  author: string,
  year_published: number,
  cover: string,
  handleAnswer: (answer: string) => void
}

export default function BookRight({title, author, year_published, cover, handleAnswer}: BookRightPropTypes) {

  return (
    <div className='flex flex-col text-blue-400 w-1/2 items-center'>
      <p>{title} <span>{year_published}</span></p>
      <p>{author}</p>
      <img src={cover} alt='book cover' className='w-1/2 aspect-[2/3]'/>
      <div className='flex gap-4'>
        <button className='bg-blue-400 text-white' onClick={() => handleAnswer("-")}>lower</button>
        <button className='bg-blue-400 text-white' onClick={() => handleAnswer("+")}>higher</button>
      </div>
      
    </div>
  )
}
