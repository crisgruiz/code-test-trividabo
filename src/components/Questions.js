import "../styleSheets/layout/_questions.scss";

const Questions = (props) => {
  const generateAnswerList = props.answers.map((answer, id) => {
    return (
      <div key={id} className="answersList">
        <label className="answersList__answer">
          <span className="answersList__btn"></span>
          <input
            type="radio"
            id={answer}
            value={answer}
            name="options"
            className="answersList__radio"
            onClick={props.saveUserAnswer}
          ></input>
          {answer}
        </label>
      </div>
    );
  });

  return (
    <>
      <p className="mainPage__count">Question {props.count} of 10</p>
      <div className="question">
        <p className="question__text">{props.question}</p>
        <form className="respondList">{generateAnswerList}</form>
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
        <button
          className="buttons__new"
          type="button"
          onClick={props.handleReset}
        >
          New game
        </button>
      </div>
      <div className="resultList">{props.handleResults()}</div>
    </>
  );
};

export default Questions;
