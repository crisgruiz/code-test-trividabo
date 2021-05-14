import React, { useEffect, useState } from "react";
import "../styleSheets/layout/_mainPage.scss";
import { generateQuestionWithAnswers } from "../services/getDataFromApi";
import Questions from "./Questions";
import FinalGame from "./FinalGame";

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
    setCount(count + 1);
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
    handleAnswersList();
    handleCount();
    generateQuestionWithAnswers().then((data) => setTrivia(data));
  };

  const handleResults = () => {
    return answersList.map((answers, id) => {
      if (answers.number == userAnswer) {
        return (
          <>
            <div className="line"></div>
            <div key={id}>
              <p>{answers.text}</p>
              <p>{answers.number}</p>
            </div>
          </>
        );
      } else {
        return (
          <>
            <div className="line"></div>
            <div key={id}>
              <p>{answers.text}</p>
              <p>Right answer was {answers.number}</p>
            </div>
          </>
        );
      }
    });
  };

  const showThings = () => {
    if (answersList.length === 10) {
      return (
        <FinalGame
          answersList={answersList}
          handleReset={handleReset}
          handleResults={handleResults}
        />
      );
    } else {
      return (
        <Questions
          question={trivia.text}
          answers={trivia.choices}
          correctAnswer={trivia.number}
          handleNextQuestion={handleNextQuestion}
          saveUserAnswer={saveUserAnswer}
          userAnswer={userAnswer}
          count={count}
          answersList={answersList}
          handleResults={handleResults}
        />
      );
    }
  };

  console.log(answersList);

  return (
    <>
      <main className="mainPage">
        <h1 className="mainPage__title">Trividabo</h1>
        <div>{showThings()}</div>
      </main>
    </>
  );
};

export default MainPage;
