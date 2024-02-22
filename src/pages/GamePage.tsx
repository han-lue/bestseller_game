import React, { useState } from 'react'

import data from "../assets/data.json"
import GameStats from '../components/GameStats.tsx';
import BookLeft from '../components/BookLeft.tsx';

interface Book {
    title: string,
    author: string,
    year_published: number,
    cover: string,
    weeks_number_one: number
  }

export default function GamePage() {

    const [playing, setPlaying] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);
    const [health, setHealth] = useState<number>(3);
    const [gameOver, setGameOver] = useState<boolean>(false);
    const [youWon, setYouWon] = useState<boolean>(false);

    const [bookLeft, setBookLeft] = useState<Book>();
    const [bookRight, setBookRight] = useState<Book>();

    const [remainingBooks, setRemainingBooks] = useState<Array<Book>>([]);

    function startGame() {
        let array = [...data];

        let index = Math.floor(Math.random() * (array.length - 1));
        console.log(index)

        setBookLeft(array.splice(index, 1)[0]);


        index = Math.floor(Math.random() * (array.length - 1));
        console.log(index)

        setBookRight(array.splice(index, 1)[0]);

        setRemainingBooks(array);

        console.log(bookLeft);
        console.log(bookRight);
    }

    function resetStates() {
        setPlaying(true);
        setScore(0);
        setGameOver(false);
        setYouWon(false);
        setHealth(3);
        setBookLeft({});
        setBookRight({});
        setRemainingBooks([]);
    }

    function handlePlayButton() {
        resetStates();
        startGame();
    }

    function getNewBook() {
        if (remainingBooks.length > 0) {

            let array = [...remainingBooks];
        
            setBookLeft(bookRight);
        
            let index = Math.floor(Math.random() * (array.length - 1));
            
            setBookRight(array.splice(index, 1)[0]);
        
            setRemainingBooks(array);
      
        } else {
            setYouWon(true);
            setPlaying(false);
        }
         
    }

    function handleAnswer(answer) {
        if (answer === "+" && bookLeft.weeks_number_one <= bookRight.weeks_number_one) {
            setScore(score + 1);
            getNewBook();
            
        } else if (answer === "-" && bookLeft.weeks_number_one >= bookRight.weeks_number_one) {
            setScore(score + 1);
            getNewBook();
      
        } else {
      
            if (health > 1) {
              setHealth(health - 1);
              getNewBook();
            } else {
              setGameOver(true);
              setPlaying(false);
            }   
        }
    }

  return (
    <div className='bg-black text-white h-screen w-screen flex flex-col'>
        {
        playing 
        ? 
        <>
            <GameStats score={score} health={health}/>
            <BookLeft title={bookLeft.title} author={bookLeft.author} year_published={bookLeft.year_published}  cover={bookLeft.cover} weeks_number_one={bookLeft?.weeks_number_one}/>
        </>

        :  
        <>
            <p>This is a simple higher or lower game where you try to guess which book stayed longer in the New York Times Bestseller List</p>
            <button className='bg-blue-400 text-white p-4 self-center' onClick={handlePlayButton}>Start Playing</button>
        </>
        }
        


    </div>
  )
}
