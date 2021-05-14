import React, { useEffect, useState } from "react";
import "../styleSheets/layout/_mainPage.scss";
import { generateQuestionWithAnswers } from "../services/getDataFromApi";
import Questions from "./Questions";
import ProgressBar from "./ProgressBar";

const MainPage = () => {
  const [trivia, setTrivia] = useState({ choices: [] });
  const [userAnswer, setUserAnswer] = useState();
  const [count, setCount] = useState(1);

  //Call to API data
  useEffect(() => {
    generateQuestionWithAnswers().then((data) => setTrivia(data));
  }, []);

  console.log(trivia);

  const saveUserAnswer = (e) => {
    const selectedItem = parseInt(e.currentTarget.id);
    setUserAnswer(selectedItem);
  };
  console.log(userAnswer);

  const handleCount = () => {
    console.log("Contando");
    if (count === 10) {
      setCount(1);
    } else {
      setCount(count + 1);
    }
  };

  const handleSkip = () => {
    generateQuestionWithAnswers().then((data) => setTrivia(data));
    handleCount();
  };

  const handleConfirmAnswer = () => {
    console.log("Me han elegido como respuesta");
    generateQuestionWithAnswers().then((data) => setTrivia(data));
    handleCount();
  };

  return (
    <>
      <h1>Trividabo</h1>
      <h2>Question {count} of 10</h2>
      <Questions
        question={trivia.text}
        answers={trivia.choices}
        correctAnswer={trivia.number}
        handleSkip={handleSkip}
        saveUserAnswer={saveUserAnswer}
        handleConfirmAnswer={handleConfirmAnswer}
        count={count}
      />
    </>
  );
};

export default MainPage;
