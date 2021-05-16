import "../styleSheets/layout/_questions.scss";
import ChoicesList from "./ChoicesList";

const Questions = (props) => {
  return (
    <>
      <p className="mainPage__count">Question {props.count} of 10</p>
      <div className="question">
        <p className="question__text">{props.question}</p>
        <form className="respondList">
          <ChoicesList
            saveUserAnswer={props.saveUserAnswer}
            choices={props.answers}
          />
        </form>
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
