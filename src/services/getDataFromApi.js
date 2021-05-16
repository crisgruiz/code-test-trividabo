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
  generateAnswers,
  generateQuestion,
  generateQuestionWithAnswers,
};
