const getDataFromApi = () => {
  return fetch("http://numbersapi.com/random/trivia")
    .then((response) => response.text())
    .then((data) => data);
};

export default getDataFromApi;
