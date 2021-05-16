import React, { useEffect, useState } from "react";
import "../styleSheets/layout/_mainPage.scss";
import { generateQuestionWithAnswers } from "../services/getDataFromApi";
import localStorage from "../services/localStorage";
import Questions from "./Questions";
import FinalGame from "./FinalGame";

const MainPage = () => {
  const [trivia, setTrivia] = useState({ choices: [] });
  const [userAnswer, setUserAnswer] = useState();
  const [count, setCount] = useState(localStorage.get("count", 1));
  const [answersList, setAnswersList] = useState(
    localStorage.get("answersList", [])
  );

  //Call to API data
  useEffect(() => {
    generateQuestionWithAnswers().then((data) => setTrivia(data));
  }, []);

  // local storage
  useEffect(() => {
    localStorage.set("trivia", trivia);
    localStorage.set("userAnswer", userAnswer);
    localStorage.set("count", count);
    localStorage.set("answersList", answersList);
  }, [trivia, userAnswer, count, answersList]);

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
    generateQuestionWithAnswers().then((data) => setTrivia(data));
  };

  const handleAnswersList = () => {
    setAnswersList(answersList.concat([trivia]));
  };

  const handleNextQuestion = () => {
    handleAnswersList();
    handleCount();
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

  const handleResults = () => {
    return answersList.map((answer, id) => {
      if (answer.isCorrect) {
        return (
          <>
            <div className="line"></div>
            <div key={id}>
              <p>{answer.text}</p>
              <div className="answer">
                <i className="fas fa-check-circle answer__icon"></i>
                <p className="answer__number">{answer.number}</p>
              </div>
            </div>
          </>
        );
      } else {
        return (
          <>
            <div className="line"></div>
            <div key={id}>
              <p>{answer.text}</p>
              <div className="answer">
                <i className="fas fa-times-circle answer__icon"></i>
                <p className="answer__skip">Skipped</p>
                <p className="answer__number">
                  - Right answer was {answer.number}
                </p>
              </div>
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
          handleNextQuestion={handleNextQuestion}
          saveUserAnswer={saveUserAnswer}
          count={count}
          handleResults={handleResults}
          handleConfirmAnswer={handleConfirmAnswer}
          handleSkip={handleSkip}
          handleReset={handleReset}
        />
      );
    }
  };

  console.log(answersList);

  return (
    <>
      <main>
        <h1 className="title">Trividabo</h1>
        <div className="mainPage">{showThings()}</div>
      </main>
    </>
  );
};

export default MainPage;
