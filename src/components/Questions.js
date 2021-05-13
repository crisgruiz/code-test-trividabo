const Questions = (props) => {
  let answers = [];
  for (let i = 0; i < 4; i++) {
    let randomNumber = Math.floor(Math.random() * 100);
    answers.push(randomNumber);
  }
  // let correctAnswer = props.correctAnswer;
  // answers[0] = parseInt(correctAnswer);
  // answers.sort();
  console.log(answers);
  // console.log(props.correctAnswer);
  const answerList = answers.map((answer, id) => {
    return (
      <div key={id}>
        <li
          key={id}
          // id={props.correctAnswer}
          className="respondList__answer"
          // onClick={props.saveUserAnswer}
        >
          <i className="fas fa-circle"></i>
          <p className="respondList__answer--element">{answer}</p>
        </li>
      </div>
    );
  });
  return (
    <>
      <div className="question">
        <h3 className="question__text"> {props.finalQuestion}</h3>
        <ul className="respondList">{answerList}</ul>
      </div>
      <div className="buttons">
        <button
          className="buttons__confirm"
          type="button" /*onClick={props.handleBtn}*/
        >
          Confirm
        </button>
        <button
          className="buttons__skip"
          type="button"
          onClick={props.handleSkip}
        >
          Skip
        </button>
      </div>
    </>
  );
};

export default Questions;
