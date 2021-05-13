const Questions = (props) => {
  console.log(props);

  const answerList = props.answers.map((answer, id) => {
    return (
      <div key={id}>
        <label>
          <input
            type="radio"
            id={answer}
            value={answer}
            name="options"
            className="respondList__answer"
            onClick={props.saveUserAnswer}
          ></input>
          {answer}
        </label>
      </div>
    );
  });

  return (
    <>
      <div className="question">
        <h3 className="question__text">{props.question}</h3>
        {<form className="respondList">{answerList}</form>}
      </div>
      <div className="buttons">
        <button
          className="buttons__confirm"
          type="button"
          onClick={props.handleConfirmAnswer}
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
