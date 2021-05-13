const randomNum = () => {
  return Math.floor(Math.random() * 100);
};

const getDataFromApi = (a) => {
  return fetch(`http://numbersapi.com/${a || randomNum()}/trivia?json`).then(
    (response) => response.json()
  );
};

const getDataFromApiFor100NUmbers = () => {
  return fetch(`http://numbersapi.com/1..100/trivia?json`).then((response) =>
    response.json()
  );
};

const generateAnswers = (goodOption) => {
  const arr = [1, 2, 3, goodOption];
  return arr;
};

export {
  randomNum,
  getDataFromApi,
  getDataFromApiFor100NUmbers,
  generateAnswers,
};
// export default getDataFromApiFor100NUmbers;
