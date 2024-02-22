import React, { useState } from 'react'

interface Book {
    title: string,
    author: string,
    year_published: number,
    cover: string,
    weeks_number_one: number
  }

export default function Game() {

    const [playing, setPlaying] = useState<boolean>(false);
    const [score, setScore] = useState<number>();
    const [gameOver, setGameOver] = useState<boolean>(false);
    const [youWon, setYouWon] = useState<boolean>(false);
    const [health, setHealth] = useState<number>(3);

    const [bookLeft, setBookLeft] = useState<Book>();
    const [bookRight, setBookRight] = useState<Book>();
    
    const [remainingBooks, setRemainingBooks] = useState<Array<Book>>([]);


  return (
    <div className='bg-black text-white h-12 w-24'>Game</div>
  )
}
