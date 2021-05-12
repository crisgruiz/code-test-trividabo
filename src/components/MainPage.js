import React, { useEffect, useState } from "react";
import "../styleSheets/layout/_mainPage.scss";
import getDataFromApi from "../services/getDataFromApi";
import Questions from "./Questions";

const MainPage = () => {
  const [questions, setQuestions] = useState("");

  //Llamada a los datos de la API
  useEffect(() => {
    getDataFromApi().then((data) => setQuestions(data));
  }, []);

  let originalQuestion = questions.split(" ");
  console.log(originalQuestion);
  let correctAnswer = originalQuestion[0];
  let orderedQuestion = originalQuestion;
  orderedQuestion[0] = "What";
  let finalQuestion = orderedQuestion.join(" ");
  console.log(finalQuestion);
  return (
    <>
      <h1>Trividabo</h1>
      <h2>Question 1 of 10</h2>
      <Questions finalQuestion={finalQuestion} correctAnswer={correctAnswer} />
    </>
  );
};

export default MainPage;
