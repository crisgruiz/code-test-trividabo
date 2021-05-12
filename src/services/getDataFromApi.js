const getDataFromApi = () => {
  const random = Math.floor(Math.random() * 100);
  return fetch(`http://numbersapi.com/${random}/trivia`).then((response) =>
    response.text()
  );
};

export default getDataFromApi;
