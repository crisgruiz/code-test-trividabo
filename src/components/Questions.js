const Questions = (props) => {
  let answers = [];
  for (let i = 0; i < 4; i++) {
    let randomNumber = Math.floor(Math.random() * 100);
    answers.push(randomNumber);
  }
  console.log(answers);

  const answerList = answers.map((answer, id) => {
    return (
      <li key={id} className="RespondList__answer">
        {answer}
      </li>
    );
  });
  return (
    <>
      <div className="question">
        <h3 className="question__text"> {props.finalQuestion}</h3>
        <ul className="RespondList">{answerList}</ul>
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
          type="button" /*onClick={props.handleSkip}*/
        >
          Skip
        </button>
      </div>
    </>
  );
};

export default Questions;
