import React, { useEffect, useState } from "react";
import "../styleSheets/layout/_mainPage.scss";
import { generateQuestionWithAnswers } from "../services/getDataFromApi";
import Questions from "./Questions";
import FinalAnswers from "./FinalAnswers";

const MainPage = () => {
  const [trivia, setTrivia] = useState({ choices: [] });
  const [userAnswer, setUserAnswer] = useState([]);

  //Llamada a los datos de la API
  useEffect(() => {
    generateQuestionWithAnswers().then((data) => setTrivia(data));
  }, []);

  let triviaData = trivia;
  console.log(trivia);

  const saveUserAnswer = (e) => {
    const selectedItem = parseInt(e.currentTarget.id);
    setUserAnswer(selectedItem);
    console.log("hola");
  };

  console.log(userAnswer);
  const handleSkip = () => {
    console.log("hello");
    generateQuestionWithAnswers().then((data) => setTrivia(data));
  };
  return (
    <>
      <h1>Trividabo</h1>
      <h2>Question 1 of 10</h2>
      <Questions
        question={triviaData.text}
        answers={triviaData.choices}
        correctAnswer={triviaData.number}
        handleSkip={handleSkip}
        saveUserAnswer={saveUserAnswer}
      />
      <FinalAnswers correctAnswer={triviaData.number} userAnswer={userAnswer} />
    </>
  );
};

export default MainPage;
