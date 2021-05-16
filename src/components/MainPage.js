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
    if (localStorage.get("trivia")) {
      setTrivia(localStorage.get("trivia"));
    } else {
      generateQuestionWithAnswers().then((data) => setTrivia(data));
    }
  }, []);

  useEffect(() => {
    localStorage.set("trivia", trivia);
  }, [trivia]);

  // local storage
  useEffect(() => {
    localStorage.set("count", count);
    localStorage.set("answersList", answersList);
  }, [count, answersList]);

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

  const handleResults = () => {
    return answersList.map((answer, id) => {
      if (answer.isCorrect) {
        return (
          <div key={id} className="answerList">
            <div className="answerList__line"></div>
            <div className="answerList__container">
              <p>{answer.text}</p>
              <div className="answerList__answer">
                <i className="fas fa-check-circle answerList__answer--icon"></i>
                <p className="answerList__answer--number">{answer.number}</p>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div key={id} className="answerList">
            <div className="answerList__line"></div>
            <div className="answerList__container">
              <p>{answer.text}</p>
              <div className="answerList__answer">
                <i className="fas fa-times-circle answerList__answer--icon"></i>
                <p className="answerList__answer--skip">Skipped</p>
                <p className="answerList__answer--number">
                  - Right answer was {answer.number}
                </p>
              </div>
            </div>
          </div>
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
          handleConfirmAnswer={handleConfirmAnswer}
          handleSkip={handleSkip}
          handleReset={handleReset}
          handleResults={handleResults}
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
