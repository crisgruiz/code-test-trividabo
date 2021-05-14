import FinalGame from "./FinalGame";
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

  const handleEndOfGame = () => {
    if (props.count === 10) {
      return <FinalGame handleReset={props.handleReset} />;
    }
  };

  const handleResults = () => {
    return props.answersList.map((answers) => {
      if (answers.number == props.userAnswer) {
        return (
          <>
            <p>{answers.text}</p>
            <p>{answers.number}</p>
          </>
        );
      } else {
        return (
          <>
            <p>{answers.text}</p>
            <p>Right answer was {answers.number}</p>
          </>
        );
      }
    });
  };

  return (
    <>
      <div className="question">
        <h3 className="question__text">{props.question}</h3>
        {<form className="respondList">{generateAnswerList}</form>}
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
      <div className="resultList">{handleResults()}</div>
      <div className="playAgain">{handleEndOfGame()}</div>
    </>
  );
};

export default Questions;
