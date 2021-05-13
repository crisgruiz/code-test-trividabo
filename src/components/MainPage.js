import React, { useEffect, useState } from "react";
import "../styleSheets/layout/_mainPage.scss";
import {
  generateQuestionWithAnswers,
  generateAnswers,
} from "../services/getDataFromApi";
import Questions from "./Questions";

const MainPage = () => {
  const [trivia, setTrivia] = useState({ choices: [] });
  // const [userAnswer, setUserAnswer] = useState();

  //Llamada a los datos de la API
  useEffect(() => {
    generateQuestionWithAnswers().then((data) => setTrivia(data));
  }, []);

  let triviaData = trivia;
  console.log(trivia);
  // const saveUserAnswer = (e) => {
  //   const selectedItem = parseInt(e.currentTarget.id);
  //   if (selectedItem === parseInt(correctAnswer)) {
  //     console.log("hola");
  //   } else {
  //     console.log("Nan");
  //   }
  // };

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
      />
    </>
  );
};

export default MainPage;
