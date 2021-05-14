import React, { useEffect, useState } from "react";
import "../styleSheets/layout/_mainPage.scss";
import { generateQuestionWithAnswers } from "../services/getDataFromApi";
import Questions from "./Questions";
import ProgressBar from "./ProgressBar";

const MainPage = () => {
  const [trivia, setTrivia] = useState({ choices: [] });
  const [userAnswer, setUserAnswer] = useState();
  const [count, setCount] = useState(1);
  const [answersList, setAnswersList] = useState([]);

  //Call to API data
  useEffect(() => {
    generateQuestionWithAnswers().then((data) => setTrivia(data));
  }, []);
  console.log(trivia.text);
  console.log(trivia.number);
  const saveUserAnswer = (e) => {
    const selectedItem = parseInt(e.currentTarget.id);
    setUserAnswer(selectedItem);
  };

  const handleCount = () => {
    if (count > 10) {
      setCount(1);
    } else {
      setCount(count + 1);
    }
  };

  const handleReset = () => {
    setUserAnswer();
    setCount(1);
    setAnswersList([]);
  };

  const handleAnswersList = () => {
    setAnswersList(answersList.concat([trivia]));
  };

  const handleNextQuestion = () => {
    generateQuestionWithAnswers().then((data) => setTrivia(data));
  };

  const handleSkip = () => {
    handleAnswersList();
    handleCount();
    handleNextQuestion();
  };

  const handleConfirmAnswer = () => {
    if (userAnswer) {
      handleAnswersList();
      handleCount();
      handleNextQuestion();
    }
  };

  console.log(answersList);

  return (
    <>
      <main className="mainPage">
        <h1 className="mainPage__title">Trividabo</h1>
        <p className="mainPage__count">Question {count} of 10</p>
        <Questions
          question={trivia.text}
          answers={trivia.choices}
          correctAnswer={trivia.number}
          handleSkip={handleSkip}
          saveUserAnswer={saveUserAnswer}
          userAnswer={userAnswer}
          handleConfirmAnswer={handleConfirmAnswer}
          count={count}
          answersList={answersList}
          handleReset={handleReset}
        />
      </main>
    </>
  );
};

export default MainPage;
