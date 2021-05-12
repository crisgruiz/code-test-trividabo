const getDataFromApi = () => {
  const random = Math.floor(Math.random() * 99 + 1);
  return fetch(`http://numbersapi.com/${random}/trivia`)
    .then((response) => response.text())
    .then((data) => data);
};

export default getDataFromApi;
