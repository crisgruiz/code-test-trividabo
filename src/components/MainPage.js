import React, { useEffect, useState } from "react";
import "../styleSheets/layout/_mainPage.scss";
import { generateQuestionWithAnswers } from "../services/getDataFromApi";
import { getJSON, setJSON } from "../services/localStorage";
import NoRespond from "./NoRespond";
import Loading from "./Loading";
import Questions from "./Questions";
import Results from "./Results";
import FinalGame from "./FinalGame";

const MainPage = () => {
  const [trivia, setTrivia] = useState({ choices: [] });
  const [userAnswer, setUserAnswer] = useState();
  const [count, setCount] = useState(getJSON("count", 1));
  const [answersList, setAnswersList] = useState(getJSON("answersList", []));

  //Load the first time
  useEffect(() => {
    if (getJSON("trivia", {}).text) {
      setTrivia(getJSON("trivia"));
    } else {
      generateQuestionWithAnswers().then((data) => setTrivia(data));
    }
  }, []);

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
    if (!trivia.text && !trivia.error) {
      return <Loading />;
    } else if (trivia.error) {
      return <NoRespond />;
    } else {
      if (answersList.length === 10) {
        return (
          <>
            <Results answersList={answersList} />
            <FinalGame answersList={answersList} handleReset={handleReset} />
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
            />
            <Results answersList={answersList} />
          </>
        );
      }
    }
  };

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
