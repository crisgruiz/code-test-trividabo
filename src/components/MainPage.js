import React, { useEffect, useState } from "react";
import "../styleSheets/layout/_mainPage.scss";
import getDataFromApi from "../services/getDataFromApi";

const MainPage = () => {
  const [questions, setQuestions] = useState([]);
  console.log(getDataFromApi());

  //Llamamos a los datos de la API
  useEffect(() => {
    getDataFromApi().then((data) => setQuestions(data));
  }, []);
  return (
    <>
      <h1>Hello world!111!</h1>
      <p>{questions}</p>
    </>
  );
};

export default MainPage;
