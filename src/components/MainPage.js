import React, { useEffect, useState } from "react";
import "../styleSheets/layout/_mainPage.scss";
import { generateQuestionWithAnswers } from "../services/getDataFromApi";
import { getJSON, setJSON } from "../services/localStorage";
import Questions from "./Questions";
import Results from "./Results";
import FinalGame from "./FinalGame";

const MainPage = () => {
  const [trivia, setTrivia] = useState({ choices: [] });
  const [userAnswer, setUserAnswer] = useState();
  const [count, setCount] = useState(getJSON("count", 1));
  const [answersList, setAnswersList] = useState(getJSON("answersList", []));

  //Call to API data
  useEffect(() => {
    if (getJSON("trivia")) {
      setTrivia(getJSON("trivia"));
    } else {
      generateQuestionWithAnswers().then((data) => setTrivia(data));
    }
  }, []);

  //LocalStorage

  useEffect(() => {
    setJSON("trivia", trivia);
  }, [trivia]);

  useEffect(() => {
    setJSON("count", count);
    setJSON("answersList", answersList);
  }, [count, answersList]);

  console.log(trivia.number);

  const saveUserAnswer = (e) => {
    const selectedItem = parseInt(e.currentTarget.id);
    setUserAnswer(selectedItem);
  };

  const handleCount = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setUserAnswer();
    setCount(1);
    setAnswersList([]);
    generateQuestionWithAnswers().then((data) => setTrivia(data));
  };

  const handleAnswersList = () => {
    setAnswersList(answersList.concat([trivia]));
  };

  const handleNextQuestion = () => {
    handleAnswersList();
    handleCount();
    setUserAnswer();
    generateQuestionWithAnswers().then((data) => setTrivia(data));
  };

  const handleConfirmAnswer = () => {
    if (userAnswer) {
      trivia.userAnswer = userAnswer;
      trivia.isCorrect = checkAnswer(trivia);
      handleNextQuestion();
    }
  };

  const handleSkip = () => {
    handleNextQuestion();
  };

  const checkAnswer = (answerTrivia) => {
    return answerTrivia.userAnswer === answerTrivia.number;
  };

  const printHTML = () => {
    if (answersList.length === 10) {
      return (
        <>
          <Results answersList={answersList} />
          <FinalGame
            answersList={answersList}
            handleReset={handleReset}
            // handleResults={handleResults}
          />
        </>
      );
    } else {
      return (
        <>
          <Questions
            question={trivia.text}
            answers={trivia.choices}
            handleNextQuestion={handleNextQuestion}
            saveUserAnswer={saveUserAnswer}
            count={count}
            handleConfirmAnswer={handleConfirmAnswer}
            handleSkip={handleSkip}
            handleReset={handleReset}
            // handleResults={handleResults}
          />
          <Results answersList={answersList} />
        </>
      );
    }
  };

  console.log(answersList);

  return (
    <>
      <main>
        <h1 className="title">Trividabo</h1>
        <div className="mainPage">{printHTML()}</div>
      </main>
    </>
  );
};

export default MainPage;
