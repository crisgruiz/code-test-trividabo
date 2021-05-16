const ChoicesList = (props) => {
  return props.choices.map((choice, id) => {
    return (
      <div key={id} id={id} className="answersList">
        <label className="answersList__answer">
          <span className="answersList__btn"></span>
          <input
            type="radio"
            id={choice}
            value={choice}
            name="options"
            className="answersList__radio"
            onClick={props.saveUserAnswer}
          ></input>
          {choice}
        </label>
      </div>
    );
  });
};

export default ChoicesList;
