const randomNum = () => {
  return Math.floor(Math.random() * 100);
};

const getDataFromApi = (a) => {
  return fetch(`http://numbersapi.com/${a || randomNum()}/trivia?json`).then(
    (response) => response.json()
  );
};

let questionsArr = [];
for (let i = 0; i < 10; i++) {
  let randomNumber = Math.floor(Math.random() * 100);
  questionsArr.push(randomNumber);
}

// const getDataFromApi10Numbers = () => {
//   return fetch(
//     `http://numbersapi.com/${questionsArr[0]},${questionsArr[1]},${questionsArr[2]},${questionsArr[3]},${questionsArr[4]},${questionsArr[5]},${questionsArr[6]},${questionsArr[7]},${questionsArr[8]},${questionsArr[9]}/trivia?json`
//   ).then((response) => response.json());
// };

// const getDataFromApiFor100NUmbers = () => {
//   return fetch(`http://numbersapi.com/1..100}/trivia?json`).then((response) =>
//     response.json()
//   );
// };

const generateAnswers = (correctOption) => {
  const arr = [correctOption];
  do {
    const a = randomNum();
    if (!arr.includes(a)) {
      arr.push(a);
    }
  } while (arr.length < 4);
  return arr.sort();
};

const generateQuestion = (question) => {
  const questionSplited = question.split(" ");
  questionSplited[0] = "What";
  const questionJoined = questionSplited.join(" ");
  const questionWithoutDot = questionJoined.substring(
    0,
    questionJoined.length - 1
  );
  return questionWithoutDot + "?";
};

const generateQuestionWithAnswers = () => {
  return getDataFromApi().then((data) => {
    const trivia = {
      text: generateQuestion(data.text),
      number: data.number,
      choices: generateAnswers(data.number),
    };
    return trivia;
  });
};

export {
  randomNum,
  getDataFromApi,
  getDataFromApiFor100NUmbers,
  generateAnswers,
  generateQuestion,
  getDataFromApi10Numbers,
  generateQuestionWithAnswers,
};
// export default getDataFromApiFor100NUmbers;
