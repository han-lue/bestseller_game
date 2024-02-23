import { useState } from 'react'

import data from "../assets/data_test.json"
import GameStats from '../components/GameStats.tsx';
import BookLeft from '../components/BookLeft.tsx';
import BookRight from '../components/BookRight.tsx';
import GameOver from "../components/GameOver.tsx"
import YouWon from '../components/YouWon.tsx';

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

    const [bookLeft, setBookLeft] = useState<Book>({title: "", author: "", year_published: 0, cover: "", weeks_number_one: 0});
    const [bookRight, setBookRight] = useState<Book>({title: "", author: "", year_published: 0, cover: "", weeks_number_one: 0});

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
        setBookLeft({title: "", author: "", year_published: 0, cover: "", weeks_number_one: 0});
        setBookRight({title: "", author: "", year_published: 0, cover: "", weeks_number_one: 0});
        setRemainingBooks([]);
    }

    const handlePlayButton = () => {
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
        }
         
    }

    const handleAnswer = (answer: string) => {
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
            }   
        }
    }

  return (
    <div className='bg-black text-white h-screen w-screen flex flex-col items-center justify-center'>
        {
        playing 
        ? 
        <div className='bg-black text-white h-screen w-screen flex flex-col items-center justify-center pt-6'>
            <GameStats score={score} health={health}/>
            <div className='flex items-center justify-center w-full'>
                <BookLeft title={bookLeft.title} author={bookLeft.author} year_published={bookLeft.year_published}  cover={bookLeft.cover} weeks_number_one={bookLeft.weeks_number_one}/>
                <BookRight title={bookRight.title} author={bookRight.author} year_published={bookRight.year_published}  cover={bookRight.cover} handleAnswer={handleAnswer}/>
            </div>
            {
                gameOver && 
                <GameOver score={score} handlePlayButton={handlePlayButton}/>
            }
            {
                youWon &&
                <YouWon score={score} handlePlayButton={handlePlayButton}/>
            }
        </div>
        :  
        <div className='flex flex-col w-full h-full justify-center items-center'>
            <p>This is a simple higher or lower game where you try to guess which book stayed longer in the New York Times Bestseller List</p>
            <button className='bg-white text-black p-4 self-center' onClick={handlePlayButton}>Start Playing</button>
        </div>
        }
        
    </div>
  )
}
