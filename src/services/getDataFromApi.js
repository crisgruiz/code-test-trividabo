const randomNum = () => {
  return Math.floor(Math.random() * 100);
};

const getDataFromApi = (a) => {
  return fetch(`http://numbersapi.com/${a || randomNum()}/trivia`).then(
    (response) => response.text()
  );
};

export { randomNum, getDataFromApi };
