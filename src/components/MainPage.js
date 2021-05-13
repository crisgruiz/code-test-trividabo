import React, { useEffect, useState } from "react";
import "../styleSheets/layout/_mainPage.scss";
import {
  getDataFromApi,
  getDataFromApiFor100NUmbers,
} from "../services/getDataFromApi";
import Questions from "./Questions";

const MainPage = () => {
  const [questions, setQuestions] = useState([]);
  // const [userAnswer, setUserAnswer] = useState();

  //Llamada a los datos de la API
  useEffect(() => {
    getDataFromApi().then((data) => setQuestions(data));
  }, []);

  let newQuestions = questions;
  console.log(newQuestions);
  const h = typeof newQuestions;
  console.log(h);
  let arr = [];
  for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber);
    console.log(newQuestions[randomNumber]);
    let questionSplited = newQuestions[randomNumber].split(" ");
    arr.push(questionSplited);
  }
  console.log(arr);

  // let correctAnswer = originalQuestion[0];
  // const getQuestion = () => {
  //   let orderedQuestion = originalQuestion;
  //   orderedQuestion[0] = "What";
  //   let finalQuestion = orderedQuestion.join(" ");
  //   return finalQuestion;
  // };

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
  };
  return (
    <>
      <h1>Trividabo</h1>
      <h2>Question 1 of 10</h2>
      <Questions />
    </>
  );
};

export default MainPage;
