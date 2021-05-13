const Questions = (props) => {
  console.log(props);

  const answerList = props.answers.map((answer, id) => {
    return (
      <div key={id}>
        <li
          key={id}
          id={answer}
          className="respondList__answer"
          onClick={props.saveUserAnswer}
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
        <h3 className="question__text">{props.question}</h3>
        {<ul className="respondList">{answerList}</ul>}
      </div>
      <div className="buttons">
        <button className="buttons__confirm" type="button">
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
