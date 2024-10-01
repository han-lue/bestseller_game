import { useState, useEffect } from 'react'

import data from "../assets/data.json"
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

type Status = "idle" | "correct" | "wrong";


export default function GamePage() {

    const [score, setScore] = useState<number>(0);
    const [health, setHealth] = useState<number>(3);
    const [answerIs, setAnswerIs] = useState<Status>("idle");

    const [showAnswer, setShowAnswer] = useState<boolean>(false);
    const [gameOver, setGameOver] = useState<boolean>(false);
    const [youWon, setYouWon] = useState<boolean>(false);

    const [bookLeft, setBookLeft] = useState<Book>({title: "", author: "", year_published: 0, cover: "", weeks_number_one: 0});
    const [bookRight, setBookRight] = useState<Book>({title: "", author: "", year_published: 0, cover: "", weeks_number_one: 0});

    const [remainingBooks, setRemainingBooks] = useState<Array<Book>>([]);

    useEffect(() => {
        startGame();
    }, []);


    // Sets up the starting point of the game
    function startGame() {
        let array = [...data];
        let index = Math.floor(Math.random() * (array.length - 1));
        setBookLeft(array.splice(index, 1)[0]);
        index = Math.floor(Math.random() * (array.length - 1));
        setBookRight(array.splice(index, 1)[0]);
        setRemainingBooks(array);
    }

    // Resets all the variables related to the previous game
    function resetStates() {
        setScore(0);
        setGameOver(false);
        setYouWon(false);
        setHealth(3);
        setShowAnswer(false);
        setBookLeft({title: "", author: "", year_published: 0, cover: "", weeks_number_one: 0});
        setBookRight({title: "", author: "", year_published: 0, cover: "", weeks_number_one: 0});
        setRemainingBooks([]);
    }

    //Resets the data about the previous game and starts a new game
    const handlePlayButton = () => {
        resetStates();
        startGame();
        
    }

    // Moves the book on the right to the left and gets a new book to show on the right side.
    function getNewBook() {
        if (remainingBooks.length > 0) {
            setShowAnswer(false);
            let array = [...remainingBooks];
            setBookLeft(bookRight);
            let index = Math.floor(Math.random() * (array.length - 1));
            setBookRight(array.splice(index, 1)[0]);
            setRemainingBooks(array);
        } else {
            setYouWon(true);
        }
    }

    // Shows a visual cue the indicate whether the answer was correct or wrong.
    function handleBackgroundColor(status: Status) {
        setAnswerIs(status);
        setTimeout(() => {setAnswerIs("idle")}, 2000);
    }

    // Checks whether the answer is correct or wrong
    const handleAnswer = (answer: string) => {
        //If the answer is correct
        if (answer === "+" && (bookLeft.weeks_number_one <= bookRight.weeks_number_one)) {
            handleBackgroundColor("correct");
            setScore(score + 1);
            setShowAnswer(true);
            setTimeout(getNewBook, 2000);
        } else if (answer === "-" && (bookLeft.weeks_number_one >= bookRight.weeks_number_one)) {
            handleBackgroundColor("correct");
            setScore(score + 1);
            setShowAnswer(true);
            setTimeout(getNewBook, 2000);
        
        // If the answer is wrong
        } else {
            if (health > 1) {
                handleBackgroundColor("wrong");
                setHealth(health - 1);
                setShowAnswer(true);
                setTimeout(getNewBook, 2000);
            } else {
                handleBackgroundColor("wrong");
                setHealth(health - 1);
                setGameOver(true);
            }   
        }
    }

  return (
    <div className='bg-gray text-white h-screen w-screen px-3 flex flex-col items-center justify-center'>
        <div className={` text-white h-full w-full flex flex-col items-center justify-center relative bg-gray`}>
            <GameStats score={score} health={health} gameOver={gameOver} youWon={youWon}/>

            <div className={`flex items-center justify-center w-full gap-4`}>
                <BookLeft title={bookLeft.title} author={bookLeft.author} year_published={bookLeft.year_published}  cover={bookLeft.cover} weeks_number_one={bookLeft.weeks_number_one}/>
                <BookRight title={bookRight.title} author={bookRight.author} year_published={bookRight.year_published}  cover={bookRight.cover} answerIs={answerIs} handleAnswer={handleAnswer} showAnswer={showAnswer} weeks_number_one={bookRight.weeks_number_one}/>
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
    </div>
  )
}