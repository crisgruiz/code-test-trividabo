import React, { useEffect, useState } from "react";
import "../styleSheets/layout/_mainPage.scss";
import { generateQuestionWithAnswers } from "../services/getDataFromApi";
import Questions from "./Questions";
import FinalAnswers from "./FinalAnswers";

const MainPage = () => {
  const [trivia, setTrivia] = useState({ choices: [] });
  const [userAnswer, setUserAnswer] = useState([]);
  const [count, setCount] = useState(1);

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

  const handleCount = () => {
    setCount(count + 1);
    console.log("Contando");
  };

  const handleSkip = () => {
    console.log("Me han borrado");
    generateQuestionWithAnswers().then((data) => setTrivia(data));
    handleCount();
  };

  return (
    <>
      <h1>Trividabo</h1>
      <h2>Question {count} of 10</h2>
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
