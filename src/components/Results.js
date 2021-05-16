import "../styleSheets/layout/_results.scss";

const Results = (props) => {
  return props.answersList.map((answer, id) => {
    if (answer.isCorrect) {
      return (
        <div key={id} className="answerList">
          <div className="answerList__line"></div>
          <div className="answerList__container">
            <p>{answer.text}</p>
            <div className="answerList__answer">
              <i className="fas fa-check-circle answerList__answer--icon"></i>
              <p className="answerList__answer--number">{answer.number}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div key={id} className="answerList">
          <div className="answerList__line"></div>
          <div className="answerList__container">
            <p>{answer.text}</p>
            <div className="answerList__answer">
              <i className="fas fa-times-circle answerList__answer--icon"></i>
              <p className="answerList__answer--skip">Skipped</p>
              <p className="answerList__answer--number">
                - Right answer was {answer.number}
              </p>
            </div>
          </div>
        </div>
      );
    }
  });
};

export default Results;
